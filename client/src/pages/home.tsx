import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BotShowcase from "@/components/bot-showcase";
import ServicesSection from "@/components/services-section";
import CommunitySection from "@/components/community-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingContacts from "@/components/floating-contacts";

export default function Home() {
  useEffect(() => {
    // Console Easter Egg
    console.log(`
    ██╗   ██╗██╗██╗   ██╗ █████╗  █████╗ ███╗   ██╗
    ██║   ██║██║██║   ██║██╔══██╗██╔══██╗████╗  ██║
    ██║   ██║██║██║   ██║███████║███████║██╔██╗ ██║
    ╚██╗ ██╔╝██║╚██╗ ██╔╝██╔══██║██╔══██║██║╚██╗██║
     ╚████╔╝ ██║ ╚████╔╝ ██║  ██║██║  ██║██║ ╚████║
      ╚═══╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
            
    🤖 Hey there, fellow developer!
    
    Welcome to Vivaan's portfolio! 
    
    Interested in the code? Check out:
    🔗 GitHub: https://github.com/strad-dev131
    📱 Telegram: @Officialvivaan
    
    Built with ❤️ using React, Tailwind CSS & Framer Motion
    `);

    // Keyboard shortcuts
    const handleKeyboard = (e: KeyboardEvent) => {
      // Alt + H for Home
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Alt + C for Contact
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Alt + B for Bots
      if (e.altKey && e.key === 'b') {
        e.preventDefault();
        document.getElementById('bots')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BotShowcase />
      <ServicesSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
      <FloatingContacts />
    </div>
  );
}
