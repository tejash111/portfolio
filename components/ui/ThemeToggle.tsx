"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    // This is a simple class toggle strategy. 
    // In a real Next.js app with next-themes, use { theme, setTheme } hook.
    // However, since we set up dark mode via media query in CSS initially, 
    // we need to force a class on the html element to override.
    
    // NOTE: For best practices in Next.js, 'next-themes' is recommended, 
    // but for this swift implementation, we'll confirm functionality 
    // by toggling the 'dark' class on document.documentElement.
    
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl bg-blend-mode-screen dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-transform active:scale-95 hover:scale-110"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-zinc-100" />
      ) : (
        <Moon className="h-5 w-5 text-zinc-800" />
      )}
    </button>
  );
}
