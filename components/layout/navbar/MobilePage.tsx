import { renderNavLinks } from "@/utils/navUtils";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobilePage = ({ isOpen, onClose }: IProps) => {
  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        when: "beforeChildren", // Animate container before children
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren", // Wait for children to animate out first
      },
    },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // Reverse the stagger on exit
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-50 min-h-screen flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 cursor-pointer hover:scale-110 duration-200 transition-all ease-in-out"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoMdClose className="w-10 h-10 text-white" />
          </motion.button>

          <motion.div
            className="flex flex-col gap-8 text-white text-4xl text-center"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderNavLinks().map((link, index) => (
              <NavLink
                key={index}
                href={link.props.href}
                title={link.props.title}
                className={link.props.className}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobilePage;
