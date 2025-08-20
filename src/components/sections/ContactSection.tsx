import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ParticlesBackground } from "../ParticlesBackground";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/rithick", label: "GitHub", color: "hover:text-foreground" },
    { icon: Linkedin, href: "https://linkedin.com/in/rithick", label: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: Twitter, href: "https://twitter.com/rithick", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Instagram, href: "https://instagram.com/rithick", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Youtube, href: "https://youtube.com/@rithick", label: "YouTube", color: "hover:text-[#FF0000]" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rithick.ad22@bitsathy.ac.in",
      link: "mailto:rithick.ad22@bitsathy.ac.in"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground variant="subtle" density={60} />
      
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-cosmic" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-cosmic" 
             style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your AI vision to life? Let's discuss how we can innovate together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="card-cosmic">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50 border-card-border focus:border-primary transition-colors"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background/50 border-card-border focus:border-primary transition-colors"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50 border-card-border focus:border-primary transition-colors resize-none"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="btn-cosmic w-full group">
                    <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Quick Contact */}
            <motion.div variants={itemVariants}>
              <Button 
                className="btn-outline-cosmic w-full group text-lg py-6"
                onClick={() => window.location.href = 'mailto:rithick.ad22@bitsathy.ac.in'}
              >
                <Mail className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Email Me Directly
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="card-cosmic">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-gradient-cosmic">
                      <info.icon className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="card-cosmic">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                Follow Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 
                              transition-all duration-300 group ${color}`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-5 w-5 transition-colors" />
                    <span className="font-medium text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Fun Stats */}
            <motion.div variants={itemVariants} className="card-cosmic">
              <h3 className="text-xl font-bold text-gradient-primary mb-4">
                Quick Stats
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-2xl font-bold text-gradient-cosmic">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10">
                  <div className="text-2xl font-bold text-gradient-cosmic">4</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10">
                  <div className="text-2xl font-bold text-gradient-cosmic">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-2xl font-bold text-gradient-cosmic">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};