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
  
  // Web Technologies & Frontend
  if (techName.includes('canvas')) return 'fas fa-palette';
  if (techName.includes('webgl')) return 'fas fa-cube';
  if (techName.includes('webrtc')) return 'fas fa-video';
  if (techName.includes('pwa')) return 'fas fa-mobile-alt';
  if (techName.includes('service worker')) return 'fas fa-cogs';
  if (techName.includes('indexeddb')) return 'fas fa-database';
  if (techName.includes('localstorage')) return 'fas fa-hdd';
  if (techName.includes('sessionStorage')) return 'fas fa-memory';
  
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
  
  // Generic fallback
  if (techName.includes('programming')) return 'fas fa-code';
  if (techName.includes('frontend')) return 'fas fa-desktop';
  if (techName.includes('backend')) return 'fas fa-server';
  if (techName.includes('fullstack')) return 'fas fa-layer-group';
  if (techName.includes('dynamic')) return 'fas fa-magic';
  if (techName.includes('custom')) return 'fas fa-wrench';
  if (techName.includes('class')) return 'fas fa-object-group';
  
  return 'fas fa-cog';
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-offset section-spacing overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container-glass"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BriefcaseIcon className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Professional Journey
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Building scalable systems and optimizing performance across the payment technology landscape.
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
                              <i className={`${getTechIcon(tech)} text-sm`}></i>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
} 