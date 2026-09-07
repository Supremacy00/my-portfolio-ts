"use client";
import { useState } from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import { FaBriefcase, FaBloggerB } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaUser, FaThList, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@/context/theme-provider";
import BlogDrawer from "../blogs/BlogDrawer";

const RightSideBar = () => {
  const { activeSection, handleSetActive } = useMyComponentContext();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="w-full mx-auto transition-all duration-300 ease-in-out font-IBM">
      <div className=" px-7 py-8 rounded-[30px] flex items-center flex-col space-y-8 bg-white dark:bg-secondary custom-cursor">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="group cursor-pointer"
          aria-label="Open menu"
        >
          <div className="h-0.5 w-5 bg-light transition-all duration-300 ease-in-out group-hover:w-7 group-hover:bg-custom5 dark:bg-white dark:group-hover:bg-custom5" />
          <div className="mt-1.25 h-0.5 w-7 bg-light transition-all duration-300 ease-in-out group-hover:bg-custom5 dark:bg-white dark:group-hover:bg-custom5" />
          <div className="mt-1.25 h-0.5 w-3 bg-light transition-all duration-300 ease-in-out group-hover:w-7 group-hover:bg-custom5 dark:bg-white dark:group-hover:bg-custom5" />
        </button>
        {theme === "dark" ? (
          <div
            className="transition-colors duration-300 ease-in-out cursor-pointer dark:text-white dark:hover:text-custom5"
            onClick={toggleTheme}
          >
            <LuSun className="text-[23px]" />
          </div>
        ) : (
          theme === "light" && (
            <div
              className="transition-colors duration-300 ease-in-out cursor-pointer text-light hover:text-custom5"
              onClick={toggleTheme}
            >
              <IoMoonOutline className="text-[25px]" />
            </div>
          )
        )}
      </div>
      <div className="relative z-30 flex flex-col items-center px-2 py-3 mt-5 space-y-2 font-medium custom-cursor">
        <Link
          href="#about"
          className="group flex items-center p-4.75 bg-white  dark:bg-secondary rounded-xl cursor-pointer"
          onClick={() => handleSetActive("About")}
        >
          <FaUser
            className={`${
              activeSection === "About"
                ? "text-[22px] text-custom5"
                : "text-[22px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out dark:group-hover:text-custom5`}
          />
          <span className="absolute -left-9 text-xs text-white uppercase bg-custom5 px-2.5 py-0.75 rounded-full opacity-0 group-hover:visible  group-hover:-left-11 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            About
          </span>
        </Link>
        <Link
          href="#resume"
          className="flex items-center p-5 bg-white cursor-pointer  group dark:bg-secondary rounded-xl"
          onClick={() => handleSetActive("Resume")}
        >
          <FaThList
            className={`${
              activeSection === "Resume"
                ? "text-[20px] text-custom5"
                : "text-[20px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out dark:group-hover:text-custom5`}
          />
          <span className="absolute -left-9 text-xs text-white uppercase bg-custom5 px-2.5 py-0.75 rounded-full opacity-0 group-hover:visible  group-hover:-left-13 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Resume
          </span>
        </Link>
        <Link
          href="#works"
          className="flex items-center p-5 bg-white cursor-pointer group dark:bg-secondary rounded-xl"
          onClick={() => handleSetActive("Works")}
        >
          <FaBriefcase
            className={`${
              activeSection === "Works"
                ? "text-[20px] text-custom5"
                : "text-[20px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out dark:group-hover:text-custom5`}
          />
          <span className="absolute -left-9 text-xs text-white uppercase bg-custom5 px-2.5 py-0.75 rounded-full opacity-0 group-hover:visible  group-hover:-left-11.5 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Works
          </span>
        </Link>
        <Link
          href="#blogs"
          className=" group flex items-center p-4.75 bg-white dark:bg-secondary rounded-xl cursor-pointer"
          onClick={() => handleSetActive("Blogs")}
        >
          <FaBloggerB
            className={`${
              activeSection === "Blogs"
                ? "text-[22px] text-custom5"
                : "text-[22px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out dark:group-hover:text-custom5`}
          />
          <span className="absolute -left-7 text-xs text-white uppercase bg-custom5 px-2.5 py-0.75 rounded-full opacity-0 group-hover:visible  group-hover:-left-9 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Blog
          </span>
        </Link>
        <Link
          href="#contact"
          className="flex items-center p-5 bg-white cursor-pointer group dark:bg-secondary rounded-xl"
          onClick={() => handleSetActive("Contact")}
        >
          <FaPaperPlane
            className={`${
              activeSection === "Contact"
                ? "text-[20px] text-custom5"
                : "text-[20px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out dark:group-hover:text-custom5`}
          />
          <span className="absolute -left-12 text-xs text-white uppercase bg-custom5 px-2.5 py-0.75 rounded-full opacity-0 group-hover:visible  group-hover:-left-15 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Contact
          </span>
        </Link>
      </div>
      <BlogDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
};

export default RightSideBar;
