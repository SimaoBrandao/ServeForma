import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://c8.alamy.com/comp/2GN13B9/angola-luanda-province-capital-luanda-view-of-the-waterfront-called-marginal-modern-office-buildings-in-the-city-center-2GN13B9.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight md:leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Serveforma
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Fornecemos soluções completas em produtos e serviços com excelência e eficiência para empresas e instituições em Angola.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="mr-2">Fale Connosco</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#services"
              className="flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white rounded-lg shadow-md hover:bg-white hover:text-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Nossos Serviços</span>
            </motion.a>
          </motion.div>

          {/* Company Values */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              { value: 'Compromisso', description: 'Com a qualidade' },
              { value: 'Inovação', description: 'Soluções modernas' },
              { value: 'Responsabilidade', description: 'Social e ambiental' },
            ].map((item, index) => (
              <motion.div
                key={item.value}
                className="text-center hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-200 mt-1">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};