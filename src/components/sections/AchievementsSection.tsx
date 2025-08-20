import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Zap, Star } from "lucide-react";

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      id: 1,
      title: "India Skills 2024",
      subtitle: "Bronze Medal",
      description: "National level competition recognizing excellence in AI/ML skills and innovation",
      icon: Medal,
      gradient: "from-amber-500 to-orange-500",
      year: "2024",
      category: "National Competition"
    },
    {
      id: 2,
      title: "IITDM National Conference",
      subtitle: "Finalist - Osteoporosis Detection",
      description: "Advanced medical AI solution for early osteoporosis detection using computer vision",
      icon: Award,
      gradient: "from-primary to-primary-glow",
      year: "2024",
      category: "Research & Innovation"
    },
    {
      id: 3,
      title: "ASET International Conference",
      subtitle: "Finalist - Green IT Solutions",
      description: "Sustainable AI computing solutions for environmental impact reduction",
      icon: Star,
      gradient: "from-green-500 to-emerald-500",
      year: "2024",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Caterpillar Tech Challenge 2025",
      subtitle: "Finalist",
      description: "Industrial AI solutions for next-generation heavy machinery optimization",
      icon: Zap,
      gradient: "from-accent to-accent-glow",
      year: "2025",
      category: "Industry Innovation",
      highlight: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const constellationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Cosmic Background with Constellations */}
      <div className="absolute inset-0">
        {/* Animated constellation points */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
            variants={constellationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        ))}
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-cosmic" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-cosmic" 
             style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Recognition & Awards
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Achievements & Honors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones in AI innovation and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={achievementVariants}
              className={`relative group ${
                achievement.highlight 
                  ? 'md:col-span-2 lg:col-span-2' 
                  : ''
              }`}
            >
              <motion.div
                className={`card-cosmic h-full transition-all duration-500 cursor-pointer ${
                  achievement.highlight
                    ? 'bg-gradient-to-br from-card via-card to-accent/10 border-accent/30'
                    : ''
                }`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: achievement.highlight
                    ? "0 20px 60px hsl(var(--accent)/0.4)"
                    : "0 20px 60px hsl(var(--primary)/0.3)"
                }}
              >
                {/* Achievement Header */}
                <div className={`flex items-start justify-between mb-6 ${
                  achievement.highlight ? 'flex-col md:flex-row space-y-4 md:space-y-0' : ''
                }`}>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-r ${achievement.gradient} shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      animate={achievement.highlight ? {
                        boxShadow: [
                          "0 0 20px hsl(var(--accent)/0.3)",
                          "0 0 40px hsl(var(--accent)/0.6)",
                          "0 0 20px hsl(var(--accent)/0.3)"
                        ]
                      } : {}}
                      transition={achievement.highlight ? { duration: 2, repeat: Infinity } : {}}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                        <span className="text-xs text-primary font-bold">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold ${
                        achievement.highlight 
                          ? 'text-gradient-cosmic text-2xl' 
                          : 'text-gradient-primary'
                      }`}>
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  {achievement.highlight && (
                    <motion.div
                      className="px-4 py-2 bg-gradient-to-r from-accent to-accent-glow rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 20px hsl(var(--accent)/0.4)",
                          "0 0 30px hsl(var(--accent)/0.6)",
                          "0 0 20px hsl(var(--accent)/0.4)"
                        ]
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <span className="text-background font-bold text-sm flex items-center">
                        <Zap className="h-4 w-4 mr-1" />
                        LATEST
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Achievement Content */}
                <div className="space-y-4">
                  <h4 className={`font-semibold ${
                    achievement.highlight ? 'text-xl text-accent' : 'text-lg text-foreground'
                  }`}>
                    {achievement.subtitle}
                  </h4>
                  
                  <p className={`leading-relaxed ${
                    achievement.highlight 
                      ? 'text-foreground/90 text-lg' 
                      : 'text-muted-foreground'
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative elements for highlighted achievement */}
                {achievement.highlight && (
                  <div className="absolute -top-2 -right-2">
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-accent to-accent-glow rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};