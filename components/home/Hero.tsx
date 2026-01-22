"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Hero() {
  const [isColorActive, setIsColorActive] = useState(false);
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#fbfbfa] px-4 py-12 sm:px-8 sm:py-16">
      <div>
        {/* Main Content Container - Centered with flexbox */}
      <div className="mx-auto flex w-full max-w-[800px] flex-col items-center justify-center gap-8 sm:gap-12 md:flex-row md:gap-16">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          
          {/* GitHub Icon - Draggable with spring snap-back */}
          <motion.a
            href="https://github.com/tejash111"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileDrag={{ scale: 1.1 }}
          >
            <div className="flex items-center justify-center rounded-[1.5rem] bg-[#e6e6e7] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="rounded-[1.5rem] bg-[#ffffff] p-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-[#e6e6e7] to-[#fff] sm:h-12 sm:w-12">
                  <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Main Title */}
          <motion.h1
            className="text-3xl font-semibold text-black sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-baseline justify-center gap-2 md:justify-start">
              <span className="font-medium text-gray-400">Hey!</span>
              <span>I'm {RESUME_DATA.name.split(" ")[0]}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-start">
              <span className="rounded-xl border-2 border-dashed border-gray-200 px-2 py-0.5 font-mono text-2xl font-medium text-gray-400 sm:px-3 sm:py-1 sm:text-3xl md:text-4xl">[0→1]</span>
              <span>software</span>
            </div>
            <span>developer</span>
          </motion.h1>

          {/* Let's Talk Button - Neumorphic Style with Hover Text Animation */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center rounded-[1.2rem] bg-[#e6e6e7] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="rounded-[1.2rem] bg-[#ffffff] p-0.5">
                <a 
                  href="https://cal.com/tejash-wnmzia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-10 w-[120px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-[#e6e6e7] to-[#fff] text-base font-medium text-black sm:h-12 sm:w-[140px] sm:text-xl"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    Let's Talk
                  </span>
                  <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-0">
                    Let's Talk
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Photo Card - Fully Draggable with Touch Color Effect */}
        <motion.div 
          className="group/photo cursor-grab active:cursor-grabbing rounded-[1.5rem] bg-[#e6e6e7] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:rounded-[2rem] sm:p-2"
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.02, zIndex: 50 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onTouchStart={() => setIsColorActive(true)}
          onTouchEnd={() => setIsColorActive(false)}
        >
          <div className="rounded-[1.3rem] bg-[#ffffff] p-0.5 sm:rounded-[1.8rem] sm:p-1">
            <div className="h-[280px] w-[200px] overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-[#e6e6e7] to-[#fff] sm:h-[350px] sm:w-[250px] sm:rounded-[1.6rem] md:h-[400px] md:w-[280px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-100 sm:rounded-2xl">
                <Image
                  src="/avatar.png"
                  alt="Profile"
                  fill
                  className={`object-cover transition-all duration-500 pointer-events-none ${
                    isColorActive ? 'grayscale-0' : 'grayscale group-hover/photo:grayscale-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

         <motion.div 
        className="mx-auto mt-12 max-w-[800px] px-4  sm:mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
          I craft modern web experiences with{" "}
          <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-[0.4rem] sm:rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
            <svg viewBox="0 0 24 24" className="relative h-3 w-3 sm:h-4 sm:w-4" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
            <span className="relative">TypeScript</span>
          </span>
          ,{" "}
          <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-[0.4rem] sm:rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
            <svg viewBox="0 0 24 24" className="relative h-3 w-3 sm:h-4 sm:w-4" fill="#61DAFB"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
            <span className="relative">React</span>
          </span>
          ,{" "}
          <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-[0.4rem] sm:rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
            <svg viewBox="0 0 24 24" className="relative h-3 w-3 sm:h-4 sm:w-4" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
            <span className="relative">Next.js</span>
          </span>
          ,{" "}
          <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-[0.4rem] sm:rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
            <svg viewBox="0 0 24 24" className="relative h-3 w-3 sm:h-4 sm:w-4" fill="#339933"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
            <span className="relative">Node.js</span>
          </span>
          {" "}and{" "}
          <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-[0.4rem] sm:rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
            <svg viewBox="-4 0 264 264" version="1.1" xmlns="http://www.w3.org/2000/svg" className="relative h-3 w-3 sm:h-4 sm:w-4"><g><path d="M237.905589,160.722476 C208.165838,166.857016 206.121386,156.78788 206.121386,156.78788 C237.521885,110.194697 250.64824,51.0516028 239.320388,36.5766651 C208.417109,-2.90823095 154.921977,15.7655797 154.029229,16.2503834 L153.741894,16.3018199 C147.866309,15.0821247 141.290716,14.3555104 133.900416,14.2349007 C120.443566,14.0143741 110.236083,17.7627344 102.490457,23.636545 C102.490457,23.636545 7.06039723,-15.6768961 11.4987159,73.0806097 C12.4429007,91.9631224 38.5625866,215.954032 69.7171363,178.502947 C81.1041109,164.808425 92.1061986,153.229303 92.1061986,153.229303 C97.5708822,156.859418 104.112776,158.711132 110.970975,158.046005 L111.503667,157.593718 C111.338125,159.294079 111.413801,160.957192 111.717099,162.925968 C103.691233,171.893062 106.049626,173.467492 90.0055797,176.770069 C73.7711594,180.115806 83.308194,186.072388 89.5349654,187.629081 C97.0837136,189.516859 114.54788,192.190965 126.34812,175.672166 L125.877506,177.556988 C129.022226,180.075603 131.230448,193.940397 130.860342,206.508637 C130.490236,219.077469 130.243104,227.706383 132.720924,234.446337 C135.198744,241.186291 137.668286,256.351187 158.759612,251.831871 C176.383409,248.055132 185.516046,238.268009 186.786587,221.94254 C187.688203,210.336222 189.728517,212.051954 189.857404,201.675381 L191.493912,196.762901 C193.381099,181.029838 191.793663,175.95418 202.651492,178.314938 L205.290125,178.546697 C213.2817,178.9103 223.741044,177.261376 229.879723,174.408129 C243.098309,168.273589 250.93794,158.031224 237.904406,160.722476 L237.905589,160.722476" fill="#336791"></path></g></svg>
            <span className="relative">PostgreSQL</span>
          </span>
          . Passionate about building polished{" "}
          <span className="font-semibold text-gray-900">UI</span> experiences using{" "}
          <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-[0.4rem] sm:rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
            <Image 
              src="/motion.png" 
              alt="Framer Motion" 
              width={16} 
              height={16} 
              className="relative h-3 w-3 sm:h-4 sm:w-4 object-contain"
            />
            <span className="relative">Motion</span>
          </span>
          . Always exploring{" "}
          <span className="font-semibold text-gray-900">AI integrations</span>
          , with a strong foundation in clean architecture.
        </p>
      </motion.div>
      </div>
      
      {/* Tech Skills Text - Below Hero Content */}
     

    </section>
  );
}

