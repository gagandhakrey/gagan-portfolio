'use client';

import { motion } from 'framer-motion';
import { meta } from '@/content';

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container-glass"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="glass-subtle rounded-2xl p-6 md:p-8">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  {meta.summary}
                </p>
              </div>
              
              <div className="glass-card">
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">{meta.education.degree}</p>
                  <p className="text-base text-muted-foreground">{meta.education.institution}</p>
                  <p className="text-base text-muted-foreground">{meta.education.location}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>CGPA: {meta.education.cgpa}</span>
                    <span>{meta.education.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-subtle rounded-2xl p-6 md:p-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Currently working at Cashfree Payments as Software Development Engineer 2, 
                  specializing in building plugin-based payment solutions and optimizing 
                  high-performance backend systems for payment processing.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              <div className="glass-card">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Strengths</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-3 glass-subtle rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-lg font-medium text-foreground">Plugin-based Architecture</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 glass-subtle rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-lg font-medium text-foreground">API Performance Optimization</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 glass-subtle rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-lg font-medium text-foreground">Microservices Development</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 glass-subtle rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-lg font-medium text-foreground">Database Optimization</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 glass-subtle rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-lg font-medium text-foreground">Payment Processing Systems</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 glass-subtle rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-lg font-medium text-foreground">Event-Driven Architecture</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Key Achievements</h3>
                <ul className="space-y-3 text-base text-muted-foreground">
                  <li>• Reduced API latency by 60% (200ms → 80ms)</li>
                  <li>• Improved transaction success rates by 12%</li>
                  <li>• Built hot-pluggable payment gateway architecture</li>
                  <li>• Gem Award recipient at Cashfree Payments</li>
                  <li>• JEE Advanced AIR 5107 (2018)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 