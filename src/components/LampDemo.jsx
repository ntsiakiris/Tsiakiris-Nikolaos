import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/LampContainer";

export function LampDemo({ children }) {
  return (
    <LampContainer className="pt-1 ">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mb-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
}