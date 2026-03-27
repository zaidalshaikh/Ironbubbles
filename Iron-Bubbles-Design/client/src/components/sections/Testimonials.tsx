import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { t, dir, language } = useLanguage();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-900 relative" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
            {t.testimonials.title1} <span className="text-zinc-500">{t.testimonials.title2}</span>
          </h2>
          <p className={`text-zinc-400 text-lg leading-relaxed font-light ${language === 'ar' ? 'text-xl' : ''}`}>
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => {
            const initials = testimonial.author.split(' ').map(n => n[0]).join('').substring(0, 2);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel p-8 rounded-2xl relative"
              >
                <div className="flex gap-1 text-zinc-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-white text-lg leading-relaxed font-light mb-8 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                    <span className="text-white font-display font-medium">{initials}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{testimonial.author}</h4>
                    <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}