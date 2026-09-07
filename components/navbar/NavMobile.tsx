"use client";
import { useState } from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import { useTheme } from "@/context/theme-provider";
import { FaBriefcase, FaBloggerB } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaUser, FaThList, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import BlogDrawer from "../blogs/BlogDrawer";

const NavMobile = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { handleSetActive, scrollToSection, scrolledSection } =
    useMyComponentContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-secondary font-IBM lg:hidden">
      <div>
        <div className="flex justify-between items-center gap-2 px-7 py-3.5 mx-auto max-w-162.5 lg:px-5">
          <h1 className="text-base font-semibold text-light dark:text-white">
            Musa Abdulmuqaddas
          </h1>
          <div className="flex items-center gap-5">
            {theme === "dark" ? (
              <div
                className="transition-colors duration-300 ease-in-out cursor-pointer dark:text-white dark:hover:text-custom5"
                onClick={toggleTheme}
              >
                <LuSun className="text-[23px]" />
              </div>
            ) : (
              <div
                className="transition-colors duration-300 ease-in-out cursor-pointer text-light hover:text-custom5"
                onClick={toggleTheme}
              >
                <IoMoonOutline className="text-[25px]" />
              </div>
            )}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-3 cursor-pointer group"
            >
              <div className="w-5 h-0.5 bg-light dark:bg-white group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
              <div className="w-7 h-0.5 bg-light dark:bg-white mt-1.25 group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
              <div className="w-3 h-0.5 bg-light dark:bg-white mt-1.25 group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
            </button>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 dark:bg-custom2" />
        <div className="relative px-4 py-6 grid grid-cols-5 place-items-center overflow-x-auto gap-12 mx-auto max-w-150 lg:px-0">
          <Link
            href="#about"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              handleSetActive("About");
              scrollToSection("about-section");
            }}
          >
            <FaUser
              className={`${
                scrolledSection === "About"
                  ? "text-[22px] text-custom5"
                  : "text-[22px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#resume"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("resume-section");
              handleSetActive("Resume");
            }}
          >
            <FaThList
              className={`${
                scrolledSection === "Resume"
                  ? "text-[20px] text-custom5"
                  : "text-[20px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#works"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("works-section");
              handleSetActive("Works");
            }}
          >
            <FaBriefcase
              className={`${
                scrolledSection === "Works"
                  ? "text-[20px] text-custom5"
                  : "text-[20px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#blogs"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("blogs-section");
              handleSetActive("Blogs");
            }}
          >
            <FaBloggerB
              className={`${
                scrolledSection === "Blogs"
                  ? "text-[22px] text-custom5"
                  : "text-[22px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#contact"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact-section");
              handleSetActive("Contact");
            }}
          >
            <FaPaperPlane
              className={`${
                scrolledSection === "Contact"
                  ? "text-[20px] text-custom5"
                  : "text-[20px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
        </div>
      </div>

      <BlogDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default NavMobile;
