import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const team = [
  {
    name: "Edite Pereira",
    role: "Gestora de Projetos",
    subtitle: "Cooperadora fundadora",
    image: "https://youthcoop.pt/wp-content/uploads/2023/04/edite-x1.jpg"
  },
  {
    name: "Jorge Gomes",
    role: "Gestor de projetos",
    subtitle: "Cooperador fundador",
    image: "https://youthcoop.pt/wp-content/uploads/2023/04/jorge2-site-photo.jpg"
  },
  {
    name: "Élia Henriques",
    role: "Técnica de Projetos",
    subtitle: "Cooperadora",
    image: "https://youthcoop.pt/wp-content/uploads/2025/01/elia-foto-2.jpg"
  },
  {
    name: "Inês Vasquez",
    role: "Técnica de Juventude",
    subtitle: "Cooperadora",
    image: "https://youthcoop.pt/wp-content/uploads/2023/04/foto-ines.jpg"
  },
  {
    name: "Luís Monteiro",
    role: "Parcerias e Estratégias",
    subtitle: "Cooperador",
    image: "https://youthcoop.pt/wp-content/uploads/2025/01/1729087119869.jpeg"
  }
];

const Team = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      rotateY: -30,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'rgba(54, 193, 205, 0.1)', color: '#36c1cd' }}
          >
            A nossa equipa
          </motion.span>
          <h2 className="text-3xl font-extrabold sm:text-5xl mb-4" style={{ color: '#251f55' }}>
            Equipa Youth Coop 💚
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            O coração pulsante do nosso trabalho com a comunidade
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 400 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative bg-white rounded-2xl shadow-lg p-6 w-56 text-center cursor-pointer overflow-hidden group"
              style={{ perspective: 1000 }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0"
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                style={{ 
                  background: 'linear-gradient(180deg, transparent 0%, rgba(200, 20, 78, 0.05) 100%)',
                }}
              />

              {/* Image container with effects */}
              <motion.div
                className="relative mx-auto mb-4 w-32 h-32"
                animate={{ 
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'conic-gradient(from 0deg, #c8144e, #36c1cd, #ffc914, #c8144e)',
                    padding: 3
                  }}
                  animate={{ 
                    rotate: hoveredIndex === index ? 360 : 0 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: hoveredIndex === index ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white" />
                </motion.div>
                
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                />

                {/* Social icons overlay */}
                <motion.div
                  className="absolute inset-0 rounded-full flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'rgba(37, 31, 85, 0.8)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white text-xl"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white text-xl"
                  >
                    <FaEnvelope />
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-lg font-bold relative z-10"
                style={{ color: '#251f55' }}
                animate={{ 
                  color: hoveredIndex === index ? '#c8144e' : '#251f55'
                }}
              >
                {member.name}
              </motion.h3>
              <p className="text-sm font-medium" style={{ color: '#36c1cd' }}>{member.role}</p>
              <p className="text-xs text-gray-500 mt-1">{member.subtitle}</p>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full"
                style={{ backgroundColor: 'rgba(255, 201, 20, 0.2)' }}
                animate={{ 
                  scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
