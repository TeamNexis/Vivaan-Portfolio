import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Rocket, Gift, ArrowRight } from "lucide-react";

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Users,
      title: "100K+ Members",
      description: "Active community of developers and bot enthusiasts",
      color: "primary",
    },
    {
      icon: Rocket,
      title: "24/7 Support",
      description: "Round-the-clock assistance and community support",
      color: "accent",
    },
    {
      icon: Gift,
      title: "Exclusive Resources",
      description: "Access to premium tools and bot templates",
      color: "green-500",
    },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern tech workspace background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div
          className="glass-effect p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="text-6xl text-primary mb-6 mx-auto" size={60} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Join Our Community</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Connect with <span className="font-bold text-primary">1 Lakh+ Members</span> in our exclusive Telegram community
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 bg-${feature.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`text-${feature.color}`} size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-4 rounded-lg font-bold text-xl shadow-2xl"
                size="lg"
              >
                <a href="https://t.me/+NjCLUdyRl09kN2Rl" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Join Community Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </motion.div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Free to join • Instant access • No spam guaranteed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
