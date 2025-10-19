"use client";
import Button from "./components/Button";
import CheckItem from "./components/CheckItem";

interface IProps {
  onContactClick?: () => void;
}

const HeroContent = ({ onContactClick }: IProps) => {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Animated Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-4 hover:bg-white/10 transition-all duration-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-xs sm:text-sm text-white/70 font-medium">
          Available for work
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
        Hello! I'm{" "}
        <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Abdalrh
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(10deg, #3b82f6 25%, #ef4444 75%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            m
          </span>
          an
        </span>
      </h1>

      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <p className="text-sm sm:text-base text-white/70 font-medium tracking-wide">
          Frontend Developer
        </p>
        <span className="text-cyan-400 text-lg animate-pulse">✦</span>
      </div>

      <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl leading-relaxed">
        I'm a passionate{" "}
        <span className="text-white font-semibold relative inline-block group">
          Frontend Developer
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
        </span>{" "}
        specializing in{" "}
        <span className="text-white font-semibold">
          React.js, Next.js, and TypeScript
        </span>
        . I build fast, scalable, and user-friendly web applications with a
        focus on clean design, performance, and accessibility.
      </p>

      <div className="space-y-2 sm:space-y-3 py-4 sm:py-6">
        <CheckItem text="Build responsive, high-performance UIs" />
        <CheckItem text="Focus on scalability and clean architecture" />
        <CheckItem text="Deliver seamless user experiences" />
      </div>

      <div className="flex flex-row gap-3 sm:gap-4 pt-4">
        <Button variant="primary" onClick={onContactClick}>
          Let's Talk
        </Button>

        <Button variant="secondary">
          <span className="flex items-center justify-center gap-2">
            Show CV
            <span className="inline-block transform group-hover:translate-y-1 transition-transform duration-300">
              ↓
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
