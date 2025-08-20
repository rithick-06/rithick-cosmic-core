import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      id: 1,
      title: "The Future of Generative AI in Healthcare",
      excerpt: "Exploring how generative AI models are revolutionizing medical diagnosis and treatment planning, with real-world applications and case studies.",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      tags: ["AI", "Healthcare", "Machine Learning"],
      link: "#",
      gradient: "from-primary to-primary-glow"
    },
    {
      id: 2,
      title: "Building Scalable ML Pipelines with Docker",
      excerpt: "A comprehensive guide to containerizing machine learning workflows for production environments and cloud deployment.",
      readTime: "12 min read", 
      date: "Nov 28, 2024",
      tags: ["MLOps", "Docker", "Cloud"],
      link: "#",
      gradient: "from-accent to-accent-glow"
    },
    {
      id: 3,
      title: "Computer Vision for Manufacturing Quality Control",
      excerpt: "Implementing YOLOv8 and EfficientNet for real-time defect detection in industrial manufacturing processes.",
      readTime: "10 min read",
      date: "Nov 10, 2024", 
      tags: ["Computer Vision", "Manufacturing", "Quality Control"],
      link: "#",
      gradient: "from-secondary-glow to-cosmic-secondary"
    },
    {
      id: 4,
      title: "RAG Systems: Beyond Basic Implementation",
      excerpt: "Advanced techniques for building context-aware chatbots using retrieval-augmented generation and vector databases.",
      readTime: "15 min read",
      date: "Oct 22, 2024",
      tags: ["NLP", "RAG", "Chatbots"],
      link: "#",
      gradient: "from-cosmic-highlight to-primary"
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

  const articleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-cosmic" />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-cosmic" 
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
            Knowledge Sharing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Articles & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights on AI, machine learning, and emerging technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={articleVariants}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-cosmic h-full hover:shadow-glow transition-all duration-500">
                {/* Article Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${article.gradient} text-background`}>
                    Featured
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="p-2 rounded-full bg-muted/20 group-hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                {/* Article Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-gradient-primary group-hover:text-gradient-cosmic transition-all duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Article Meta */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-md 
                                 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="pt-4 border-t border-card-border">
                    <Button 
                      variant="ghost" 
                      className="group/btn text-primary hover:text-primary-glow p-0 h-auto font-medium"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="btn-outline-cosmic group">
            <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};