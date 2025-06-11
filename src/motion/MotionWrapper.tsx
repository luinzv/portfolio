import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props{
  children: ReactNode;
  delay: number;
}
export function FadeIn({ children, delay = 0 }:Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}