'use client';

import { motion } from 'framer-motion';
import { 
  FolderOpenIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CloudIcon,
  CommandLineIcon,
  ServerIcon,
  BoltIcon,
  ChartBarIcon,
  CogIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/atoms/Button';
import { projects } from '@/content';
import { useUIStore } from '@/store/uiStore';

// Icon mapping for different project types
const getProjectIcon = (projectName: string) => {
  const name = projectName.toLowerCase();
  if (name.includes('payment') || name.includes('cashfree')) return CurrencyDollarIcon;
  if (name.includes('microservice') || name.includes('architecture')) return CpuChipIcon;
  if (name.includes('security') || name.includes('auth')) return ShieldCheckIcon;
  if (name.includes('cloud') || name.includes('aws')) return CloudIcon;
  if (name.includes('api') || name.includes('rest')) return CommandLineIcon;
  if (name.includes('database') || name.includes('sql')) return CircleStackIcon;
  if (name.includes('performance') || name.includes('optimization')) return BoltIcon;
  if (name.includes('monitoring') || name.includes('analytics')) return ChartBarIcon;
  if (name.includes('config') || name.includes('management')) return CogIcon;
  if (name.includes('server') || name.includes('backend')) return ServerIcon;
  return CodeBracketIcon; // Default icon
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
    <section id="projects" className="section-spacing">
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
              <FolderOpenIcon className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A selection of projects showcasing my expertise in backend engineering, 
              system design, and performance optimization.
            </p>
          </div>

          {/* Filter buttons with glass styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Button
              variant={activeFilter === '' ? 'primary' : 'secondary'}
              size="sm"
              onClick={clearFilters}
              className="glass-button"
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
                className="glass-button"
              >
                {tag}
              </Button>
            ))}
          </motion.div>

          {/* Projects grid with enhanced glass cards */}
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
                  <div className="glass-card hover:shadow-liquid-hover transition-all duration-300 h-full group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 border border-accent/20">
                          <ProjectIcon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                            {project.name}
                          </h3>
                          {project.status && (
                            <div className="flex items-center gap-1 mt-1">
                              <div className={`w-2 h-2 rounded-full ${project.status === 'live' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                              <p className="text-xs text-muted-foreground capitalize">{project.status}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key outcomes with glass styling */}
                    {project.outcomes && project.outcomes.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <ChartBarIcon className="w-4 h-4 text-accent" />
                          Key Outcomes
                        </h4>
                        <div className="space-y-2">
                          {project.outcomes.slice(0, 3).map((outcome, idx) => (
                            <div key={idx} className="glass-subtle rounded-lg p-3 border border-accent/10">
                              <p className="text-sm text-foreground">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech stack with enhanced styling */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CogIcon className="w-4 h-4 text-primary" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              <RocketLaunchIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Interested in collaborating?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new challenging projects and innovative solutions.
              </p>
              <Button
                variant="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <span>Let's Talk</span>
                <RocketLaunchIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 