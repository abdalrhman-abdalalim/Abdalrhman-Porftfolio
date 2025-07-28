"use client";
import AboutPage from "@/components/AboutSection/AboutPage";
import { motion } from "framer-motion";

interface IProps {}

const page = ({}: IProps) => {
  return (
    <motion.div
      className="h-full scroll-container"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <AboutPage />
    </motion.div>
  );
};

export default page;
