'use client';

import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CalendarIcon,
  CheckBadgeIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { experience } from '@/content';

// Icon mapping for different technologies
const getTechIcon = (tech: string) => {
  const name = tech.toLowerCase();
  if (name.includes('java') || name.includes('spring')) return CodeBracketIcon;
  if (name.includes('microservice') || name.includes('architecture')) return CpuChipIcon;
  if (name.includes('cloud') || name.includes('aws')) return CloudIcon;
  if (name.includes('server') || name.includes('backend')) return ServerIcon;
  return BoltIcon; // Default icon
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-spacing">
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
              <BriefcaseIcon className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              My professional journey in backend engineering, system architecture, and performance optimization.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Enhanced timeline line with gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 opacity-30"></div>
            
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.start}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Enhanced timeline dot with glass effect */}
                  <div className="absolute left-4 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-liquid"></div>
                      {/* Status indicator for current position */}
                      {item.end === 'Present' && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-background flex items-center justify-center animate-pulse">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="glass-card hover:shadow-liquid-hover transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                              {item.role}
                            </h3>
                            {item.end === 'Present' && (
                              <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                                <CheckBadgeIcon className="w-3 h-3" />
                                Current
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <BuildingOfficeIcon className="w-4 h-4 text-muted-foreground" />
                            <h4 className="text-lg font-medium text-foreground">
                              {item.company}
                            </h4>
                          </div>
                          
                          {item.location && (
                            <div className="flex items-center gap-2 mb-3">
                              <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">
                                {item.location}
                              </p>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2 mb-4">
                            <CalendarIcon className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-accent">
                              {item.start} - {item.end || 'Present'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Key impacts with glass styling */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <BoltIcon className="w-4 h-4 text-accent" />
                          Key Impacts
                        </h5>
                        <div className="space-y-2">
                          {item.impacts.slice(0, 3).map((impact, impactIndex) => (
                            <div key={impactIndex} className="glass-subtle rounded-lg p-3 border border-accent/10">
                              <p className="text-sm text-foreground leading-relaxed">
                                {impact}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tech stack */}
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CpuChipIcon className="w-4 h-4 text-primary" />
                          Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.stack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="glass-subtle rounded-2xl p-6 md:p-8">
                <BriefcaseIcon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ready for new challenges
                </h3>
                <p className="text-muted-foreground mb-6">
                  Looking to bring my expertise in backend engineering and system optimization to your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary group"
                  >
                    <span>Let's Connect</span>
                    <BriefcaseIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="btn-secondary group"
                  >
                    <span>View Resume</span>
                    <CalendarIcon className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 