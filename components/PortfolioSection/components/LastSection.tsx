"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface IProps {}

const LastSection = ({}: IProps) => {
  return (
    <div className="w-full h-fit md:mt-20  flex flex-col items-center justify-center text-center text-white ">
      <h1 className="text-2xl text-white ">Do you have a project?</h1>
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[500px] md:h-[500px] "
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#FFFFFF">
            <textPath xlinkHref="#circlePath" className="text-xl">
              Front-end Developer and UI Designer
            </textPath>
          </text>
        </motion.svg>
        <Link
          href="/contact"
          className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default LastSection;
