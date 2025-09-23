import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const title = '';
  const description = '';

  const [openItems, setOpenItems] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const toggleItem = (index: number) => {
    const itemId = index.toString();
    setOpenItems(prev =>
      prev.includes(itemId) ? prev.filter(item => item !== itemId) : [...prev, itemId]
    );
  };

  return (
    <section
      ref={containerRef}
      className="py-20 px-6 bg-white"
    >
      <div className="container mx-auto max-w-3xl">
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
            {title}
          </motion.h2>

          <motion.p
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};