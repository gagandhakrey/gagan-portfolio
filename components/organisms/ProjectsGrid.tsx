'use client';

import { motion } from 'framer-motion';
import { projects } from '@/content';
import { useUIStore } from '@/store/uiStore';
import { Button } from '@/components/atoms/Button';

export function ProjectsGrid() {
  const { activeFilter, setActiveFilter, clearFilters } = useUIStore();

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects based on active filter
  const filteredProjects = activeFilter 
    ? projects.filter(project => project.tags.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Projects
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in backend engineering, 
            system design, and performance optimization.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={activeFilter === '' ? 'primary' : 'secondary'}
              size="sm"
              onClick={clearFilters}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={activeFilter === tag ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-secondary/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/50 transition-colors h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'live' 
                          ? 'bg-success/20 text-success' 
                          : 'bg-warn/20 text-warn'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.summary}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Outcomes</h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground border border-border"
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
        </motion.div>
      </div>
    </section>
  );
} 