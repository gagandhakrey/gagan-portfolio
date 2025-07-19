'use client';

import { motion } from 'framer-motion';
import { 
  TrophyIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  ChartBarIcon,
  CpuChipIcon,
  CalendarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { achievements } from '@/content';

const getAchievementIcon = (iconType: string) => {
  switch (iconType) {
    case 'trophy': return TrophyIcon;
    case 'award': return SparklesIcon;
    case 'star': return StarIcon;
    case 'bolt': return BoltIcon;
    case 'chart': return ChartBarIcon;
    case 'cpu': return CpuChipIcon;
    default: return TrophyIcon;
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
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <TrophyIcon className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Key Achievements
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Milestones that define my academic excellence, professional growth, and technical expertise.
          </p>

          {/* Key Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {keyAchievements.map((achievement, index) => {
              const IconComponent = getAchievementIcon(achievement.icon);
              const colorClass = getCategoryColor(achievement.category);
              
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-secondary/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
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
                    
                    <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                      {achievement.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}>
                        {achievement.category}
                      </span>
                      
                      <div className="flex items-center gap-2 text-sm font-medium text-accent">
                        <CheckBadgeIcon className="w-4 h-4" />
                        {achievement.metric}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <BoltIcon className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold text-foreground">
                Technical Excellence
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalAchievements.map((achievement, index) => {
                const IconComponent = getAchievementIcon(achievement.icon);
                
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-4 border border-border hover:border-green-400/50 transition-all duration-300 hover:bg-secondary/60">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                          <IconComponent className="w-4 h-4 text-green-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-green-400 transition-colors">
                          {achievement.title}
                        </h4>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
                        {achievement.subtitle}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-green-400 font-medium">{achievement.metric}</span>
                        <span className="text-muted-foreground">{achievement.year}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 