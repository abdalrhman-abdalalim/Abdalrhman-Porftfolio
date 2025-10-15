"use client";
import { forwardRef, useState, FormEvent, ChangeEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import ArrowDecoration from "./features/ArrowDecoration/ArrowDecoration";
import PenDecoration from "./features/PenDecoration/PenDecoration";
import ServiceTag from "./features/ServiceTag/ServiceTag";

interface FormData {
  name: string;
  email: string;
  company: string;
  interests: string[];
  message: string;
}

const ContactSectionScreen = forwardRef<HTMLDivElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    interests: [],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow development",
    "App design",
    "Graphic design",
    "Wordpress",
  ];

  const handleInterestToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(service)
        ? prev.interests.filter((s) => s !== service)
        : [...prev.interests, service],
    }));
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("Sending message...");

    try {
      // Prepare the data for EmailJS
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_company: formData.company,
        user_interests: formData.interests.join(", "),
        user_message:
          formData.message || `Interested in: ${formData.interests.join(", ")}`,
      };

      await emailjs.send(
        "service_ht63dnp",
        "template_imbzebk",
        templateParams,
        "NgFIVVkzIgnhEBitM"
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        interests: [],
        message: "",
      });

      toast.success("Message sent successfully!", {
        id: loadingToast,
        duration: 4000,
      });
    } catch (err) {
      console.error("Email sending error:", err);
      toast.error("Failed to send message. Please try again.", {
        id: loadingToast,
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1E3E62",
            color: "#fff",
            border: "1px solid #2D4B7A",
          },
          success: {
            iconTheme: {
              primary: "#4ADE80",
              secondary: "#070F2B",
            },
          },
          error: {
            iconTheme: {
              primary: "#F87171",
              secondary: "#070F2B",
            },
          },
          loading: {
            iconTheme: {
              primary: "#60A5FA",
              secondary: "#070F2B",
            },
          },
        }}
      />

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/10 to-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Decorative Elements */}
      <ArrowDecoration />
      <PenDecoration />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Say Hi!
            </span>{" "}
            and tell me about
            <br />
            your idea
          </h2>
          <p className="text-white/60 text-sm mt-6">
            Have a nice works? reach out, and let's chat.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-white/80 text-sm font-medium mb-3"
              >
                Name <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={onChangeHandler}
                placeholder="Hello..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300"
                disabled={isSubmitting}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-white/80 text-sm font-medium mb-3"
              >
                Email <span className="text-pink-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={onChangeHandler}
                placeholder="Where can I reply"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="company"
              className="block text-white/80 text-sm font-medium mb-3"
            >
              Company name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={onChangeHandler}
              placeholder="Your company or website"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          {/* What's in your mind */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-4">
              What's in your mind? <span className="text-pink-500">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <ServiceTag
                  key={service}
                  label={service}
                  selected={formData.interests.includes(service)}
                  onClick={() => !isSubmitting && handleInterestToggle(service)}
                  disabled={isSubmitting}
                />
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-white/80 text-sm font-medium mb-3"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={onChangeHandler}
              placeholder="Tell me more about your project..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 h-32 resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name ||
                !formData.email ||
                formData.interests.length === 0
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-pink-500/30 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send me your message
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </span>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 group-disabled:translate-x-0"></div>
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-center text-white/40 text-xs mt-6">
            It'll just take 30 seconds to grab the 24 hours.
          </p>
        </form>
      </div>

      {/* CSS for Arrow Animation */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </section>
  );
});

ContactSectionScreen.displayName = "ContactSectionScreen";

export default ContactSectionScreen;
