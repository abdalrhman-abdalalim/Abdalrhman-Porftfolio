"use client";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IProps {}

const WorkTimeLine = ({}: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const lineItem = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full" ref={containerRef}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="flex justify-between"
            variants={item}
          >
            {/* Left card */}
            <div className="w-5/12">
              {index % 2 === 0 && (
                <ExperienceCard
                  title={experience.title}
                  description={experience.description}
                  duration={experience.duration}
                  company={experience.company}
                />
              )}
            </div>

            {/* Timeline with circles */}
            <div className="w-1/6 flex flex-col items-center">
              <motion.div
                className="w-1 h-full bg-gray-200 relative"
                variants={lineItem}
              >
                <motion.div
                  className="absolute w-4 h-4 rounded-full bg-white border-4 border-red-400 -left-1.5 transform -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            </div>

            {/* Right card */}
            <div className="w-5/12">
              {index % 2 !== 0 && (
                <ExperienceCard
                  title={experience.title}
                  description={experience.description}
                  duration={experience.duration}
                  company={experience.company}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkTimeLine;
