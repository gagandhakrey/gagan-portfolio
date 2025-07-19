'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  UserIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { 
  EnvelopeIcon as EnvelopeIconSolid,
  PhoneIcon as PhoneIconSolid 
} from '@heroicons/react/24/solid';
import { meta } from '@/content';

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing">
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
                Get In Touch
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology, 
              feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Primary Contact */}
              <div className="glass-card hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <EnvelopeIconSolid className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-primary">
                    Primary Contact
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href={`mailto:${meta.email}`}
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group/item"
                  >
                    <div className="p-2 bg-accent/20 rounded-lg group-hover/item:bg-accent/30 transition-colors">
                      <EnvelopeIcon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium group-hover/item:text-accent transition-colors">
                        {meta.email}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${meta.phone}`}
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group/item"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover/item:bg-primary/30 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium group-hover/item:text-primary transition-colors">
                        {meta.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <GlobeAltIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">
                    Connect Online
                  </h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href={meta.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 group/item border border-blue-500/20 hover:border-blue-500/40"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover/item:bg-blue-500/30 transition-colors">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground font-medium group-hover/item:text-blue-400 transition-colors">
                        Professional Profile
                      </p>
                    </div>
                  </a>

                  {/* <a 
                    href={meta.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-500/10 hover:bg-gray-500/20 transition-all duration-300 group/item border border-gray-500/20 hover:border-gray-500/40"
                  >
                    <div className="p-2 bg-gray-500/20 rounded-lg group-hover/item:bg-gray-500/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="text-foreground font-medium group-hover/item:text-gray-400 transition-colors">
                        Projects & Code
                      </p>
                    </div>
                  </a> */}
                </div>
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <BriefcaseIcon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-primary">
                    Currently Available For
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance work and full-time opportunities. 
                  I'm particularly interested in roles involving:
                </p>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                    <CodeBracketIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Backend Engineering</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                    <CpuChipIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">System Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground">Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-foreground">Technical Leadership</span>
                  </div>
                </div>
              </div>

              {/* Skills Highlight */}
              <div className="glass-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <CommandLineIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">
                    Core Technologies
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 transition-colors">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-foreground">Java & Spring Boot</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-foreground">Microservices</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-foreground">MySQL & Redis</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-foreground">Apache Kafka</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-foreground">Docker & AWS</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 transition-colors">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-sm text-foreground">Payment Systems</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-subtle rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartBarIcon className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">Usually respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Available for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 