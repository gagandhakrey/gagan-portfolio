'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
// Alternative: import { ThemeToggleGroup } from '@/components/atoms/ThemeToggleGroup';

export function Header() {
  return (
    <motion.header
      className="fixed top-0 right-0 z-50 p-4 sm:p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {/* Alternative toggle style: <ThemeToggleGroup /> */}
      </div>
    </motion.header>
  );
} 