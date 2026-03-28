import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, dir, language } = useLanguage();
  
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden" dir={dir}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
       <img src={`${import.meta.env.BASE_URL}images/hero-bg.png`} alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
        
        {/* Subtle animated overlay elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-600/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-zinc-500"></div>
              <span className="text-zinc-400 font-medium tracking-widest uppercase text-sm">{t.hero.subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-[1.1] tracking-tight">
              {t.hero.title1} <br />
              <span className="text-gradient">{t.hero.title2}</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light ${language === 'ar' ? 'text-xl' : ''}`}>
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg font-medium hover-glow no-default-hover-elevate">
                {t.hero.exploreServices}
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm">
                {t.hero.viewProjects}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
