"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-32 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex-1">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Design is not just what it looks like.
            </h2>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground md:text-xl">
                I believe in creating digital experiences that are intuitive, beautiful, and functional. With a background in both engineering and design, I bridge the gap between vision and reality.
            </p>

            <div className="mt-12 flex gap-8">
                <div>
                     <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Experience</h3>
                     <p className="mt-2 text-xl font-medium">5+ Years</p>
                </div>
                 <div>
                     <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Projects</h3>
                     <p className="mt-2 text-xl font-medium">50+ Completed</p>
                </div>
            </div>
        </div>

        <motion.div 
            className="relative flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
             <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800">
                 {/* Placeholder for Profile Shot */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700" />
                 <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                    alt="Tejash"
                    fill
                    className="object-cover"
                />
            </div>
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                 <p className="text-sm font-medium text-muted-foreground">Currently based in</p>
                 <p className="text-lg font-bold text-foreground">San Francisco</p>
             </div>
        </motion.div>
    </section>
  );
}
