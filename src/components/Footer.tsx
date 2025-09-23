import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const companyName = 'Serveforma';
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    { name: 'Telefone', href: 'tel:+244951461675', icon: <Phone className="w-5 h-5" />, text: '+244 951 461 675' },
    { name: 'Email', href: 'mailto:geral@serveforma.co.ao', icon: <Mail className="w-5 h-5" />, text: 'geral@serveforma.co.ao' },
    { name: 'Localização', href: '#', icon: <MapPin className="w-5 h-5" />, text: 'Luanda, Angola' },
    { name: 'Website', href: 'https://www.serveforma.co.ao', icon: <Globe className="w-5 h-5" />, text: 'www.serveforma.co.ao' },
  ];

  return (
    <footer id="contact" className="bg-zinc-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-3xl mb-4 text-orange-500">{companyName}</div>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              Empresa angolana dedicada ao fornecimento de produtos e serviços essenciais para empresas e instituições. Atuamos com foco em qualidade, rapidez e soluções personalizadas.
            </p>
            <div className="text-zinc-300 text-sm">
              © {currentYear} {companyName}. Todos os direitos reservados.
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500 mb-4">Informações de Contacto</h3>
            {contactInfo.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                target={contact.name === 'Website' ? '_blank' : undefined}
                rel={contact.name === 'Website' ? 'noopener noreferrer' : undefined}
              >
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  {contact.icon}
                </div>
                <span>{contact.text}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Company Mission */}
        <motion.div
          className="pt-8 border-t border-zinc-600/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-zinc-300 text-sm hover:text-zinc-200 transition-colors duration-300 mb-2"
          >
            "Fornecer soluções completas em produtos e serviços com excelência e eficiência"
          </motion.p>
          <motion.p 
            className="text-zinc-400 text-xs"
          >
            Luanda, Angola - tala hadi rua F casa 52A, cazenga
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};