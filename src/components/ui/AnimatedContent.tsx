import React from "react";
import { motion } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedContent = ({ children, delay = 0, className = "" }: AnimatedContentProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
