"use client";

import { ProjectCard } from "./ProjectCard";
import { Layers, Zap, Box, Layout } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function WorkGrid() {
  return (
    <section className="w-full bg-[#fbfbfa]">
      <div className="mx-auto max-w-[800px] px-4 py-16 sm:py-24 md:py-32">
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12">
          {RESUME_DATA.projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              logo={<Zap className="h-8 w-8 text-black fill-current" />}
              href={project.live}
              github={project.github}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
