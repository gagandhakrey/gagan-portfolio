'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  BoltIcon,
  UserIcon,
  ChevronDownIcon,
  SparklesIcon,
  ArrowDownIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/atoms/Button';

const ROTATING_TITLES = [
  { title: 'Software Engineer', icon: CodeBracketIcon },
  { title: 'Microservices Architecture', icon: CpuChipIcon },
  { title: 'Performance Optimization', icon: BoltIcon },
  { title: 'Payment Processing Expert', icon: RocketLaunchIcon }
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_TITLES.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = ROTATING_TITLES[index].icon;

  return (
          <section id="hero" className="section-offset relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container-glass text-center max-w-5xl mt-24">
        <div className="space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className="p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full border border-accent/30"
              >
                <UserIcon className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for hire</span>
              </motion.div>
            </div>
            
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
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                key={index}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-accent/20 rounded-lg"
              >
                <CurrentIcon className="w-6 h-6 text-accent" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-semibold">
                {ROTATING_TITLES[index].title}
              </h2>
            </div>
            
            {/* Quick stats or highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
            >
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <BoltIcon className="w-4 h-4 text-orange-400" />
                <span>60% Latency Reduction</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <RocketLaunchIcon className="w-4 h-4 text-green-400" />
                <span>12% Success Rate Boost</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CpuChipIcon className="w-4 h-4 text-blue-400" />
                <span>Plugin-based Architecture</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <span>Get In Touch</span>
              <SparklesIcon className="w-4 h-4 ml-2 group-hover:animate-pulse" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <span>View Projects</span>
              <CodeBracketIcon className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=11n7Id_jHKG1taPbnBldxkUbiTHzPYQ5q', '_blank')}
              className="group"
            >
              <span>Download Resume</span>
              <ArrowDownTrayIcon className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDownIcon className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
} 