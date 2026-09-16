"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Mobile Developer",
        "React &amp; Next.js Developer",
        "AI-Powered Developer",
      ],
      typeSpeed: 80,
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
