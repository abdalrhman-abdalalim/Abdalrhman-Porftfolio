import { ILinks } from "@/interfaces";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface MotionNavLinkProps extends ILinks {
  variants?: Variants;
}

const NavLink = ({ href, title, className, variants }: MotionNavLinkProps) => {
  return (
    <motion.div
      variants={variants}
      className={`${className} md:mr-2 font-semibold hover:text-white hover:bg-black rounded-md p-1 text-sm duration-150 transition-all ease-in-out`}
    >
      <Link href={href}>
        <h2>{title}</h2>
      </Link>
    </motion.div>
  );
};

export default NavLink;
