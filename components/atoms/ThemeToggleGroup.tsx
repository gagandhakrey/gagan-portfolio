'use client';

import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useThemeStore } from '@/store/themeStore';
import { useEffect, useState } from 'react';

/**
 * Dual button theme toggle component with separate sun and moon buttons.
 * Shows both options simultaneously with a sliding background indicator.
 * More intuitive for users as it clearly shows both available options.
 */
export function ThemeToggleGroup() {
  const { theme, setTheme } = useThemeStore();
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
      <div className="glass-subtle rounded-full p-1 flex items-center gap-1">
        <div className="w-10 h-8 bg-foreground/20 rounded-full animate-pulse" />
        <div className="w-10 h-8 bg-foreground/20 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div className="glass-subtle rounded-full p-1 flex items-center relative">
      {/* Background indicator */}
      <motion.div
        className="absolute inset-1 bg-primary/20 rounded-full"
        initial={false}
        animate={{
          x: theme === 'light' ? 0 : 40,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        style={{
          width: '2rem',
          height: '1.75rem',
        }}
      />
      
      {/* Light mode button */}
      <motion.button
        onClick={() => setTheme('light')}
        className={`relative z-10 p-2 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          theme === 'light' ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to light mode"
        title="Switch to light mode"
      >
        <SunIcon className="w-4 h-4" />
      </motion.button>
      
      {/* Dark mode button */}
      <motion.button
        onClick={() => setTheme('dark')}
        className={`relative z-10 p-2 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          theme === 'dark' ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to dark mode"
        title="Switch to dark mode"
      >
        <MoonIcon className="w-4 h-4" />
      </motion.button>
    </div>
  );
} 