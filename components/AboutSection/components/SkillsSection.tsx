"use client";
import SkillCard from "@/components/ui/SkillCard";
import { skills } from "@/data";
import { motion, useInView, stagger } from "framer-motion";
import { useRef } from "react";

interface IProps {}

const SkillsSection = ({}: IProps) => {
  // STATES
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, 
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="flex flex-col gap-6 my-4" ref={containerRef}>
      <motion.h1
        initial={{ x: -300, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100 }}
        className="font-bold md:text-lg"
      >
        SKILLS
      </motion.h1>

      <motion.div
        className="flex flex-wrap gap-3"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={item}>
            <SkillCard skill={skill.skill} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
