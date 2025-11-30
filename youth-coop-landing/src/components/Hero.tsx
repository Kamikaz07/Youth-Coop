import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = 'https://youthcoop.pt/wp-content/uploads/brizy/imgs/1681514971693-2-1038x778x212x0x614x778x1686358284.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with proper loading */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("https://youthcoop.pt/wp-content/uploads/brizy/imgs/1681514971693-2-1038x778x212x0x614x778x1686358284.jpg")',
        }}
      />
      
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(37,31,85,0.95) 0%, rgba(200,20,78,0.85) 50%, rgba(37,31,85,0.95) 100%)' }}></div>

      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-yellow/30 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-cyan/30 rounded-full blur-xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange/30 rounded-full blur-xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-white">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block">Empoderamos a</span>
          <motion.span 
            className="block text-yellow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comunidade
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-100 mb-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Juntos, capacitamos a comunidade para um futuro melhor. 🌍🌱
          <br/>Acreditamos no poder do trabalho de juventude.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
            style={{ backgroundColor: '#ffc914', color: '#251f55' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#36c1cd'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffc914'; e.currentTarget.style.color = '#251f55'; }}
          >
            Junta-te a Nós
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-3 bg-white/70 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
