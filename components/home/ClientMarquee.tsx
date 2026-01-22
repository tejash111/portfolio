"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CLIENTS = [
    { name: "Acme Corp", logo: "/globe.svg" },
    { name: "Quantum", logo: "/globe.svg" }, // Placeholders
    { name: "Echo Valley", logo: "/globe.svg" },
    { name: "Nebula", logo: "/globe.svg" },
    { name: "Cyberdyne", logo: "/globe.svg" },
    { name: "Massive", logo: "/globe.svg" },
];

export function ClientMarquee() {
  return (
    <section className="w-full overflow-hidden py-8 bg-[#fbfbfa] sm:py-12">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground sm:mb-8 sm:text-sm">Trusted by world class teams</p>
        <div className="relative flex w-full">
             <motion.div
                className="flex min-w-full items-center gap-8 px-4 sm:gap-16 sm:px-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
             >
                {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div key={i} className="relative h-10 w-24 shrink-0 grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 sm:h-12 sm:w-32">
                         {/* Using text for demo if logo not available, but pretending image */}
                         <div className="flex h-full w-full items-center justify-center text-xl font-bold text-zinc-400">
                            {client.name}
                         </div>
                    </div>
                ))}
            </motion.div>
             <motion.div
                className="flex min-w-full items-center gap-8 px-4 absolute top-0 left-full sm:gap-16 sm:px-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
             >
                {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                     <div key={i} className="relative h-10 w-24 shrink-0 grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 sm:h-12 sm:w-32">
                         <div className="flex h-full w-full items-center justify-center text-xl font-bold text-zinc-400">
                            {client.name}
                         </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
