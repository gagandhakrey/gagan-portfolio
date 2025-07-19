'use client';

import { motion } from 'framer-motion';
import { 
  FolderOpenIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
  ClockIcon,
  StarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { projects } from '@/content';
import { useUIStore } from '@/store/uiStore';
import { Button } from '@/components/atoms/Button';

const getProjectIcon = (projectName: string) => {
  const name = projectName.toLowerCase();
  if (name.includes('payment') || name.includes('router')) return CpuChipIcon;
  if (name.includes('reconciliation') || name.includes('settlement')) return ShieldCheckIcon;
  if (name.includes('plugin') || name.includes('gateway')) return CodeBracketIcon;
  if (name.includes('microservice') || name.includes('service')) return ServerIcon;
  if (name.includes('cloud') || name.includes('aws')) return CloudIcon;
  return RocketLaunchIcon;
};

const getTechIcon = (tech: string) => {
  const techName = tech.toLowerCase();
  if (techName.includes('java') || techName.includes('spring')) return '☕';
  if (techName.includes('mysql') || techName.includes('database')) return '🗄️';
  if (techName.includes('redis') || techName.includes('cache')) return '⚡';
  if (techName.includes('kafka') || techName.includes('queue')) return '📮';
  if (techName.includes('docker') || techName.includes('container')) return '📦';
  if (techName.includes('aws') || techName.includes('cloud')) return '☁️';
  if (techName.includes('react') || techName.includes('frontend')) return '⚛️';
  if (techName.includes('node') || techName.includes('javascript')) return '🟩';
  if (techName.includes('python')) return '🐍';
  if (techName.includes('temporal')) return '⏰';
  if (techName.includes('grafana') || techName.includes('monitor')) return '📊';
  return '🔧';
};

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
          <div className="flex items-center justify-center gap-3 mb-8">
            <FolderOpenIcon className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Projects
            </h2>
          </div>
          
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
              <StarIcon className="w-4 h-4 mr-2" />
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
            {filteredProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.name);
              
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-secondary/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                          <ProjectIcon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                      </div>
                      {project.status && (
                        <div className="flex items-center gap-1">
                          {project.status === 'live' ? (
                            <>
                              <CheckBadgeIcon className="w-4 h-4 text-success" />
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/20 text-success border border-success/30">
                                {project.status}
                              </span>
                            </>
                          ) : (
                            <>
                              <ClockIcon className="w-4 h-4 text-warn" />
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-warn/20 text-warn border border-warn/30">
                                {project.status}
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                      {project.summary}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BoltIcon className="w-4 h-4 text-accent" />
                          <h4 className="text-sm font-medium text-muted-foreground">Key Outcomes</h4>
                        </div>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors">
                              <ChevronRightIcon className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CodeBracketIcon className="w-4 h-4 text-primary" />
                          <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="flex items-center gap-1 px-2 py-1 bg-muted/50 hover:bg-muted rounded text-xs font-medium text-muted-foreground border border-border hover:border-accent/50 transition-all duration-300 group-hover:scale-105"
                            >
                              <span className="text-sm">{getTechIcon(tech)}</span>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <FolderOpenIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-2">No projects found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 