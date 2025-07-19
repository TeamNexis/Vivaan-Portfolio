import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Music, Headphones, Flame, Youtube, Zap, Shield, Settings, TrendingUp } from "lucide-react";

const bots = [
  {
    name: "@vivanmusicbot",
    description: "Premium music streaming bot with high-quality audio and playlist management features.",
    icon: Music,
    gradient: "from-primary to-secondary",
    users: "50K+",
    link: "https://t.me/vivanmusicbot",
  },
  {
    name: "@TeamXmusicbot",
    description: "Advanced team music bot with collaborative playlists and voice chat integration.",
    icon: Headphones,
    gradient: "from-accent to-green-500",
    users: "35K+",
    link: "https://t.me/TeamXmusicbot",
  },
  {
    name: "@Bloody_musicbot",
    description: "High-performance music bot with unique features and custom audio processing.",
    icon: Flame,
    gradient: "from-red-500 to-orange-500",
    users: "28K+",
    link: "https://t.me/Bloody_musicbot",
  },
  {
    name: "@you_tubemusicbot",
    description: "YouTube music integration bot with search, download, and streaming capabilities.",
    icon: Youtube,
    gradient: "from-secondary to-primary",
    users: "42K+",
    link: "https://t.me/you_tubemusicbot",
  },
];

const features = [
  { icon: Zap, title: "Ultra Fast", description: "Lightning-fast response times", color: "primary" },
  { icon: Shield, title: "Secure", description: "Enterprise-grade security", color: "green-500" },
  { icon: Settings, title: "Customizable", description: "Fully configurable features", color: "accent" },
  { icon: TrendingUp, title: "Scalable", description: "Handles millions of users", color: "orange-500" },
];

export default function BotShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="bots" className="py-20 bg-slate-100 dark:bg-slate-800 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)"
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Bot Showcase</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Discover my collection of powerful Telegram bots</p>
        </motion.div>
        
        {/* Bot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bots.map((bot, index) => {
            const Icon = bot.icon;
            return (
              <motion.div
                key={bot.name}
                className="bot-card glass-effect p-6 rounded-xl group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${bot.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white text-2xl" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{bot.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{bot.description}</p>
                </div>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all"
                  >
                    <a href={bot.link} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Try Bot
                    </a>
                  </Button>
                  <div className="flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{bot.users} Users</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional Bot Features */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8">Bot Features & Capabilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 bg-${feature.color}/20 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`text-${feature.color}`} size={20} />
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
