"use client";
import { useRef } from "react";
import HeroContent from "./features/HeroContent/HeroContent";
import HeroVisual from "./features/HeroVisual/HeroVisual";
import SkillsStrip from "./features/SkillsStrip/SkillsStrip";
import SocialLinks from "./features/SocialLinks/SocialLinks";
import ContactSectionScreen from "../Contact/ContactSectionScreen";

interface IProps {
  onContactClick?: () => void;
}

const HeroScreen = ({ onContactClick }: IProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects - Lower Z-index */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-3xl rounded-full z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 blur-3xl rounded-full z-10"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
