"use client";
import HeroPage from "@/components/HeroSection/HeroPage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <HeroPage />
    </motion.div>
  );
}
