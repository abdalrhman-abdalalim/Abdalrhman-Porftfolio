"use client";
import Button from "./components/Button";
import CheckItem from "./components/CheckItem";

interface IProps {
  onContactClick?: () => void;
}

const HeroContent = ({ onContactClick }: IProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-white mb-4">
        Hello! I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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

      <div className="flex items-center gap-3 mb-6">
        <div className="w-24 h-px bg-white/30"></div>
        <p className="text-white/70">Frontend Developer</p>
        <span className="text-cyan-400">✦</span>
      </div>

      <p className="text-white/60 max-w-md mb-8">
        I’m a passionate{" "}
        <span className="text-white font-semibold">Frontend Developer</span>{" "}
        specializing in{" "}
        <span className="text-white font-semibold">
          React.js, Next.js, and TypeScript
        </span>
        . I build fast, scalable, and user-friendly web applications with a
        focus on clean design, performance, and accessibility.
      </p>

      <div className="space-y-2 mb-8">
        <CheckItem text="Build responsive, high-performance UIs" />
        <CheckItem text="Focus on scalability and clean architecture" />
        <CheckItem text="Deliver seamless user experiences" />
      </div>

      <div className="flex gap-4">
        <Button variant="primary" onClick={onContactClick}>
          Let's Talk
        </Button>
        <a
          href="https://drive.google.com/file/d/1I-LYf-wiVTdJcE-ak1O99tPSkBGVjkVY/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary">
            Show CV
            <span className="ml-2">↓</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
