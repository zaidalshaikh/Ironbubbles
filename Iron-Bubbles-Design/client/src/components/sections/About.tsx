import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, dir, language } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" dir={dir}>
      {/* Decorative background element */}
      <div className={`absolute top-0 ${dir === 'rtl' ? 'left-0 -translate-x-1/3' : 'right-0 translate-x-1/3'} w-[800px] h-[800px] bg-zinc-900/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none`} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8">
              {t.about.title1} <span className="text-zinc-500">{t.about.title2}</span>
            </h2>
            
            <div className={`space-y-6 text-zinc-400 text-lg leading-relaxed font-light ${language === 'ar' ? 'text-xl' : ''}`}>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <img src="/images/logo.png" alt="Iron Bubbles Symbol" className="w-12 h-12 opacity-50 grayscale" />
              <div className={`h-px flex-1 bg-gradient-to-${dir === 'rtl' ? 'l' : 'r'} from-white/10 to-transparent`}></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-8"
          >
            {t.about.stats.map((stat, index) => (
              <div key={index} className="glass-panel p-8 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
                <span className={`text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight ${dir === 'rtl' ? 'dir-ltr inline-block' : ''}`}>
                  {stat.value}
                </span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}