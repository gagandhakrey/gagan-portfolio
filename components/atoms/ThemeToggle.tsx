'use client';

import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useThemeStore } from '@/store/themeStore';
import { useEffect, useState } from 'react';

/**
 * Single button theme toggle component with animated icon transitions.
 * Shows moon icon in dark mode, sun icon in light mode.
 * Features smooth rotation animation and icon fade transitions.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update document class when theme changes
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="glass-button p-3 w-12 h-12 flex items-center justify-center">
        <div className="w-5 h-5 bg-foreground/20 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="glass-button p-3 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: theme === 'dark' ? 0 : 180,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: theme === 'dark' ? 0.1 : 0,
          }}
        >
          <MoonIcon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: theme === 'light' ? 0.1 : 0,
          }}
        >
          <SunIcon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
        </motion.div>
      </div>
    </motion.button>
  );
} 