"use client";
import { useRef } from "react";
import HeroContent from "./features/HeroContent/HeroContent";
import HeroVisual from "./features/HeroVisual/HeroVisual";
import SkillsStrip from "./features/SkillsStrip/SkillsStrip";
import SocialLinks from "./features/SocialLinks/SocialLinks";

interface IProps {
  onContactClick?: () => void;
}

const HeroScreen = ({ onContactClick }: IProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 right-0 w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-3xl rounded-full z-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 blur-3xl rounded-full z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] z-0"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-18 sm:pt-20 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <HeroContent onContactClick={onContactClick} />
          <HeroVisual />
        </div>
      </div>

      <div className="relative z-20">
        <SocialLinks />
        <SkillsStrip />
      </div>
    </div>
  );
};

export default HeroScreen;
