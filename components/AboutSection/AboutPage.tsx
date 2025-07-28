"use client";
import { useRef } from "react";
import BiograhphySection from "./components/BiograhphySection";
import Brain from "./components/Brain";
import ExperinceSection from "./components/ExperinceSection";
import SkillsSection from "./components/SkillsSection";
import { useScroll } from "framer-motion";

interface IProps {}

const AboutPage = ({}: IProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div
      className="h-full overflow-y-scroll flex flex-col lg:flex-row pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-48"
      ref={containerRef}
    >
      <div className="flex flex-col gap-10 lg:w-2/3 py-10">
        <BiograhphySection />
        <SkillsSection />
        <ExperinceSection />
      </div>

      {/* Brain Column */}
      <div className="hidden lg:block w-1/3 sticky top-0 h-screen z-30">
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default AboutPage;
