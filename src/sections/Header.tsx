"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 50); // Hide when scrolling down
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-center items-center fixed w-full z-10 transition-all duration-300 ${
        hidden ? "-top-20" : "top-3" // Adjust top value to fully hide the navbar
      }`}
    >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </div>
  );
};
