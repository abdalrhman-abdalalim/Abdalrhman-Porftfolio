"use client";
import PortfolioPage from "@/components/PortfolioSection/PortfolioPage";
import { motion } from "framer-motion";

interface IProps {}

const page = ({}: IProps) => {
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <PortfolioPage />
    </motion.div>
  );
};

export default page;
