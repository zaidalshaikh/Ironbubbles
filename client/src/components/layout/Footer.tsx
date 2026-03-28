import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, dir, language } = useLanguage();
  
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <a className="flex items-center group mb-6">
                <div className="relative h-12 md:h-14 flex items-center transition-transform duration-300 group-hover:scale-105">
                 <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Iron Bubbles" />
                </div>
              </a>
            </Link>
            <p className={`text-zinc-400 text-sm leading-relaxed mb-6 ${language === 'ar' ? 'text-base' : ''}`}>
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-white mb-6 tracking-wide">{t.footer.servicesTitle}</h4>
            <ul className="space-y-4">
              {t.footer.servicesList.map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-white mb-6 tracking-wide">{t.footer.companyTitle}</h4>
            <ul className="space-y-4">
              {t.footer.companyList.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-white mb-6 tracking-wide">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>{t.footer.address1}<br/>{t.footer.address2}</li>
              <li className={dir === 'rtl' ? 'dir-ltr text-right inline-block' : ''}><a href="mailto:info@ironbubbles.com" className="hover:text-white transition-colors">info@ironbubbles.com</a></li>
              <li className={dir === 'rtl' ? 'dir-ltr text-right inline-block' : ''}><a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; {currentYear} {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
