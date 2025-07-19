'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  TrophyIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { useActiveSections } from '@/hooks/useActiveSections';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About', icon: UserIcon },
  { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
  { id: 'projects', label: 'Projects', icon: CodeBracketIcon },
  { id: 'achievements', label: 'Achievements', icon: TrophyIcon },
  { id: 'contact', label: 'Contact', icon: EnvelopeIcon },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSections();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-16">
            {/* Logo */}
            <motion.div 
              className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GD
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                        layoutId="activeTab"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <motion.button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 45 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            >
              <div className="px-4 py-2 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {NAV_ITEMS.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-5 h-5 flex-shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                          layoutId="activeMobileTab"
                          initial={false}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 