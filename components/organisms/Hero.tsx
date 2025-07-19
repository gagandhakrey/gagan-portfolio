'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms/Button';

const ROTATING_TITLES = [
  'Software Engineer',
  'Microservices Architecture',
  'Performance Optimization',
  'Payment Processing Expert'
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_TITLES.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container-glass text-center max-w-5xl">
        <div className="space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Gagan Dhakrey
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </motion.div>
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="glass-subtle rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-semibold">
              {ROTATING_TITLES[index]}
            </h2>
          </motion.div>
                  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I design & optimize resilient, low‑latency backend and payment systems with clean architecture and measurable impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" asChild>
              <a href="/public-resume/Gagan_Dhakrey_Resume.pdf" download className="w-full sm:w-auto">
                Download Résumé
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#contact" className="w-full sm:w-auto">
                Contact / Hire Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 