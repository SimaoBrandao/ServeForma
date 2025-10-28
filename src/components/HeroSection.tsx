// imagem inicial
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  // Slides com imagens e textos
  const slides = [
    { 
      url: '/images/eletricidade.jpg', 
      text: 'Projetamos e implementamos infraestruturas de eletrificação modernas, seguras e sustentáveis.' 
    },
    { 
      url: '/images/servicos.jpg', 
      text: 'Fornecemos soluções completas em produtos e serviços com excelência e eficiência para empresas e instituições em Angola.'
    }, 
    { 
      url: '/images/eventos.jpeg', 
      text: 'Organizamos eventos corporativos e coffee breaks de qualidade para a sua empresa.' 
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Troca automática de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // muda a cada 8 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Fundo com slide */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slide.url}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </motion.div>
      ))}

      {/* Conteúdo principal */}
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          ServeForma
        </motion.h1>

        <motion.p
          key={currentSlide} // <- força a animação ao trocar de texto
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {slides[currentSlide].text}
        </motion.p>

        {/* Botões CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="flex items-center justify-center px-8 py-4 bg-[#d4af37] text-white rounded-lg shadow-lg hover:bg-[#d4af37] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="mr-2">Fale Connosco</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            className="flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white rounded-lg shadow-md hover:bg-white hover:text-[#d4af37] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};
