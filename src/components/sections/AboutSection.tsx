import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const highlights = [
    {
      icon: Sparkles,
      title: "AI Innovation",
      description: "Cutting-edge generative AI and LLM implementations",
    },
    {
      icon: Target,
      title: "Proven Results", 
      description: "87.59% F1 score in toxicity detection, 95% manufacturing defect accuracy",
    },
    {
      icon: Lightbulb,
      title: "Full-Stack Vision",
      description: "End-to-end AI solutions from research to production deployment",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-gradient-cosmic"
          >
            Crafting the Future with AI
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <div className="card-cosmic">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Results-driven <span className="text-gradient-primary font-semibold">
                Generative AI and ML Developer</span> with expertise in deep learning, 
                LLMs, diffusion models, NLP, and computer vision.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                I specialize in creating scalable AI applications and full-stack 
                integrations that bridge the gap between cutting-edge research and 
                real-world implementation. My passion lies in transforming complex 
                AI concepts into intuitive, powerful solutions that make a measurable impact.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-cosmic" />
                  <span className="text-sm text-muted-foreground">
                    Deep Learning & Neural Networks
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-cosmic" />
                  <span className="text-sm text-muted-foreground">
                    Large Language Models & NLP
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-glow rounded-full animate-pulse-cosmic" />
                  <span className="text-sm text-muted-foreground">
                    Computer Vision & Object Detection
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-cosmic group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-cosmic group-hover:animate-pulse-cosmic">
                    <highlight.icon className="h-6 w-6 text-background" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gradient-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};