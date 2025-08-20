import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Code, Trophy, Star, ExternalLink } from "lucide-react";

export const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      id: 1,
      name: "GitHub",
      username: "@rithick",
      description: "Open source contributions and personal projects",
      stats: { repositories: "25+", stars: "150+", followers: "50+" },
      icon: Github,
      link: "https://github.com/rithick",
      color: "from-foreground to-muted-foreground",
      bgColor: "bg-foreground/10",
      featured: true
    },
    {
      id: 2,
      name: "Kaggle",
      username: "@rithickmk",
      description: "Data science competitions and datasets",
      stats: { competitions: "15+", medals: "3", rank: "Expert" },
      icon: Trophy,
      link: "https://kaggle.com/rithickmk",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 3,
      name: "LeetCode",
      username: "@rithick_mk",
      description: "Algorithmic problem solving and challenges",
      stats: { solved: "200+", rating: "1800+", contests: "25+" },
      icon: Code,
      link: "https://leetcode.com/rithick_mk",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 4,
      name: "HackerRank",
      username: "@rithick_mk22",
      description: "Coding challenges and skill certifications",
      stats: { badges: "15+", stars: "5⭐", rank: "Gold" },
      icon: Star,
      link: "https://hackerrank.com/rithick_mk22",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500/10"
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

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-cosmic" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-cosmic" 
             style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Coding Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Coding Profiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my competitive programming journey and open source contributions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              variants={profileVariants}
              className={`relative group ${
                profile.featured ? 'md:col-span-2' : ''
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block card-cosmic h-full transition-all duration-500 cursor-pointer ${
                  profile.featured 
                    ? 'bg-gradient-to-br from-card via-card to-primary/5 border-primary/20' 
                    : ''
                }`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: profile.featured
                    ? "0 20px 60px hsl(var(--primary)/0.3)"
                    : `0 20px 60px ${profile.bgColor.replace('bg-', '').replace('/10', '')}/30`
                }}
              >
                {/* Profile Header */}
                <div className={`flex items-start justify-between mb-6 ${
                  profile.featured ? 'flex-col md:flex-row space-y-4 md:space-y-0' : ''
                }`}>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-r ${profile.color} shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      animate={profile.featured ? {
                        boxShadow: [
                          "0 0 20px hsl(var(--primary)/0.3)",
                          "0 0 40px hsl(var(--primary)/0.5)",
                          "0 0 20px hsl(var(--primary)/0.3)"
                        ]
                      } : {}}
                      transition={profile.featured ? { duration: 2, repeat: Infinity } : {}}
                    >
                      <profile.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        profile.featured 
                          ? 'text-gradient-cosmic' 
                          : 'text-gradient-primary'
                      }`}>
                        {profile.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {profile.username}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="p-3 rounded-full bg-muted/20 group-hover:bg-primary/20 transition-colors"
                  > 
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                {/* Profile Content */}
                <div className="space-y-6">
                  <p className={`leading-relaxed ${
                    profile.featured 
                      ? 'text-foreground/90 text-lg' 
                      : 'text-muted-foreground'
                  }`}>
                    {profile.description}
                  </p>

                  {/* Stats */}
                  <div className={`grid ${
                    profile.featured ? 'grid-cols-3 md:grid-cols-3' : 'grid-cols-3'
                  } gap-4`}>
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <motion.div
                        key={key}
                        className={`text-center p-4 rounded-lg ${profile.bgColor} hover:bg-opacity-20 transition-colors`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize mt-1">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />

                {/* Featured Badge */}
                {profile.featured && (
                  <div className="absolute -top-2 -right-2">
                    <motion.div
                      className="px-3 py-1 bg-gradient-to-r from-primary to-primary-glow rounded-full text-xs font-bold text-background"
                      animate={{
                        boxShadow: [
                          "0 0 20px hsl(var(--primary)/0.4)",
                          "0 0 30px hsl(var(--primary)/0.6)",
                          "0 0 20px hsl(var(--primary)/0.4)"
                        ]
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      FEATURED
                    </motion.div>
                  </div>
                )}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="card-cosmic max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gradient-primary mb-4">
              Competitive Programming Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gradient-cosmic">500+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-cosmic">8</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-cosmic">40+</div>
                <div className="text-sm text-muted-foreground">Contests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-cosmic">1900+</div>
                <div className="text-sm text-muted-foreground">Peak Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};