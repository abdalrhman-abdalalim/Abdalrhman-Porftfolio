"use client";
import { ReactNode } from "react";
import Navbar from "../layout/navbar/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface IProps {
  children: ReactNode;
}

const TransitionProvider = ({ children }: IProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className={`bg-gradient-to-b from-[#1E3E62] to-[#070F2B] min-h-screen w-full text-white`}
      >
        <motion.div
          className="h-screen w-screen fixed bg-white rounded-b-[100px] z-30"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 right-0 left-0 w-fit h-fit text-black cursor-default z-50 text-2xl sm:text-8xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-white bottom-0 rounded-t-[100px] z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-18">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-4.5rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
