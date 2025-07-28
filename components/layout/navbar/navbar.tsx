"use client";
import LogoIcon from "@/app/ChatGPT Image May 11, 2025, 10_37_33 PM.png";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { renderNavLinks, renderSocialLinks } from "@/utils/navUtils";
import { useEffect, useState } from "react";
import MobilePage from "./MobilePage";

const Navbar = () => {
  /** States */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex items-center justify-between">
      <div className="md:flex max-md:hidden flex gap-1 items-center w-1/3">
        {renderNavLinks()}
      </div>
      <div className="lg:w-1/3 lg:flex lg:justify-center md:hidden overflow-hidden">
        <Link href={"/"}>
          {LogoIcon ? (
            <Image
              src={LogoIcon}
              alt="Site Logo"
              width={50}
              height={20}
              className="rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
            />
          ) : (
            <div className="w-[50px] h-[50px] bg-gray-300 rounded-4xl" />
          )}
        </Link>
      </div>
      <div className="hidden md:flex flex-row gap-4 w-1/3">
        {renderSocialLinks()}
      </div>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <IoMdMenu className="w-[40px] h-[40px] cursor-pointer transition-all duration-200 hover:scale-110" />
      </button>
      <MobilePage onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
