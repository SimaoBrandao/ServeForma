//cabeçalho
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Quem somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];
  const ctaText = 'Fale Connosco';
  const ctaHref = '#contact';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (    
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled ? 'bg-zinc-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo + Nome lado a lado */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Serveforma Logo"
            className="w-16 h-16 object-contain rounded-full bg-white shadow"
          />

          <span className="font-bold text-2xl text-zinc-900 hover:text-amber-600 transition-colors">
            ServeForma
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-600 hover:text-amber-600 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={ctaHref}
          className="hidden md:inline-flex items-center px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {ctaText}
        </a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-100 active:scale-95 transition-all duration-200 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-zinc-900" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-zinc-900" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-zinc-50 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-zinc-600 hover:text-zinc-900 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href={ctaHref}
                className="block w-full text-center px-6 py-2 bg-zinc-900 text-white rounded-lg mt-4 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {ctaText}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
