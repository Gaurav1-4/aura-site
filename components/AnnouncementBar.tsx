"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const MESSAGES = [
  { label: "JUST LAUNCHED", text: "AURA Ring 2 is here. Pre-orders shipping in 14 days." },
  { label: "LAUNCH OFFER", text: "Save 15% on first 1,000 orders with code AURA15." },
  { label: "WORLDWIDE", text: "Free shipping on every order, every country." },
  { label: "LIMITED", text: "First 500 buyers get a 30-day extended trial." }
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-12 bg-ink-900 text-dawn-50 flex items-center justify-center text-sm tracking-wide overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 px-4 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="font-bold">{MESSAGES[index].label}</span>
          <span className="opacity-80">{MESSAGES[index].text}</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
