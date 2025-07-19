'use client';

import { motion } from 'framer-motion';
import { 
  TrophyIcon,
  AcademicCapIcon,
  StarIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CpuChipIcon,
  CalendarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { achievements } from '@/content';

const getAchievementIcon = (iconName: string) => {
  switch (iconName) {
    case 'trophy': return TrophyIcon;
    case 'academic': return AcademicCapIcon;
    case 'star': return StarIcon;
    case 'briefcase': return BriefcaseIcon;
    case 'users': return UserGroupIcon;
    case 'cpu': return CpuChipIcon;
    default: return SparklesIcon;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Academic Excellence': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
    case 'Professional Achievement': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    case 'Leadership Excellence': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
    case 'Technical Achievement': return 'text-green-400 bg-green-400/10 border-green-400/30';
    default: return 'text-accent bg-accent/10 border-accent/30';
  }
};

export function AchievementsSection() {
  // Separate key achievements (first 3) from technical achievements
  const keyAchievements = achievements.slice(0, 3);
  const technicalAchievements = achievements.slice(3);

  return (
    <section id="achievements" className="section-offset section-spacing">
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
              <TrophyIcon className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Key Achievements
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Milestones that define my academic excellence, professional growth, and technical expertise.
            </p>
          </div>

          {/* Key Achievements Grid with enhanced glass cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {keyAchievements.map((achievement, index) => {
              const IconComponent = getAchievementIcon(achievement.icon || 'star');
              const colorClass = getCategoryColor(achievement.category || '');
              
              return (
                <motion.div
                  key={achievement.title}
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
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors leading-relaxed">
                      {achievement.subtitle}
                    </p>
                    
                    {achievement.metric && (
                      <div className="glass-subtle rounded-lg p-3 border border-accent/10 mb-4">
                        <p className="text-sm text-accent font-semibold">{achievement.metric}</p>
                      </div>
                    )}
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}>
                      {achievement.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Achievements Section */}
          {technicalAchievements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CpuChipIcon className="w-6 h-6 text-green-400" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Technical Achievements
                  </h3>
                </div>
                <div className="h-0.5 w-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technicalAchievements.map((achievement, index) => {
                  const IconComponent = getAchievementIcon(achievement.icon || 'star');
                  
                  return (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="glass-subtle rounded-lg p-4 border border-border hover:border-green-400/50 transition-all duration-300 hover:shadow-liquid group-hover:scale-[1.02]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors border border-green-400/20">
                            <IconComponent className="w-4 h-4 text-green-400" />
                          </div>
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-green-400 transition-colors">
                            {achievement.title}
                          </h4>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-2 group-hover:text-foreground transition-colors leading-relaxed">
                          {achievement.subtitle}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs">
                          {achievement.metric && (
                            <span className="text-green-400 font-medium">{achievement.metric}</span>
                          )}
                          <span className="text-muted-foreground">{achievement.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="glass-subtle rounded-2xl p-6 md:p-8">
              <TrophyIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to achieve more together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how my proven track record can contribute to your next big project.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                <span>Start a Conversation</span>
                <SparklesIcon className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 