"use client";
import { FaQuoteLeft } from "react-icons/fa";

interface IProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: IProps) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 overflow-hidden shadow-[0_0_30px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:scale-[1.02] group">
      {/* Soft Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-600/3 to-cyan-500/3 opacity-70 rounded-2xl group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Animated Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 h-full">
        {/* Quote Section */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-4">
            <FaQuoteLeft className="text-pink-500/70 text-xl mt-1 flex-shrink-0" />
            <blockquote className="text-sm text-white/90 leading-relaxed line-clamp-5">
              {quote}
            </blockquote>
          </div>
        </div>

        {/* Author Section */}
        <div className="border-t border-white/10 pt-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {/* Avatar Placeholder with Gradient Border */}
              <div className="relative group/avatar">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full opacity-60 group-hover/avatar:opacity-80 transition-opacity duration-300 blur-sm"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-white/80 text-sm font-semibold">
                    {author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm truncate">
                  {author}
                </h3>
                <p className="text-white/60 text-xs truncate">{role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white/50 text-xs ml-1">5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating glow particles */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-30 animate-ping"></div>
      <div className="absolute bottom-2 right-3 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-pulse delay-700"></div>
    </div>
  );
};

export default TestimonialCard;
