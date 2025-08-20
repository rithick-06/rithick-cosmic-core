import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

import { CodingProfilesSection } from "@/components/sections/CodingProfilesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Portfolio = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-card-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-gradient-cosmic"
              whileHover={{ scale: 1.05 }}
            >
              RithickMK
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              className="btn-cosmic px-6 py-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Sections with smooth transitions */}
      <motion.section id="hero">
        <HeroSection />
      </motion.section>

      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutSection />
      </motion.section>

      <motion.section 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SkillsSection />
      </motion.section>

      <motion.section 
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProjectsSection />
      </motion.section>

      <motion.section 
        id="achievements"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AchievementsSection />
      </motion.section>


      <motion.section 
        id="coding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CodingProfilesSection />
      </motion.section>

      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContactSection />
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-12 px-4 border-t border-card-border bg-card/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <motion.div 
              className="text-3xl font-bold text-gradient-cosmic"
              whileHover={{ scale: 1.05 }}
            >
              Rithick M K
            </motion.div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Generative AI & Machine Learning Developer crafting the future with intelligent solutions
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <motion.a
                href="https://github.com/rithick-06"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank" rel="noopener noreferrer"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rithick-m-k/"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank" rel="noopener noreferrer"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://instagram.com/rithick"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank" rel="noopener noreferrer"
              >
                Instagram
              </motion.a>
            </div>
            <div className="pt-8 border-t border-card-border">
              <p className="text-sm text-muted-foreground">
                © 2024 Rithick M K. Crafted with passion and AI innovation.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Portfolio;