'use client';

import { motion } from 'framer-motion';
import { 
  UserIcon,
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  BoltIcon,
  CodeBracketIcon,
  ServerIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { meta } from '@/content';

const getTechIcon = (tech: string) => {
  const techName = tech.toLowerCase();
  
  // Programming Languages
  if (techName.includes('java')) return 'fab fa-java';
  if (techName.includes('javascript')) return 'fab fa-js-square';
  if (techName.includes('node') || techName.includes('nodejs')) return 'fab fa-node-js';
  if (techName.includes('python')) return 'fab fa-python';
  if (techName.includes('html')) return 'fab fa-html5';
  if (techName.includes('css')) return 'fab fa-css3-alt';
  
  // Frameworks & Libraries
  if (techName.includes('spring')) return 'fas fa-leaf';
  if (techName.includes('react')) return 'fab fa-react';
  if (techName.includes('express')) return 'fas fa-server';
  if (techName.includes('ejs')) return 'fas fa-file-code';
  
  // Databases
  if (techName.includes('mysql')) return 'fas fa-database';
  if (techName.includes('mongodb')) return 'fas fa-leaf';
  if (techName.includes('database')) return 'fas fa-database';
  
  // Caching & Memory
  if (techName.includes('redis')) return 'fas fa-memory';
  if (techName.includes('cache')) return 'fas fa-bolt';
  
  // Message Queues & Event Systems
  if (techName.includes('kafka')) return 'fas fa-stream';
  if (techName.includes('sqs')) return 'fas fa-inbox';
  if (techName.includes('sns')) return 'fas fa-bullhorn';
  if (techName.includes('maxwell')) return 'fas fa-sync';
  if (techName.includes('queue')) return 'fas fa-list-ol';
  if (techName.includes('event')) return 'fas fa-bolt';
  
  // Cloud & Infrastructure
  if (techName.includes('aws')) return 'fab fa-aws';
  if (techName.includes('cloud')) return 'fas fa-cloud';
  if (techName.includes('docker')) return 'fab fa-docker';
  if (techName.includes('container')) return 'fas fa-box';
  
  // Monitoring & Observability
  if (techName.includes('datadog')) return 'fas fa-chart-line';
  if (techName.includes('grafana')) return 'fas fa-chart-bar';
  if (techName.includes('temporal')) return 'fas fa-clock';
  if (techName.includes('monitor')) return 'fas fa-chart-line';
  if (techName.includes('tsdb')) return 'fas fa-chart-bar';
  
  // DevOps & CI/CD
  if (techName.includes('jenkins')) return 'fas fa-tools';
  if (techName.includes('bitbucket')) return 'fab fa-bitbucket';
  if (techName.includes('pipeline')) return 'fas fa-code-branch';
  if (techName.includes('liquibase')) return 'fas fa-tint';
  
  // Security & Authentication
  if (techName.includes('jwt')) return 'fas fa-key';
  if (techName.includes('auth')) return 'fas fa-lock';
  if (techName.includes('security')) return 'fas fa-shield-alt';
  
  // Architecture & Patterns
  if (techName.includes('microservice')) return 'fas fa-cubes';
  if (techName.includes('spi')) return 'fas fa-plug';
  if (techName.includes('reactive')) return 'fas fa-water';
  if (techName.includes('jar')) return 'fas fa-archive';
  if (techName.includes('loading')) return 'fas fa-cog';
  
  // Web Technologies
  if (techName.includes('canvas')) return 'fas fa-palette';
  if (techName.includes('api')) return 'fas fa-link';
  
  // Game Development
  if (techName.includes('game')) return 'fas fa-gamepad';
  if (techName.includes('logic')) return 'fas fa-brain';
  
  // Data & Structures
  if (techName.includes('data structures')) return 'fas fa-project-diagram';
  if (techName.includes('algorithm')) return 'fas fa-calculator';
  if (techName.includes('indexing')) return 'fas fa-sort';
  
  // Generic fallback
  if (techName.includes('programming')) return 'fas fa-code';
  if (techName.includes('frontend')) return 'fas fa-desktop';
  if (techName.includes('backend')) return 'fas fa-server';
  
  return 'fas fa-cog';
};

export function AboutSection() {
  return (
    <section id="about" className="section-offset section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container-glass"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <UserIcon className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
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
                <div className="flex items-center gap-3 mb-4">
                  <SparklesIcon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">My Story</h3>
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  {meta.summary}
                </p>
              </div>
              
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <AcademicCapIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-foreground">{meta.education.degree}</p>
                  
                  <div className="flex items-center gap-2 text-base text-muted-foreground">
                    <BuildingOfficeIcon className="w-4 h-4" />
                    <span>{meta.education.institution}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-base text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{meta.education.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <ChartBarIcon className="w-4 h-4" />
                      <span>CGPA: {meta.education.cgpa}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{meta.education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-subtle rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BoltIcon className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">Currently</h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Currently working at <span className="text-accent font-semibold">Cashfree Payments</span> as 
                  <span className="text-primary font-semibold"> Software Development Engineer 2</span>, 
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
              className="space-y-6"
            >
              {/* Core Skills */}
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <CodeBracketIcon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">Core Expertise</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 group">
                    <ServerIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Backend</p>
                      <p className="text-xs text-muted-foreground">Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-all duration-300 group">
                    <CpuChipIcon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm font-medium text-foreground">System</p>
                      <p className="text-xs text-muted-foreground">Architecture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 transition-all duration-300 group">
                    <BoltIcon className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Performance</p>
                      <p className="text-xs text-muted-foreground">Optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 group">
                    <SparklesIcon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Payment</p>
                      <p className="text-xs text-muted-foreground">Systems</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Highlights */}
              <div className="glass-subtle rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CpuChipIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'MySQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'Microservices'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      <i className={`${getTechIcon(tech)} text-sm`}></i>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 