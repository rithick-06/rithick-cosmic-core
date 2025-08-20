import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "../ParticlesBackground";
import { FloatingIcons } from "../FloatingIcons";
import heroImage from "@/assets/hero-cosmic-ai.jpg";

export const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/rithick", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rithick", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/rithick", label: "Instagram" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      </div>
      
      {/* Particles */}
      <ParticlesBackground variant="intense" density={120} />
      
      {/* 3D Floating Icons */}
      <FloatingIcons />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient-cosmic"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Rithick M K
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-foreground/90">
              Generative AI & Machine Learning
            </h2>
            <h2 className="text-2xl md:text-4xl font-light text-gradient-primary">
              Developer
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Crafting the future with AI-powered solutions, deep learning innovations, 
            and cutting-edge machine learning architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button className="btn-cosmic group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Download Resume
            </Button>
            <Button className="btn-outline-cosmic group">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-card-border 
                          hover:bg-primary/20 hover:border-primary transition-all duration-300 
                          hover:shadow-glow group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(var(--primary)/0.3)",
                "0 0 40px hsl(var(--primary)/0.6)",
                "0 0 20px hsl(var(--primary)/0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};