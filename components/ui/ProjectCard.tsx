"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useRef } from "react";
import { TechIcons } from "@/data";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export type Technology =
  | "next"
  | "tailwind"
  | "typescript"
  | "react"
  | "mongodb"
  | "prisma"
  | "laravel"
  | "framer-motion"
  | "zod"
  | "clerk"
  | "shadcn"
  | "axios"
  | "html"
  | "css"
  | "javascript"
  | "bootstrap";

export interface IProjectCard {
  title: string;
  imageSrc: StaticImageData;
  CoverImg: StaticImageData;
  description: string;
  demoLink?: string;
  githubLink?: string;
  technologies?: Technology[];
  backLink?: string;
}

const FullPageProjectCard = ({
  title,
  imageSrc,
  description,
  demoLink,
  githubLink,
  technologies,
  CoverImg,
}: IProjectCard) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const textInView = useInView(textRef, { once: false, amount: 0.5 });
  const imageInView = useInView(imageRef, { once: false, amount: 0.5 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  // Get icon component for a given technology
  const getTechIcon = (tech: Technology) => {
    const found = TechIcons.find((item) => item.title === tech);
    return found ? found.icon : null;
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative h-full w-[100vw] overflow-hidden scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg, opacity }}>
        <Image
          src={CoverImg}
          alt={title}
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-12 pt-20 pb-16">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="flex-1 text-white max-w-2xl"
            initial={{ x: -100, opacity: 0 }}
            animate={
              textInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl sm:text-6xl md:text-7xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={
                textInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-[10px] sm:text-sm mb-8 leading-relaxed sm:block hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={
                textInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {description}
            </motion.p>

            {technologies && technologies.length > 0 && (
              <motion.div
                className="mb-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-sm sm:text-xl font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => {
                    const techData = TechIcons.find(
                      (item) => item.title === tech
                    );
                    if (!techData) return null;

                    return (
                      <motion.div
                        key={tech}
                        className="flex flex-col items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.9 + index * 0.1,
                        }}
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          className={`p-3 rounded-full flex items-center justify-center 
                               bg-white/20 backdrop-blur-sm hover:bg-white/30
                               border border-white/10 hover:border-white/20
                               cursor-default`}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: techData.color
                              ? `${techData.color}20`
                              : "rgba(255,255,255,0.3)",
                            borderColor: techData.color
                              ? `${techData.color}40`
                              : "rgba(255,255,255,0.4)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <techData.icon
                            className="text-lg md:text-2xl"
                            style={{ color: techData.color || "#FFFFFF" }}
                          />
                        </motion.div>
                        <motion.span
                          className="text-xs mt-2 opacity-70"
                          whileHover={{ opacity: 1 }}
                        >
                          {tech}
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Mobile Links - Show only on small screens */}
            <div className="lg:hidden flex gap-4 mt-4">
              {demoLink && (
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-medium flex items-center gap-2 bg-white/20 backdrop-blur-sm px-2 py-3 rounded-full border border-white/30 hover:bg-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink /> Live Preview
                </motion.a>
              )}
              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-medium flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub /> View Code
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Image Preview */}
          <motion.div
            ref={imageRef}
            className="hidden lg:block flex-1 max-w-xl"
            initial={{ x: 100, opacity: 0 }}
            animate={
              imageInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.4)",
                transition: { duration: 0.3 },
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                imageInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                quality={90}
              />

              {/* Combined Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {demoLink && (
                  <motion.a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-medium flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> Live Preview
                  </motion.a>
                )}

                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-medium flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> View Code
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullPageProjectCard;
