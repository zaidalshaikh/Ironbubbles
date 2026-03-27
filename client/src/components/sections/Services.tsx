import { motion } from "framer-motion";
import { 
  Wrench, 
  ClipboardCheck, 
  Award, 
  Truck, 
  PenTool, 
  Printer, 
  Hammer, 
  Palette 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t, dir, language } = useLanguage();
  
  const getIcon = (index: number) => {
    const icons = [Wrench, ClipboardCheck, Award, Truck, PenTool, Printer, Hammer, Palette];
    return icons[index];
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950 relative" dir={dir}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              {t.services.title1} <span className="text-zinc-500">{t.services.title2}</span>
            </h2>
            <p className={`text-zinc-400 text-lg leading-relaxed font-light ${language === 'ar' ? 'text-xl' : ''}`}>
              {t.services.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = getIcon(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-panel rounded-2xl p-8 hover:bg-zinc-900/80 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}