//pagina serviços
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Cog, Wifi, Zap, ClipboardCheck, Coffee, Gift} from 'lucide-react';

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
      icon: <Package className="w-8 h-8" />,
      title: 'Fornecimento de Produtos Gerais',
      description: 'Material de escritório, informática, consumíveis, mobiliário e electrónica.',
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Serviços de Apoio Operacional',
      description: 'Manutenção, electricidade, canalização, limpeza e logística.',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Telecomunicações e IT',
      description: 'Equipamentos de rede, suporte técnico, instalação de cabos, fibra óptica, UPS.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Infraestruturas Eléctricas',
      description: 'Execução de projetos de eletrificação, instalação de redes de média e baixa tensão, quadros elétricos, sistemas de iluminação e proteção.',
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Licenciamento Técnico.',
      description: 'Apoio no processo de legalização de projectos elétricos e de telecomunicações junto das entidades competentes, garantindo conformidade normativa.',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Eventos e Catering',
      description: 'Fornecimento de refeições, coffee break e apoio em eventos corporativos.',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Publicidade & Brindes',
      description: 'Impressão, personalização de material, uniformes e brindes empresariais.',
    },
  ];

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="py-20 px-6 bg-zinc-50"
    >
      <div className="container mx-auto max-w-4xl">
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-lg border border-zinc-200 text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};