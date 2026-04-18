import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.testimonials, href: "#testimonials" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center group">
           <div className="relative h-8 md:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
  <img
    src={`${import.meta.env.BASE_URL}images/logo.png`}
    alt="Iron Bubbles"
    className="h-full w-auto max-w-[140px] md:max-w-[170px] object-contain drop-shadow-md"
  />
</div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors uppercase tracking-wider font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Globe size={16} />
              {language === 'en' ? 'العربية' : 'EN'}
            </button>
            <Button 
              className="bg-white text-black hover:bg-zinc-200 rounded-full px-6 py-5 font-medium hover-glow no-default-hover-elevate"
            >
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            <Globe size={16} />
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            className="text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/5 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg text-zinc-300 hover:text-white p-2 border-b border-white/5 uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4 bg-white text-black hover:bg-zinc-200 rounded-full py-6 text-lg font-medium">
           onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          </Button>
        </div>
      )}
    </nav>
  );
}
