"use client";
import { Element } from "react-scroll";
import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";
import Resume from "@/components/resume/Resume";
import Works from "@/components/works/Works";

const MobileLayout = () => {
  return (
    <div className="relative z-40 lg:hidden">
      <Element name="about-section" id="about-section">
        <About />
      </Element>
      <Element name="resume-section" id="resume-section">
        <Resume />
      </Element>
      <Element name="works-section" id="works-section">
        <Works />
      </Element>
      <Element name="blogs-section" id="blogs-section">
        <Blogs />
      </Element>
      <Element name="contact-section" id="contact-section">
        <Contact />
      </Element>
    </div>
  );
};

export default MobileLayout;
