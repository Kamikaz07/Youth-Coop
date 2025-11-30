import { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaBullhorn, FaRocket } from 'react-icons/fa';

const cards = [
  {
    icon: FaHandHoldingHeart,
    title: "Voluntaria-te",
    description: "Contribui diretamente para projetos com impacto positivo na comunidade.",
    color: "#c8144e",
    buttonText: "Saber Mais"
  },
  {
    icon: FaBullhorn,
    title: "Sê Embaixador/a",
    description: "Promove as nossas oportunidades e ajuda a angariar apoios para a nossa missão.",
    color: "#36c1cd",
    buttonText: "Junta-te"
  },
  {
    icon: FaUsers,
    title: "Parceiro ou Doador",
    description: "Apoia financeiramente ou colabora com recursos para ampliar o nosso impacto.",
    color: "#e4572e",
    buttonText: "Apoiar"
  }
];

// Pre-generated particle data to avoid Math.random during render
const particleData = [
  { id: 0, x: 15, y: 22, size: 8, duration: 12, xOffset: 10, delay: 1 },
  { id: 1, x: 85, y: 18, size: 12, duration: 15, xOffset: -15, delay: 2 },
  { id: 2, x: 45, y: 75, size: 6, duration: 18, xOffset: 20, delay: 0.5 },
  { id: 3, x: 72, y: 55, size: 10, duration: 14, xOffset: -8, delay: 3 },
  { id: 4, x: 28, y: 40, size: 7, duration: 16, xOffset: 12, delay: 1.5 },
  { id: 5, x: 90, y: 85, size: 9, duration: 13, xOffset: -20, delay: 2.5 },
  { id: 6, x: 10, y: 60, size: 11, duration: 17, xOffset: 5, delay: 0.8 },
  { id: 7, x: 55, y: 10, size: 8, duration: 11, xOffset: -12, delay: 3.5 },
  { id: 8, x: 38, y: 92, size: 14, duration: 19, xOffset: 18, delay: 1.2 },
  { id: 9, x: 68, y: 32, size: 6, duration: 12, xOffset: -6, delay: 4 },
  { id: 10, x: 22, y: 78, size: 10, duration: 15, xOffset: 15, delay: 0.3 },
  { id: 11, x: 82, y: 45, size: 7, duration: 14, xOffset: -10, delay: 2.8 },
  { id: 12, x: 48, y: 28, size: 13, duration: 16, xOffset: 8, delay: 1.8 },
  { id: 13, x: 5, y: 88, size: 9, duration: 18, xOffset: -18, delay: 3.2 },
  { id: 14, x: 62, y: 65, size: 8, duration: 13, xOffset: 22, delay: 0.6 },
  { id: 15, x: 35, y: 15, size: 11, duration: 17, xOffset: -14, delay: 4.2 },
  { id: 16, x: 78, y: 72, size: 6, duration: 11, xOffset: 6, delay: 1.4 },
  { id: 17, x: 18, y: 50, size: 12, duration: 19, xOffset: -22, delay: 2.2 },
  { id: 18, x: 92, y: 35, size: 7, duration: 14, xOffset: 16, delay: 3.8 },
  { id: 19, x: 52, y: 82, size: 10, duration: 16, xOffset: -4, delay: 0.9 }
];

const GetInvolved = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Memoize particles to avoid recreation on re-renders
  const particles = useMemo(() => particleData, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateX: -30,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="get-involved" ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(135deg, #251f55 0%, #c8144e 50%, #251f55 100%)',
            'linear-gradient(135deg, #251f55 0%, #36c1cd 50%, #251f55 100%)',
            'linear-gradient(135deg, #251f55 0%, #e4572e 50%, #251f55 100%)',
            'linear-gradient(135deg, #251f55 0%, #c8144e 50%, #251f55 100%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full z-0"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: 'rgba(255,255,255,0.1)'
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}

      {/* Animated shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full mix-blend-screen"
        style={{ backgroundColor: '#ffc914' }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full mix-blend-screen"
        style={{ backgroundColor: '#36c1cd' }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full mix-blend-screen"
        style={{ backgroundColor: '#e4572e' }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255, 201, 20, 0.2)' }}
          >
            <FaRocket className="text-yellow-400" />
            <span className="text-yellow-300 font-semibold">Faz parte da mudança</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-extrabold sm:text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Faz a{' '}
            <span
              className="inline-block text-5xl sm:text-7xl"
              style={{ 
                color: '#ffc914',
                textShadow: '0 0 30px #ffc914, 0 0 60px #ffc91480'
              }}
            >
              Diferença!
            </span>
            {' '}🚀
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl max-w-3xl mx-auto text-white/80 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Junta-te a nós e ajuda a construir um futuro mais sustentável e inclusivo.
            <br/>
            <span className="text-yellow-300">A tua participação é fundamental!</span>
          </motion.p>
        </motion.div>
        
        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative bg-white rounded-3xl p-8 shadow-2xl cursor-pointer overflow-hidden"
                style={{ perspective: 1000 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.05 : 0,
                  }}
                  style={{ 
                    background: `radial-gradient(circle at center, ${card.color}, transparent)`,
                  }}
                />

                {/* Confetti effect on hover */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ backgroundColor: card.color }}
                        initial={{ 
                          x: '50%', 
                          y: '50%',
                          opacity: 1 
                        }}
                        animate={{ 
                          x: `${50 + (Math.random() - 0.5) * 200}%`,
                          y: `${50 + (Math.random() - 0.5) * 200}%`,
                          opacity: 0,
                          scale: [1, 0]
                        }}
                        transition={{ 
                          duration: 0.8,
                          delay: i * 0.05
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg relative z-10"
                  style={{ backgroundColor: card.color }}
                  animate={{ 
                    rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4 relative z-10"
                  style={{ color: '#251f55' }}
                  animate={{ 
                    color: hoveredIndex === index ? card.color : '#251f55'
                  }}
                >
                  {card.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-6 relative z-10">
                  {card.description}
                </p>
                
                <motion.a 
                  href="#" 
                  className="inline-block px-8 py-3 rounded-full font-bold text-white relative z-10 overflow-hidden"
                  style={{ backgroundColor: card.color }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 10px 40px ${card.color}60`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{ 
                      x: hoveredIndex === index ? [0, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                  >
                    {card.buttonText} →
                  </motion.span>
                </motion.a>

                {/* Bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1"
                  style={{ backgroundColor: card.color }}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
