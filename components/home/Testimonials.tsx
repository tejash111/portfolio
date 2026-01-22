"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
    {
        quote: "Tejash transformed our chaotic MVP into a scalable, high-performance platform. His understanding of both design and backend architecture saved us months of development time.",
        author: "Aditya Mehta",
        role: "Founder, FinStack India"
    },
    {
        quote: "Working with Tejash was a breeze. He didn't just write code; he suggested UI improvements that significantly boosted our user retention. A developer with a designer's eye.",
        author: "Priya Sharma",
        role: "Product Manager, UrbanTech"
    },
    {
        quote: "We hired Tejash for a complex dashboard migration, and he delivered flawless results ahead of schedule. His clean code and clear communication made him a vital part of our team.",
        author: "Vikram Singh",
        role: "CTO, LogisticOne"
    }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden bg-[#fbfbfa] sm:min-h-[600px]">
      <div className="relative mx-auto flex min-h-[500px] max-w-[800px] flex-col items-center justify-center px-4 sm:min-h-[600px]">
        
        {/* Background Grid Pattern (Subtle) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center text-center px-4">
            
            {/* Neumorphic Quote Icon */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 sm:mb-12 sm:h-20 sm:w-20 sm:rounded-[1.5rem]"
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-white shadow-sm ring-1 ring-black/5 sm:h-14 sm:w-14 sm:rounded-[1.2rem]">
                    <Quote className="h-4 w-4 fill-orange-500 text-orange-500 sm:h-6 sm:w-6" />
                </div>
            </motion.div>

            {/* Testimonial Slider */}
            <div className="relative w-full">
                
                {/* Navigation Buttons */}
                <div className="absolute left-[-60px] top-1/2 hidden -translate-y-1/2 md:block">
                     <button 
                        onClick={prevTestimonial}
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-all hover:scale-110 hover:shadow-md"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-400 transition-colors group-hover:text-black" />
                     </button>
                </div>
                <div className="absolute right-[-60px] top-1/2 hidden -translate-y-1/2 md:block">
                     <button 
                        onClick={nextTestimonial}
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-all hover:scale-110 hover:shadow-md"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-400 transition-colors group-hover:text-black" />
                     </button>
                </div>

                {/* Content */}
                <div className="min-h-[250px] sm:min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <p className="text-lg font-medium leading-normal tracking-tight text-gray-900 sm:text-2xl md:text-[32px] md:leading-[1.4]">
                                {TESTIMONIALS[currentIndex].quote}
                            </p>
                            
                            <div className="mt-8 flex flex-col items-center gap-1 sm:mt-12">
                                <p className="text-base font-semibold text-gray-900 underline decoration-gray-300 decoration-1 underline-offset-4 sm:text-lg">
                                    {TESTIMONIALS[currentIndex].author}
                                </p>
                                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                                    {TESTIMONIALS[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                 {/* Mobile Navigation Dots */}
                 <div className="mt-6 flex justify-center gap-2 sm:mt-8 md:hidden">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-orange-500" : "w-2 bg-gray-200"}`}
                        />
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}

