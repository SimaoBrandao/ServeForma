//pagina quem somos
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const title = 'Quem somos?';
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 px-6 bg-white"
    >
    <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Quem Somos
          </motion.h2>
          <p className="text-lg text-zinc-700 leading-relaxed">
            A <span className="font-semibold">ServeForma</span> é uma empresa angolana dedicada ao fornecimento de 
            produtos e serviços essenciais para empresas e instituições. Atuamos com foco em qualidade, rapidez 
            e soluções personalizadas, sempre com compromisso e responsabilidade social.
          </p>
        </motion.div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#d4af37] mb-3">Missão</h3>
            <p className="text-zinc-700">
              Fornecer soluções completas em produtos e serviços com excelência e eficiência.
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#d4af37] mb-3">Visão</h3>
            <p className="text-zinc-700">
              Ser referência em Angola como fornecedor de confiança e qualidade.
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-[#d4af37] mb-3">Valores</h3>
            <ul className="list-disc list-inside text-zinc-700 space-y-1">
              <li>Compromisso</li>
              <li>Qualidade</li>
              <li>Inovação</li>
              <li>Responsabilidade</li>
            </ul>
          </motion.div>
        </div>
      </div>  
    </section>
  );
};