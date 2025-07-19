import { motion } from "framer-motion";
import { Rocket, Bot, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingParticles = Array.from({ length: 4 }, (_, i) => (
    <motion.div
      key={i}
      className={`absolute w-${i % 2 === 0 ? '2' : '3'} h-${i % 2 === 0 ? '2' : '3'} rounded-full ${
        i === 0 ? 'bg-primary' : 
        i === 1 ? 'bg-secondary' : 
        i === 2 ? 'bg-accent' : 'bg-green-500'
      }`}
      style={{
        top: `${20 + (i * 20)}%`,
        left: `${10 + (i * 20)}%`,
      }}
      animate={{
        y: [-10, 10, -10],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: i * 0.5,
      }}
    />
  ));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingParticles}
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        {/* Animated avatar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
            alt="Vivaan - Professional Developer Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl animate-glow border-4 border-primary/30"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span className="block">Hi, I'm Vivaan 👨‍💻</motion.span>
          <motion.span className="block text-gradient">Telegram Bot Builder &</motion.span>
          <motion.span className="block text-gradient">Community Automation Leader</motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I create next-gen bots that power online ecosystems
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold"
              size="lg"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection('bots')}
              variant="outline"
              className="glass-effect hover:bg-slate-200 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold"
              size="lg"
            >
              <Bot className="mr-2 h-4 w-4" />
              Explore Bots
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold"
              size="lg"
            >
              <a href="https://t.me/Officialvivaan" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                @Officialvivaan
              </a>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold"
              size="lg"
            >
              <a href="https://t.me/Elite_Sid" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                @Elite_Sid
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl text-slate-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
