'use client';

import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { experience } from '@/content';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <BriefcaseIcon className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Experience
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
            
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
                  {/* Timeline dot with status indicator */}
                  <div className="absolute left-4 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                      {/* Green status indicator for current position */}
                      {item.end === 'Present' && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-secondary/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-accent/50 transition-colors group">
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
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{item.start} - {item.end}</span>
                            </div>
                            {item.location && (
                              <div className="flex items-center gap-1">
                                <MapPinIcon className="w-4 h-4" />
                                <span>{item.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-4">
                        {item.impacts.map((impact, impactIndex) => (
                          <li key={impactIndex} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                            <ChevronRightIcon className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{impact}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted/50 hover:bg-muted rounded-full text-xs font-medium text-muted-foreground border border-border hover:border-accent/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 