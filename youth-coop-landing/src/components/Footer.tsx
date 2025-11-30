import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/cooperativayouthcoop", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/youthcoop/", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/youthcoop", label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#251f55' }}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#c8144e' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: '#36c1cd' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="https://youthcoop.pt/wp-content/uploads/2023/03/LOGO-FINAL-site-l.png" 
              alt="Youth Coop"
              className="h-16 mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-400 max-w-md mb-6">
              Cooperativa para o Desenvolvimento e Cidadania CRL.
              Empoderamos a comunidade para um futuro melhor. 🌍💚
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: '#c8144e',
                    rotate: [0, -10, 10, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Sobre Nós', 'Projetos', 'Equipa', 'Envolve-te'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#c8144e' }}
                      whileHover={{ scale: 1.5 }}
                    />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contactos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Sintra, Portugal</li>
              <li>📧 geral@youthcoop.pt</li>
              <li>🌐 youthcoop.pt</li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Youth Coop. Feito com 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            em Portugal
          </p>
          
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: '#c8144e' }}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 30px rgba(200, 20, 78, 0.5)' 
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
