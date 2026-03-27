import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Leadership() {
  const { t, dir, language } = useLanguage();

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              {t.leadership.title1} <span className="text-zinc-500">{t.leadership.title2}</span>
            </h2>
            <p className={`text-zinc-400 text-lg leading-relaxed font-light ${language === 'ar' ? 'text-xl' : ''}`}>
              {t.leadership.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.leadership.items.map((leader, index) => {
            const initials = leader.name.split(' ').map(n => n[0]).join('').substring(0, 2);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-square bg-zinc-900 border border-white/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className={`text-5xl font-display font-medium text-zinc-700 group-hover:text-zinc-500 transition-colors relative z-10 ${language === 'ar' ? 'font-sans' : ''}`}>
                    {initials}
                  </span>
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-zinc-500 text-sm">
                  {leader.role}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}