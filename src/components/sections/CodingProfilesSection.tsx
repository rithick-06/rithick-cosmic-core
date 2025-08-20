import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code } from "lucide-react";

export const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      id: 1,
      name: "GitHub",
      username: "@rithick-06",
      icon: Github,
      link: "https://github.com/rithick-06",
      color: "from-foreground to-muted-foreground",
      bgColor: "bg-foreground/10",
      featured: true
    },
    {
      id: 2,
      name: "LeetCode",
      username: "@Rithick_M_K",
      icon: Code,
      link: "https://leetcode.com/u/Rithick_M_K/",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-500/10",
      featured: false
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
            Find me on coding platforms
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
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className={`p-5 rounded-xl bg-gradient-to-r ${profile.color} shadow-lg`}
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
                    <profile.icon className="h-10 w-10 text-white" />
                  </motion.div>
                </div>

                {/* Minimal Content */}
                <div className="space-y-2" />

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* No extra quick stats */}
      </div>
    </section>
  );
};