"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { ThemeSwitch } from "./theme-switch";

export function Navbar() {
  return (
    <nav
      className="w-full border-b border-divider/30 bg-background/80 backdrop-blur-2xl sticky top-0 z-50 shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and App Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <HiAcademicCap className="w-6 h-6 text-primary" aria-hidden="true" />
            </motion.div>
            <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Helper MedResidency
            </h1>
          </Link>

          {/* Theme Toggle */}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
