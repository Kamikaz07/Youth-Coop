import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaHandsHelping } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: "Sustentabilidade Ambiental",
    description: "Promovemos a economia circular, o combate ao desperdício e práticas e estilos de vida mais sustentáveis.",
    icon: FaLeaf,
    color: "#36c1cd",
    bgColor: "rgba(54, 193, 205, 0.1)"
  },
  {
    title: "Comunidade e Cidadania",
    description: "Proporcionamos oportunidades para o envolvimento dos jovens nas suas comunidades e promovemos os Direitos Humanos.",
    icon: FaUsers,
    color: "#c8144e",
    bgColor: "rgba(200, 20, 78, 0.1)"
  },
  {
    title: "Trabalho de Juventude",
    description: "Promovemos o reconhecimento do trabalho de juventude e a capacitação de profissionais nesta área.",
    icon: FaHandsHelping,
    color: "#e4572e",
    bgColor: "rgba(228, 87, 46, 0.1)"
  }
];

const Areas = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

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
      rotateX: -45,
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
    <section id="areas" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'rgba(200, 20, 78, 0.1)', color: '#c8144e' }}
          >
            O que fazemos
          </motion.span>
          <h2 className="text-3xl font-extrabold sm:text-5xl mb-4" style={{ color: '#251f55' }}>
            Áreas de Atuação
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            O nosso foco para um impacto positivo na comunidade 🎯
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative rounded-3xl p-8 bg-white shadow-xl cursor-pointer overflow-hidden"
                style={{ perspective: 1000 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.1 : 0,
                    scale: hoveredIndex === index ? 1.5 : 1
                  }}
                  style={{ 
                    background: `radial-gradient(circle at center, ${area.color}, transparent)`,
                  }}
                />

                {/* Floating particles */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ backgroundColor: area.color }}
                        initial={{ 
                          x: Math.random() * 200, 
                          y: 200,
                          opacity: 0 
                        }}
                        animate={{ 
                          y: -20,
                          opacity: [0, 1, 0],
                          x: Math.random() * 200
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icon with animation */}
                <motion.div 
                  className="mb-6 flex justify-center relative z-10"
                  animate={{ 
                    rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredIndex === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: area.bgColor }}
                  >
                    <IconComponent className="w-10 h-10" style={{ color: area.color }} />
                  </div>
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-center mb-4 relative z-10"
                  style={{ color: '#251f55' }}
                  animate={{ 
                    color: hoveredIndex === index ? area.color : '#251f55'
                  }}
                >
                  {area.title}
                </motion.h3>
                
                <p className="text-gray-600 text-center relative z-10">
                  {area.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ backgroundColor: area.color }}
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

export default Areas;
