import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t, dir, language } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              {t.contact.title1} <span className="text-zinc-500">{t.contact.title2}</span>
            </h2>
            <p className={`text-zinc-400 text-lg leading-relaxed font-light mb-12 max-w-md ${language === 'ar' ? 'text-xl' : ''}`}>
              {t.contact.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t.contact.hq}</h4>
                  <p className="text-zinc-400 font-light text-sm">
                    {t.contact.hqAddress1}<br />
                    {t.contact.hqAddress2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t.contact.inquiries}</h4>
                  <p className={`text-zinc-400 font-light text-sm ${dir === 'rtl' ? 'dir-ltr text-right inline-block' : ''}`}>
                    <a href="mailto:loai.abdelrahim@ironbubbles-adv.com" className="hover:text-white transition-colors">loai.abdelrahim@ironbubbles-adv.com</a><br />
                    <a href="tel:+962780820808" className="hover:text-white transition-colors">+962 780820808</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs uppercase tracking-widest text-zinc-500 font-medium ${language === 'ar' ? 'font-bold tracking-normal' : ''}`}>{t.contact.formFullName}</label>
                  <Input 
                    placeholder={t.contact.formFullNamePlaceholder} 
                    className="bg-zinc-900/50 border-white/10 focus:border-white/30 text-white rounded-none border-t-0 border-x-0 border-b pb-2 px-0 focus-visible:ring-0 placeholder:text-zinc-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs uppercase tracking-widest text-zinc-500 font-medium ${language === 'ar' ? 'font-bold tracking-normal' : ''}`}>{t.contact.formCompany}</label>
                  <Input 
                    placeholder={t.contact.formCompanyPlaceholder} 
                    className="bg-zinc-900/50 border-white/10 focus:border-white/30 text-white rounded-none border-t-0 border-x-0 border-b pb-2 px-0 focus-visible:ring-0 placeholder:text-zinc-700" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest text-zinc-500 font-medium ${language === 'ar' ? 'font-bold tracking-normal' : ''}`}>{t.contact.formEmail}</label>
                <Input 
                  type="email"
                  placeholder={t.contact.formEmailPlaceholder} 
                  className={`bg-zinc-900/50 border-white/10 focus:border-white/30 text-white rounded-none border-t-0 border-x-0 border-b pb-2 px-0 focus-visible:ring-0 placeholder:text-zinc-700 ${dir === 'rtl' ? 'text-left' : ''}`} 
                  dir={dir === 'rtl' ? 'ltr' : 'ltr'}
                />
              </div>

              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest text-zinc-500 font-medium ${language === 'ar' ? 'font-bold tracking-normal' : ''}`}>{t.contact.formDetails}</label>
                <Textarea 
                  placeholder={t.contact.formDetailsPlaceholder} 
                  className="bg-zinc-900/50 border-white/10 focus:border-white/30 text-white rounded-none border-t-0 border-x-0 border-b pb-2 px-0 min-h-[120px] resize-none focus-visible:ring-0 placeholder:text-zinc-700" 
                />
              </div>

              <Button className="w-full bg-white text-black hover:bg-zinc-200 rounded-full py-6 text-lg font-medium mt-4 no-default-hover-elevate">
                {t.contact.formSubmit}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
