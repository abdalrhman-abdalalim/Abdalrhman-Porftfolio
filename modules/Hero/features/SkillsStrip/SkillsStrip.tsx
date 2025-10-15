"use client";
import { useRef, useEffect } from "react";
import SkillBadge from "./components/Skillbadge";

interface IProps {}

const SkillsStrip = ({}: IProps) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Responsive Design",
    "Performance Optimization",
    "UI/UX Design",
    "Git",
    "REST APIs",
    "GraphQL",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Figma",
  ];

  return (
    <div className="relative my-8 lg:my-12 overflow-hidden bg-transparent transform -skew-y-5">
      {/* Fixed Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:16px_16px]"></div>
      </div>

      {/* Animated Skills Strip */}
      <div className="relative flex animate-loop-scroll-mobile md:animate-loop-scroll-desktop group">
        {/* First set */}
        {skills.map((skill, index) => (
          <SkillBadge key={`first-${index}`} text={skill} />
        ))}
        {/* Duplicate for seamless loop */}
        {skills.map((skill, index) => (
          <SkillBadge key={`second-${index}`} text={skill} />
        ))}
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes loop-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-loop-scroll-mobile {
          animation: loop-scroll 5s linear infinite;
        }
        .animate-loop-scroll-desktop {
          animation: loop-scroll 15s linear infinite;
        }
        .animate-loop-scroll-mobile:hover,
        .animate-loop-scroll-desktop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillsStrip;
