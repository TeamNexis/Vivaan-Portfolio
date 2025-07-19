import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2021",
    title: "Community Management Inception",
    description: "Started my journey in digital community management, laying the foundation for future bot development expertise.",
    color: "primary",
  },
  {
    year: "2022",
    title: "Launched First Bot @vivanmusicbot",
    description: "Created my first major Telegram music bot, marking the beginning of my specialized bot development career.",
    color: "secondary",
  },
  {
    year: "2023",
    title: "Developed Scalable Bot Frameworks",
    description: "Built reusable frameworks and architectures that powered multiple successful bot deployments.",
    color: "accent",
  },
  {
    year: "2024",
    title: "Introduced Automation Systems",
    description: "Revolutionized community management with advanced automation tools and intelligent bot systems.",
    color: "success",
  },
  {
    year: "2025",
    title: "Expanded Bot Network Globally",
    description: "Scaling operations worldwide with advanced bot networks serving millions of users across diverse communities.",
    color: "primary",
    current: true,
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm a Telegram bot development expert, specializing in creating automation layers that help communities grow and thrive. I lead dev teams to build scalable, efficient, and user-friendly bots. My philosophy? Speed, stability, and style.
          </p>
        </motion.div>
        
        {/* Professional Journey Timeline */}
        <div className="relative py-12">
          <motion.h3
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Professional Journey
          </motion.h3>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-60"></div>
            
            <div className="space-y-20">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                >
                  {/* Left side content (even index items) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16 text-right">
                        <motion.div
                          className="timeline-card glass-effect p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/30 bg-white/5 dark:bg-slate-800/50 backdrop-blur-lg"
                          whileHover={{ scale: 1.02, y: -8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-end gap-4">
                              <h4 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {item.year}
                              </h4>
                              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                            </div>
                            <h5 className="text-xl font-bold text-foreground">{item.title}</h5>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                            {item.current && (
                              <motion.div
                                className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-lg">🚀</span>
                                Current Goal
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Center dot */}
                      <motion.div
                        className="relative z-10 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.current && (
                          <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping"></div>
                        )}
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </motion.div>
                      
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      
                      {/* Center dot */}
                      <motion.div
                        className="relative z-10 w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.current && (
                          <div className="absolute inset-0 rounded-full border-2 border-secondary/50 animate-ping"></div>
                        )}
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </motion.div>
                      
                      {/* Right side content (odd index items) */}
                      <div className="w-1/2 pl-16">
                        <motion.div
                          className="timeline-card glass-effect p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/30 bg-white/5 dark:bg-slate-800/50 backdrop-blur-lg"
                          whileHover={{ scale: 1.02, y: -8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-accent animate-pulse"></div>
                              <h4 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                                {item.year}
                              </h4>
                            </div>
                            <h5 className="text-xl font-bold text-foreground">{item.title}</h5>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                            {item.current && (
                              <motion.div
                                className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-lg">🚀</span>
                                Current Goal
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden relative max-w-xl mx-auto px-4">
            {/* Vertical line for mobile */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-60"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {/* Mobile dot */}
                  <motion.div
                    className="relative z-10 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-3 border-background shadow-lg flex items-center justify-center mt-2"
                    whileHover={{ scale: 1.3 }}
                  >
                    {item.current && (
                      <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping"></div>
                    )}
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                  
                  {/* Mobile content */}
                  <motion.div
                    className="flex-1 glass-effect p-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/30 bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg"
                    whileHover={{ y: -3 }}
                  >
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.year}
                      </h4>
                      <h5 className="text-lg font-bold text-foreground">{item.title}</h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      {item.current && (
                        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-2 rounded-full text-xs font-semibold border border-primary/30">
                          <span>🚀</span>
                          Current Goal
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
