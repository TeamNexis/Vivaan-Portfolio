import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Megaphone, Settings, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Telegram Groups for Sale",
    description: "High-quality, active Telegram groups with real engagement and targeted audiences.",
    icon: MessageCircle,
    gradient: "from-primary to-secondary",
    link: "https://t.me/Officialvivaan",
    contact: "@Officialvivaan",
  },
  {
    title: "Custom Bot Development",
    description: "Tailored Telegram bots built to your exact specifications with advanced features.",
    icon: Bot,
    gradient: "from-accent to-green-500",
    link: "https://t.me/Elite_Sid",
    contact: "@Elite_Sid",
  },
  {
    title: "Premium Social Media Promotions",
    description: "Strategic social media promotion services to boost your online presence.",
    icon: Megaphone,
    gradient: "from-secondary to-red-500",
    link: "https://t.me/Officialvivaan",
    contact: "Get Started",
  },
  {
    title: "Access Panel & App Tools",
    description: "Professional admin panels and application tools for community management.",
    icon: Settings,
    gradient: "from-orange-500 to-primary",
    link: "https://t.me/Elite_Sid",
    contact: "Learn More",
  },
  {
    title: "One-on-One Growth Strategy",
    description: "Personalized consultation and strategy sessions for community growth.",
    icon: TrendingUp,
    gradient: "from-green-500 to-accent",
    link: "https://t.me/Officialvivaan",
    contact: "Book Session",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">How Can I Help You?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Professional services for your digital automation needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-card glass-effect p-8 rounded-xl text-center group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white text-2xl" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
                <Button
                  asChild
                  className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold transition-all`}
                >
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {service.contact}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
