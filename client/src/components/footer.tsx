import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Github, Download } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Update year automatically
    setCurrentYear(new Date().getFullYear());

    // PWA Installation
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallButton(false);
      }
      setDeferredPrompt(null);
    }
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://t.me/Officialvivaan",
      label: "Main Telegram",
    },
    {
      icon: Github,
      href: "https://github.com/strad-dev131",
      label: "GitHub",
    },
    {
      icon: MessageCircle,
      href: "https://t.me/Elite_Sid",
      label: "Developer Telegram",
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Vivaan</span>
          </motion.div>
          
          <motion.p
            className="text-slate-600 dark:text-slate-400 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Building the future of Telegram automation, one bot at a time.
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
          
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Vivaan - All rights reserved. |{" "}
              <a href="#" className="hover:text-primary transition-colors">
                MIT License
              </a>
            </p>
            
            <div className="flex items-center space-x-4">
              {showInstallButton && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Button
                    onClick={handleInstallPWA}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Install App
                  </Button>
                </motion.div>
              )}
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Made with ❤️ for the community
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
