"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 3;
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Colored dots */}
            <div className="flex gap-2 mb-6 justify-center">
              <span className="w-3 h-3 rounded-full bg-dot-blue" />
              <span className="w-3 h-3 rounded-full bg-dot-orange" />
              <span className="w-3 h-3 rounded-full bg-dot-green" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-navy text-center">
              Yassmine<span className="gradient-text"> N.</span>
            </h1>
          </motion.div>

          <div className="mt-10 w-48">
            <div className="h-1 bg-border-light rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(count, 100)}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
