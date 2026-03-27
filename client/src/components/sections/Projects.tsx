import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectImages = [
  "/images/project-1.png",
  "/images/project-2.png",
  "/images/project-3.png"
];

export default function Projects() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-900 relative border-y border-white/5" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              {t.projects.title1} <span className="text-zinc-500">{t.projects.title2}</span>
            </h2>
            <p className={`text-zinc-400 text-lg leading-relaxed font-light ${language === 'ar' ? 'text-xl' : ''}`}>
              {t.projects.description}
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium pb-2 border-b border-white/20 hover:border-white">
            {t.projects.viewAll} <ArrowIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <img 
                  src={projectImages[index]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                  <ArrowIcon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <span className="text-zinc-500 text-sm font-medium tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}