'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  CogIcon,
  ChartBarIcon,
  LinkIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';
import { projects } from '@/content';

// Icon mapping for different project types
const getProjectIcon = (projectName: string) => {
  const name = projectName.toLowerCase();
  if (name.includes('payment') || name.includes('router')) return ServerIcon;
  if (name.includes('api') || name.includes('optimization')) return RocketLaunchIcon;
  if (name.includes('event') || name.includes('cdc')) return CommandLineIcon;
  if (name.includes('sorting') || name.includes('visualizer')) return ChartBarIcon;
  if (name.includes('game') || name.includes('tic')) return PuzzlePieceIcon;
  if (name.includes('camp') || name.includes('yelp')) return CubeIcon;
  return CodeBracketIcon;
};

// Icon mapping for different technologies
const getTechIcon = (tech: string) => {
  const techName = tech.toLowerCase();
  
  // Programming Languages
  if (techName.includes('java')) return 'fab fa-java';
  if (techName.includes('javascript')) return 'fab fa-js-square';
  if (techName.includes('node') || techName.includes('nodejs')) return 'fab fa-node-js';
  if (techName.includes('python')) return 'fab fa-python';
  if (techName.includes('html')) return 'fab fa-html5';
  if (techName.includes('css')) return 'fab fa-css3-alt';
  if (techName.includes('typescript')) return 'fab fa-js-square';
  if (techName.includes('php')) return 'fab fa-php';
  if (techName.includes('swift')) return 'fab fa-swift';
  if (techName.includes('go') || techName === 'golang') return 'fab fa-golang';
  
  // Frameworks & Libraries
  if (techName.includes('spring')) return 'fas fa-leaf';
  if (techName.includes('react')) return 'fab fa-react';
  if (techName.includes('express')) return 'fas fa-server';
  if (techName.includes('ejs')) return 'fas fa-file-code';
  if (techName.includes('angular')) return 'fab fa-angular';
  if (techName.includes('vue')) return 'fab fa-vuejs';
  if (techName.includes('laravel')) return 'fab fa-laravel';
  if (techName.includes('rails')) return 'fas fa-gem';
  if (techName.includes('django')) return 'fas fa-server';
  if (techName.includes('flask')) return 'fas fa-flask';
  if (techName.includes('next')) return 'fas fa-arrow-right';
  if (techName.includes('nuxt')) return 'fas fa-mountain';
  if (techName.includes('svelte')) return 'fas fa-fire';
  
  // Databases
  if (techName.includes('mysql')) return 'fas fa-database';
  if (techName.includes('mongodb') || techName.includes('mongo')) return 'fas fa-leaf';
  if (techName.includes('postgresql') || techName.includes('postgres')) return 'fas fa-database';
  if (techName.includes('sqlite')) return 'fas fa-database';
  if (techName.includes('oracle')) return 'fas fa-database';
  if (techName.includes('database')) return 'fas fa-database';
  if (techName.includes('db2')) return 'fas fa-database';
  if (techName.includes('cassandra')) return 'fas fa-database';
  if (techName.includes('elasticsearch')) return 'fas fa-search';
  
  // Caching & Memory
  if (techName.includes('redis')) return 'fas fa-memory';
  if (techName.includes('memcached')) return 'fas fa-memory';
  if (techName.includes('cache')) return 'fas fa-bolt';
  if (techName.includes('memory')) return 'fas fa-memory';
  
  // Message Queues & Event Systems
  if (techName.includes('kafka')) return 'fas fa-stream';
  if (techName.includes('rabbitmq')) return 'fas fa-rabbit';
  if (techName.includes('sqs')) return 'fas fa-inbox';
  if (techName.includes('sns')) return 'fas fa-bullhorn';
  if (techName.includes('maxwell')) return 'fas fa-sync';
  if (techName.includes('queue')) return 'fas fa-list-ol';
  if (techName.includes('event')) return 'fas fa-bolt';
  if (techName.includes('pubsub')) return 'fas fa-broadcast-tower';
  if (techName.includes('activemq')) return 'fas fa-stream';
  
  // Cloud & Infrastructure
  if (techName.includes('aws')) return 'fab fa-aws';
  if (techName.includes('azure')) return 'fab fa-microsoft';
  if (techName.includes('gcp') || techName.includes('google cloud')) return 'fab fa-google';
  if (techName.includes('cloud')) return 'fas fa-cloud';
  if (techName.includes('docker')) return 'fab fa-docker';
  if (techName.includes('kubernetes') || techName === 'k8s') return 'fas fa-dharmachakra';
  if (techName.includes('container')) return 'fas fa-box';
  if (techName.includes('helm')) return 'fas fa-ship';
  if (techName.includes('terraform')) return 'fas fa-code-branch';
  if (techName.includes('ansible')) return 'fas fa-cogs';
  
  // Monitoring & Observability
  if (techName.includes('datadog')) return 'fas fa-chart-line';
  if (techName.includes('grafana')) return 'fas fa-chart-bar';
  if (techName.includes('prometheus')) return 'fas fa-fire';
  if (techName.includes('temporal')) return 'fas fa-clock';
  if (techName.includes('monitor')) return 'fas fa-chart-line';
  if (techName.includes('tsdb')) return 'fas fa-chart-bar';
  if (techName.includes('newrelic')) return 'fas fa-chart-pie';
  if (techName.includes('splunk')) return 'fas fa-search';
  if (techName.includes('elk') || techName.includes('elastic')) return 'fas fa-search';
  if (techName.includes('kibana')) return 'fas fa-chart-area';
  if (techName.includes('logstash')) return 'fas fa-filter';
  
  // DevOps & CI/CD
  if (techName.includes('jenkins')) return 'fas fa-tools';
  if (techName.includes('gitlab')) return 'fab fa-gitlab';
  if (techName.includes('github')) return 'fab fa-github';
  if (techName.includes('bitbucket')) return 'fab fa-bitbucket';
  if (techName.includes('pipeline')) return 'fas fa-code-branch';
  if (techName.includes('liquibase')) return 'fas fa-tint';
  if (techName.includes('flyway')) return 'fas fa-paper-plane';
  if (techName.includes('maven')) return 'fas fa-cube';
  if (techName.includes('gradle')) return 'fas fa-cubes';
  if (techName.includes('npm')) return 'fab fa-npm';
  if (techName.includes('yarn')) return 'fas fa-yarn';
  if (techName.includes('webpack')) return 'fas fa-box-open';
  if (techName.includes('vite')) return 'fas fa-lightning-bolt';
  
  // Security & Authentication
  if (techName.includes('jwt')) return 'fas fa-key';
  if (techName.includes('oauth')) return 'fas fa-user-lock';
  if (techName.includes('auth')) return 'fas fa-lock';
  if (techName.includes('security')) return 'fas fa-shield-alt';
  if (techName.includes('ssl') || techName.includes('tls')) return 'fas fa-certificate';
  if (techName.includes('keycloak')) return 'fas fa-key';
  if (techName.includes('ldap')) return 'fas fa-users-cog';
  if (techName.includes('passport')) return 'fas fa-passport';
  
  // Architecture & Patterns
  if (techName.includes('microservice')) return 'fas fa-cubes';
  if (techName.includes('spi')) return 'fas fa-plug';
  if (techName.includes('reactive')) return 'fas fa-water';
  if (techName.includes('jar')) return 'fas fa-archive';
  if (techName.includes('loading')) return 'fas fa-cog';
  if (techName.includes('grpc')) return 'fas fa-network-wired';
  if (techName.includes('graphql')) return 'fas fa-project-diagram';
  if (techName.includes('rest') || techName.includes('api')) return 'fas fa-link';
  if (techName.includes('soap')) return 'fas fa-exchange-alt';
  if (techName.includes('websocket')) return 'fas fa-plug';
  if (techName.includes('dynamic')) return 'fas fa-magic';
  if (techName.includes('custom')) return 'fas fa-wrench';
  if (techName.includes('class')) return 'fas fa-object-group';
  if (techName.includes('architecture')) return 'fas fa-project-diagram';
  
  // Web Technologies & Frontend
  if (techName.includes('canvas')) return 'fas fa-palette';
  if (techName.includes('webgl')) return 'fas fa-cube';
  if (techName.includes('webrtc')) return 'fas fa-video';
  if (techName.includes('pwa')) return 'fas fa-mobile-alt';
  if (techName.includes('service worker')) return 'fas fa-cogs';
  if (techName.includes('indexeddb')) return 'fas fa-database';
  if (techName.includes('localstorage')) return 'fas fa-hdd';
  if (techName.includes('sessionStorage')) return 'fas fa-memory';
  if (techName.includes('animation')) return 'fas fa-magic';
  if (techName.includes('ui') || techName.includes('ux')) return 'fas fa-paint-brush';
  
  // Mobile Development
  if (techName.includes('android')) return 'fab fa-android';
  if (techName.includes('ios')) return 'fab fa-apple';
  if (techName.includes('flutter')) return 'fas fa-mobile-alt';
  if (techName.includes('xamarin')) return 'fas fa-mobile-alt';
  if (techName.includes('cordova') || techName.includes('phonegap')) return 'fas fa-mobile-alt';
  if (techName.includes('ionic')) return 'fas fa-mobile-alt';
  
  // Game Development
  if (techName.includes('unity')) return 'fas fa-gamepad';
  if (techName.includes('unreal')) return 'fas fa-gamepad';
  if (techName.includes('game')) return 'fas fa-gamepad';
  if (techName.includes('logic')) return 'fas fa-brain';
  
  // Data & Analytics
  if (techName.includes('spark')) return 'fas fa-fire';
  if (techName.includes('hadoop')) return 'fas fa-database';
  if (techName.includes('hive')) return 'fas fa-database';
  if (techName.includes('pig')) return 'fas fa-pig';
  if (techName.includes('storm')) return 'fas fa-cloud-rain';
  if (techName.includes('flink')) return 'fas fa-stream';
  if (techName.includes('airflow')) return 'fas fa-wind';
  if (techName.includes('data structures')) return 'fas fa-project-diagram';
  if (techName.includes('algorithm')) return 'fas fa-calculator';
  if (techName.includes('indexing')) return 'fas fa-sort';
  if (techName.includes('machine learning') || techName.includes('ml')) return 'fas fa-brain';
  if (techName.includes('ai') || techName.includes('artificial intelligence')) return 'fas fa-robot';
  if (techName.includes('tensorflow')) return 'fas fa-brain';
  if (techName.includes('pytorch')) return 'fas fa-fire';
  if (techName.includes('pandas')) return 'fas fa-table';
  if (techName.includes('numpy')) return 'fas fa-calculator';
  if (techName.includes('jupyter')) return 'fas fa-book-open';
  if (techName.includes('visualization')) return 'fas fa-chart-line';
  if (techName.includes('sorting')) return 'fas fa-sort-amount-down';
  
  // Version Control
  if (techName.includes('git')) return 'fab fa-git-alt';
  if (techName.includes('svn')) return 'fas fa-code-branch';
  if (techName.includes('mercurial')) return 'fas fa-code-branch';
  
  // Testing
  if (techName.includes('jest')) return 'fas fa-vial';
  if (techName.includes('cypress')) return 'fas fa-bug';
  if (techName.includes('selenium')) return 'fas fa-robot';
  if (techName.includes('junit')) return 'fas fa-flask';
  if (techName.includes('testng')) return 'fas fa-vial';
  if (techName.includes('mockito')) return 'fas fa-mask';
  if (techName.includes('cucumber')) return 'fas fa-seedling';
  if (techName.includes('postman')) return 'fas fa-mail-bulk';
  
  // Event-Driven & CDC
  if (techName.includes('event-driven')) return 'fas fa-bolt';
  if (techName.includes('cdc')) return 'fas fa-sync-alt';
  
  // Generic fallback
  if (techName.includes('programming')) return 'fas fa-code';
  if (techName.includes('frontend')) return 'fas fa-desktop';
  if (techName.includes('backend')) return 'fas fa-server';
  if (techName.includes('fullstack')) return 'fas fa-layer-group';
  
  return 'fas fa-cog';
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ProjectsGrid = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
  });

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Payment', value: 'payment' },
    { label: 'Performance', value: 'performance' },
    { label: 'Event-Driven', value: 'event' },
    { label: 'Web Development', value: 'web' },
    { label: 'Education', value: 'education' }
  ];

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
              <CodeBracketIcon className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Scalable systems and innovative solutions showcasing expertise in backend engineering, performance optimization, and system architecture.
            </p>
          </div>

          {/* Enhanced filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === filterOption.value
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                    : 'bg-secondary/20 text-muted-foreground border-border hover:bg-secondary/40 hover:border-primary/30 hover:text-foreground'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
                const ProjectIcon = getProjectIcon(project.name);
                
                return (
                  <motion.div
                    key={project.slug}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
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
                              className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                            >
                              <i className={`${getTechIcon(tech)} text-sm`}></i>
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <div className="glass-card max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Want to see more projects?
                </h3>
                <p className="text-muted-foreground mb-6">
                  These are just highlights from my portfolio. I'm always working on new challenges and innovative solutions.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-liquid-hover transition-all duration-300 hover:scale-105"
                >
                  <LinkIcon className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 