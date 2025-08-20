import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Shield, Eye, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectBg from "@/assets/project-bg.jpg";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Comment Toxicity Detection",
      description: "Advanced toxicity detection system using CNN-RNN-LSTM architecture with 87.59% F1 score. Implemented with PyTorch and deployed with real-time inference capabilities.",
      tech: ["Python", "PyTorch", "CNN", "RNN", "LSTM", "NLP"],
      metrics: "87.59% F1 Score",
      icon: Shield,
      gradient: "from-primary to-primary-glow",
      features: ["Real-time detection", "Multi-language support", "API integration", "Model optimization"]
    },
    {
      id: 2, 
      title: "Manufacturing Defect Detection",
      description: "Industrial-grade defect detection system combining EfficientNet and YOLOv8 for 95% accuracy in manufacturing quality control. Deployed on edge devices.",
      tech: ["EfficientNet", "YOLOv8", "OpenCV", "Docker", "Edge AI"],
      metrics: "95% Accuracy",
      icon: Eye,
      gradient: "from-accent to-accent-glow",
      features: ["Edge deployment", "Real-time processing", "Quality metrics", "Industrial integration"]
    },
    {
      id: 3,
      title: "RAG Chatbot with LLAMA",
      description: "Intelligent chatbot using Retrieval-Augmented Generation with LLAMA model, Flask backend, and FAISS vector database for contextual responses.",
      tech: ["LLAMA", "RAG", "Flask", "FAISS", "Hugging Face", "Vector DB"],
      metrics: "Context-Aware",
      icon: MessageSquare,
      gradient: "from-secondary-glow to-cosmic-secondary",
      features: ["Vector search", "Context retrieval", "Multi-modal", "Scalable architecture"]
    }
  ];

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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Projects & Innovations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions that make a real-world impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="relative group perspective-1000"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="card-cosmic h-full preserve-3d transition-all duration-500 cursor-pointer"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                animate={{
                  boxShadow: hoveredProject === project.id 
                    ? "0 20px 60px hsl(var(--primary)/0.3)" 
                    : "0 8px 32px hsl(var(--background)/0.8)"
                }}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} animate-pulse-cosmic`}>
                    <project.icon className="h-6 w-6 text-background" />
                  </div>
                  
                  <motion.div
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-background`}
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1
                    }}
                  >
                    {project.metrics}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-bold text-gradient-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredProject === project.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: -10 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md 
                                 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-3 pt-4 border-t border-card-border"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0.7 }}
                >
                  <Button 
                    size="sm" 
                    className="btn-outline-cosmic flex-1 group"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="btn-cosmic flex-1 group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                    Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};