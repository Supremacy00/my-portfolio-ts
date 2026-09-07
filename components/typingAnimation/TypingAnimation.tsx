"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Freelancer",
        "Web Developer",
        "Programmer",
        "Mobile Developer",
      ],
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 2000,
      showCursor: false,
      loop: true,
    };

    const typed = new Typed(".typing-animation", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing-animation text-custom5"></span>;
};

export default TypingAnimation;
