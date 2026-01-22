"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-[800px] ${
        isScrolled
          ? " backdrop-blur-xs"
          : "bg-transparent"
      }`}
      style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
    >
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileDrag={{ scale: 1.1 }}
          >
            <Image 
              src="/avatar.png" 
              alt="Avatar" 
              width={48} 
              height={48}
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
              draggable="false"
            />
          </motion.div>

          <ul className="flex items-center space-x-8 font-orbitron">
            <li>
              <button
                onClick={() => scrollToSection("work")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
