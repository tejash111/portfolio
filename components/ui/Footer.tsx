"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Footer() {
  return (
    <footer className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-[#fbfbfa] px-4 py-16 text-[#1A1A1A]">
      
      {/* Scattered Floating Layout */}
      <div className="relative h-[300px] w-full max-w-[600px]">
        
        {/* Connecting Lines - Circuit/Orthogonal Structure */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 100" preserveAspectRatio="none">
          {/* Email to GitHub (Top Right) */}
          <motion.path
            d="M 100 42 L 100 30 Q 100 25 105 25 L 152 25 Q 157 25 157 20 L 157 17"
            stroke="#e5e5e5"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          {/* Email to Twitter (Left) */}
          <motion.path
            d="M 67 50 L 50 50 Q 40 50 40 46 L 40 46 L 40 46 Q 40 42 34 42"
            stroke="#e5e5e5"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Email to LinkedIn (Bottom) */}
          <motion.path
            d="M 100 58 L 100 72"
            stroke="#e5e5e5"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          {/* Email to Instagram (Right) */}
          <motion.path
            d="M 133 50 L 150 50 Q 160 50 160 55 L 160 57 Q 160 62 165 62 L 171 62"
            stroke="#e5e5e5"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </svg>
        
        {/* Email Pill - Center */}
        <motion.div
           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
         >
           <div className="flex items-center justify-center rounded-[1.2rem] bg-[#e6e6e7] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
             <div className="rounded-[1.2rem] bg-[#ffffff] p-0.5">
               <a
                 href={`mailto:${RESUME_DATA.contact.email}`}
                 className="group relative flex h-10 items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-4 text-sm font-medium text-black sm:h-12 sm:px-6 sm:text-base"
               >
                 <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-[150%]">
                   <Mail className="h-4 w-4 text-orange-500" />
                   <span>{RESUME_DATA.contact.email}</span>
                 </span>
                 <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                   <Mail className="h-4 w-4 text-orange-500" />
                   <span>{RESUME_DATA.contact.email}</span>
                 </span>
               </a>
             </div>
           </div>
        </motion.div>

        {/* GitHub Icon - Top Right */}
        <motion.a
          href="https://github.com/tejash111"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className="absolute right-[15%] top-[10%] flex h-10 w-10 items-center justify-center rounded-[1rem] bg-white text-gray-600 shadow-md ring-1 ring-black/5 hover:text-black hover:ring-black/10"
        >
          <Github className="h-5 w-5" />
        </motion.a>

        {/* X/Twitter Icon - Left */}
        <motion.a
          href="https://x.com/tejashrajput11"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className="absolute left-[10%] top-[35%] flex h-10 w-10 items-center justify-center rounded-[1rem] bg-white text-gray-600 shadow-md ring-1 ring-black/5 hover:text-black hover:ring-black/10"
        >
          <Twitter className="h-4 w-4" />
        </motion.a>

        {/* LinkedIn Icon - Bottom Center */}
        <motion.a
          href="https://www.linkedin.com/in/tejashrajput/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-[15%] left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-[1rem] bg-white text-gray-600 shadow-md ring-1 ring-black/5 hover:text-black hover:ring-black/10"
        >
          <Linkedin className="h-4 w-4" />
        </motion.a>

        {/* Instagram Icon - Right */}
        <motion.a
          href="https://www.instagram.com/tejashrajput_"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="absolute right-[8%] top-[55%] flex h-10 w-10 items-center justify-center rounded-[1rem] bg-white text-gray-600 shadow-md ring-1 ring-black/5 hover:text-black hover:ring-black/10"
        >
          <Instagram className="h-4 w-4" />
        </motion.a>
      </div>
    </footer>
  );
}


