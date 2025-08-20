import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      color: "from-primary to-primary-glow",
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Hugging Face", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "OpenCV", level: 85 },
      ]
    },
    {
      title: "Deep Learning",
      color: "from-accent to-accent-glow",
      skills: [
        { name: "Neural Networks", level: 93 },
        { name: "CNNs", level: 90 },
        { name: "RNNs/LSTMs", level: 88 },
        { name: "Transformers", level: 85 },
        { name: "GANs", level: 80 },
        { name: "Diffusion Models", level: 82 },
      ]
    },
    {
      title: "MLOps & Cloud",
      color: "from-secondary-glow to-cosmic-secondary",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS", level: 82 },
        { name: "MLflow", level: 85 },
        { name: "FAISS", level: 90 },
        { name: "Flask", level: 88 },
      ]
    },
    {
      title: "Computer Vision",
      color: "from-cosmic-highlight to-primary",
      skills: [
        { name: "YOLOv8", level: 92 },
        { name: "EfficientNet", level: 88 },
        { name: "Object Detection", level: 90 },
        { name: "Image Segmentation", level: 85 },
        { name: "OCR", level: 83 },
        { name: "Face Recognition", level: 87 },
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-cosmic" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-cosmic" 
             style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building next-generation AI solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="card-cosmic group hover:shadow-glow transition-all duration-500"
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-primary text-sm font-bold"
                        animate={{ 
                          scale: hoveredSkill === skill.name ? 1.1 : 1,
                          color: hoveredSkill === skill.name ? "hsl(var(--accent))" : "hsl(var(--primary))"
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                      
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full opacity-50 blur-sm`}
                        animate={{
                          boxShadow: hoveredSkill === skill.name 
                            ? "0 0 20px hsl(var(--primary)/0.6)" 
                            : "0 0 10px hsl(var(--primary)/0.3)"
                        }}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};