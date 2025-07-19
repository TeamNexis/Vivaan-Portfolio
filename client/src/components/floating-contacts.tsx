import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronUp } from "lucide-react";

export default function FloatingContacts() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Telegram Contact */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            asChild
            className="w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg"
            size="icon"
          >
            <a href="https://t.me/Officialvivaan" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-24 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Button
              onClick={scrollToTop}
              className="w-12 h-12 bg-slate-600 hover:bg-slate-700 text-white rounded-full shadow-lg"
              size="icon"
            >
              <ChevronUp size={20} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
