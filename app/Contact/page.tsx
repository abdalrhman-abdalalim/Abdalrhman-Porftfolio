"use client";
import { motion } from "framer-motion";
import { useRef, useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const text = "Say Something to Abdalrhman";
  const form = useRef<HTMLFormElement>(null);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      toast.error("Form submission error");
      return;
    }

    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.sendForm(
        "service_ht63dnp",
        "template_imbzebk",
        form.current,
        "NgFIVVkzIgnhEBitM"
      );

      setFormValues({ user_name: "", user_email: "", user_message: "" });
      toast.success("Message sent successfully!", { id: loadingToast });
    } catch (err) {
      toast.error("Failed to send message. Please try again.", {
        id: loadingToast,
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full overflow-y-auto bg-gradient-to-b from-[#1E3E62] to-[#070F2B]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
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

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* TEXT CONTAINER - Full width on mobile, half on desktop */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0 lg:pr-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-center max-w-md mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              Contact Me
            </motion.h1>
            <div className="text-lg sm:text-xl md:text-2xl text-white/90">
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FORM CONTAINER - Full width on mobile, half on desktop */}
        <motion.form
          onSubmit={onSubmitHandler}
          ref={form}
          className="w-full lg:w-1/2 bg-[#1E3E62]/70 backdrop-blur-md border border-[#2D4B7A] rounded-xl flex flex-col gap-6 p-6 sm:p-8 md:p-10 lg:p-12 mt-8 lg:mt-0"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <label
              htmlFor="user_name"
              className="block text-white/80 mb-2 text-sm sm:text-base"
            >
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={formValues.user_name}
              onChange={onChangeHandler}
              className="w-full bg-[#070F2B]/50 text-white border-b-2 border-[#3A5F8A] focus:border-[#60A5FA] outline-none p-2 sm:p-3 rounded-t-lg transition-all duration-300 placeholder-white/50 text-sm sm:text-base"
              required
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <label
              htmlFor="user_email"
              className="block text-white/80 mb-2 text-sm sm:text-base"
            >
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={formValues.user_email}
              onChange={onChangeHandler}
              className="w-full bg-[#070F2B]/50 text-white border-b-2 border-[#3A5F8A] focus:border-[#60A5FA] outline-none p-2 sm:p-3 rounded-t-lg transition-all duration-300 placeholder-white/50 text-sm sm:text-base"
              required
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <label
              htmlFor="message"
              className="block text-white/80 mb-2 text-sm sm:text-base"
            >
              Your Message
            </label>
            <textarea
              name="user_message"
              id="message"
              value={formValues.user_message}
              onChange={onChangeHandler}
              className="w-full bg-[#070F2B]/50 text-white border-b-2 border-[#3A5F8A] focus:border-[#60A5FA] outline-none p-2 sm:p-3 rounded-t-lg h-24 sm:h-32 resize-none transition-all duration-300 placeholder-white/50 text-sm sm:text-base"
              placeholder="Enter your message"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-4"
          >
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3A5F8A] to-[#60A5FA] hover:from-[#60A5FA] hover:to-[#3A5F8A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#60A5FA]/30 text-sm sm:text-base"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
