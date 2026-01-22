"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";

export function Experience() {
  return (
    <section className="w-full bg-[#fbfbfa]">
      <div className="mx-auto max-w-[800px] px-4 py-16 sm:px-6 sm:py-24">
      
      {/* Experience Table */}
      <div className="mb-12 overflow-hidden sm:mb-16">
        {RESUME_DATA.work.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="m-1.5 flex flex-col gap-1 rounded-xl bg-[#f2f2f3] px-4 py-4 sm:m-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:rounded-2xl sm:px-6 sm:py-5"
          >
            <div className="flex items-center gap-3 sm:w-1/3">
              {item.logo && (
                <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-sm sm:h-10 sm:w-10">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <span className="text-sm font-semibold text-gray-900 sm:text-base">
                {item.company}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-500 sm:w-1/3 sm:text-sm">
              {item.title}
            </span>
            <span className="text-xs font-medium text-gray-400 sm:w-1/3 sm:text-right sm:text-sm">
              {item.start} - {item.end}
            </span>
          </motion.div>
        ))}
      </div>

     

      </div>
    </section>
  );
}

