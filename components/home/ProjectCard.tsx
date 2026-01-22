"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getTechIcon } from "@/lib/techIcons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  logo: React.ReactNode;
  tags?: readonly string[];
  href?: string;
  github?: string;
  techStack?: readonly string[];
  className?: string;
}

export function ProjectCard({ title, description, image, logo, href = "/", github, techStack, className }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`group w-full overflow-hidden rounded-2xl bg-[#f2f2f3] sm:rounded-[3rem] ${className}`}
        >
            <Link href={href} className="flex flex-col">
                
                {/* Image - Top Section */}
                <div className="relative w-full px-4 pt-6 sm:px-8 sm:pt-10 md:px-12 md:pt-12">
                     {/* Browser Window Mockup Frame */}
                    <div className="overflow-hidden rounded-t-xl rounded-b-lg border border-gray-200 bg-white shadow-lg transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] sm:rounded-t-2xl">
                         {/* Fake Browser Header */}
                        <div className="flex items-center gap-2 border-b border-gray-100 bg-white px-3 py-2 sm:px-4 sm:py-3">
                            <div className="flex gap-1 sm:gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-gray-200 sm:h-2.5 sm:w-2.5" />
                                <div className="h-2 w-2 rounded-full bg-gray-200 sm:h-2.5 sm:w-2.5" />
                                <div className="h-2 w-2 rounded-full bg-gray-200 sm:h-2.5 sm:w-2.5" />
                            </div>
                            {/* Fake URL bar */}
                            <div className="ml-3 h-5 flex-1 rounded-t-md bg-gray-50 sm:ml-4 sm:h-6" />
                        </div>
                        
                        <div className="relative aspect-[16/10] w-full bg-gray-50">
                             <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover rounded-t-lg object-top"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Content - Bottom Section */}
                <div className="flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
                    {/* Left Side: Title, Description, Buttons */}
                    <div className="flex flex-col items-start gap-4 sm:gap-6">
                        <div className="space-y-2 sm:space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl md:text-4xl">{title}</h3>
                            <p className="text-base font-medium leading-relaxed text-gray-500 sm:text-lg md:text-xl">
                                {description}
                            </p>
                        </div>

                        {/* Action Buttons - View More & GitHub */}
                        <div className="mt-2 flex items-center gap-3 sm:mt-4">
                          {/* "View More" Button */}
                          <div className="flex items-center justify-center rounded-[1rem] bg-[#e6e6e7] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all group-hover:shadow-md sm:rounded-[1.2rem]">
                            <div className="bg-[#ffffff] rounded-[1rem] p-0.5 sm:rounded-[1.2rem]">
                              <div className="group/btn relative h-10 w-[120px] overflow-hidden rounded-[1rem] text-base font-medium text-black bg-gradient-to-b from-[#e6e6e7] to-[#fff] sm:h-12 sm:w-[140px] sm:rounded-[1.2rem] sm:text-xl">
                                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover/btn:-translate-y-full">
                                  View more
                                </span>
                                <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 ease-out group-hover/btn:translate-y-0">
                                  View more
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* GitHub Button */}
                          {github && (
                            <Link
                              href={github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center rounded-[1rem] bg-[#e6e6e7] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-md sm:rounded-[1.2rem]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="bg-[#ffffff] rounded-[1rem] p-0.5 sm:rounded-[1.2rem]">
                                <div className="group/btn relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[1rem] bg-gradient-to-b from-[#e6e6e7] to-[#fff] sm:h-12 sm:w-12 sm:rounded-[1.2rem]">
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 fill-current text-gray-900 transition-transform duration-300 group-hover/btn:scale-110 sm:h-6 sm:w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          )}
                        </div>
                    </div>
                    
                    {/* Right Side: Tech Stack Badges */}
                    {techStack && techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 sm:items-start sm:justify-end">
                        {techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="relative inline-flex items-center gap-1.5 rounded-[0.5rem] border-2 border-dashed border-gray-300 bg-gradient-to-b from-[#e6e6e7] to-[#fff] px-2.5 py-1 text-xs font-medium text-gray-800 shadow-sm sm:text-sm"
                          >
                            <span className="absolute inset-0 rounded-[0.5rem] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></span>
                            {getTechIcon(tech)}
                            <span className="relative">{tech}</span>
                          </span>
                        ))}
                      </div>
                    )}
                </div>

            </Link>
        </motion.div>
    );
}

