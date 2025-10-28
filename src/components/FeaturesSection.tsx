// página serviços
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });
  
  const title = 'Nossas Áreas de Atuação';
  const description = 'Oferecemos uma ampla gama de produtos e serviços essenciais para empresas e instituições em Angola.';
  
  const features = [
    {
      image: "/images/escritorio.webp",
      title: "Fornecimento de Produtos Gerais",
      description: "Material de escritório, informática, consumíveis, mobiliário e electrónica.",
    },
    {
      image: "/images/limpeza.jpg",
      title: "Serviços de Apoio Operacional",
      description: "Manutenção, electricidade, canalização, limpeza e logística.",
    },
    {
      image: "/images/TelecomunicaçõesIT.jpg",
      title: "Telecomunicações e IT",
      description: "Equipamentos de rede, suporte técnico, instalação de cabos, fibra óptica, UPS.",
    },
    {
      image: "/images/Redes-eletricas-de-Media-tensao.jpg",
      title: "Infraestruturas Eléctricas",
      description: "Execução de projetos de eletrificação, instalação de redes de média e baixa tensão, quadros elétricos, sistemas de iluminação e proteção.",
    },
    {
      image: "/images/projetoeletrico.png",
      title: "Licenciamento Técnico",
      description: "Apoio no processo de legalização de projectos elétricos e de telecomunicações junto das entidades competentes, garantindo conformidade normativa.",
    },
    {
      image: "/images/EventosCatering.jpeg",
      title: "Eventos e Catering",
      description: "Fornecimento de refeições, coffee break e apoio em eventos corporativos.",
    },
    {
      image: "/images/carro.jpg",
      title: "Serviço de Aluguer de Viaturas e Transporte",
      description: "Transporte executivo e protocolar para clientes diplomáticos, corporativos e particulares em Luanda e em todo território nacional. Aluguer diário ou de longa duração com motorista. Transporte para delegações, conferências e missões de campo.",
    },
    {
      image: "/images/PublicidadeBrindes.png",
      title: "Publicidade & Brindes",
      description: "Impressão, personalização de material, uniformes e brindes empresariais.",
    },
  ];

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="py-20 px-6 bg-zinc-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Título e descrição centralizados */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Cartões dos serviços */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-700 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
