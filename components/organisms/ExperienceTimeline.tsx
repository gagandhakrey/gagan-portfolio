'use client';

import { motion } from 'framer-motion';
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>
          
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
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-deep transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-secondary/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-primary">
                          {item.role}
                        </h3>
                        <span className="text-sm text-neutral-500">
                          {item.start} - {item.end || 'Present'}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-medium mb-4">
                        {item.company}
                      </h4>
                      
                      <ul className="space-y-2 mb-4">
                        {item.impacts.map((impact, impactIndex) => (
                          <li key={impactIndex} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-border"
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