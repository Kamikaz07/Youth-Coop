import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExpand } from 'react-icons/fa';

const projects = [
  {
    title: "Generation Europe",
    description: "Empoderamento e participação comunitária de jovens sintrenses, ligado a mais de 30 organizações Europeias para trabalhar a Cidadania Ativa Europeia.",
    image: "https://youthcoop.pt/wp-content/uploads/brizy/imgs/PXL_20241214_1243211202-772x1030x166x340x438x368x1736135289.jpg",
    color: "#c8144e"
  },
  {
    title: "Ponto de Informação Jovem",
    description: "Espaço para obter informação sobre oportunidades, voluntariado, direitos e apoio à criação de projetos pessoais e sociais.",
    image: "https://youthcoop.pt/wp-content/uploads/brizy/imgs/PXL_20240620_113227691-860x1142x0x292x860x788x1736134949.jpg",
    color: "#36c1cd"
  },
  {
    title: "Circular - Casa da Economia Circular",
    description: "Espaço de aprendizagem onde promovemos a economia circular com oficinas sobre reutilização de plástico, madeira e papel.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "#ffc914"
  },
  {
    title: "Oficinas para a Sustentabilidade",
    description: "Atividades práticas e artísticas para desenvolver a criatividade e educação ambiental de crianças e jovens.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "#e4572e"
  },
  {
    title: "Oficinas Criativas",
    description: "Das artes plásticas à transformação de materiais, exploramos a criatividade através da reutilização e expressão artística.",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "#251f55"
  },
  {
    title: "Clubes A.TUA",
    description: "Clubes de jovens para capacitação e envolvimento comunitário através de aprendizagem não formal e cidadania ativa.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "#36c1cd"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-white overflow-hidden">
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
            style={{ backgroundColor: 'rgba(228, 87, 46, 0.1)', color: '#e4572e' }}
          >
            Os nossos projetos
          </motion.span>
          <h2 className="text-3xl font-extrabold sm:text-5xl mb-4" style={{ color: '#251f55' }}>
            Projetos em Destaque ✨
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            As nossas iniciativas para mudar o mundo
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              style={{ perspective: 1000 }}
            >
              {/* Image container */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  animate={{ 
                    scale: hoveredIndex === index ? 1.15 : 1,
                    filter: hoveredIndex === index ? 'brightness(0.7)' : 'brightness(0.9)'
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Color overlay */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: project.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Expand icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1 : 0,
                    rotate: hoveredIndex === index ? 0 : -180
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FaExpand className="text-white text-sm" />
                </motion.div>
              </div>

              {/* Content */}
              <motion.div 
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
                }}
              >
                {/* Tag */}
                <motion.div
                  className="mb-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: hoveredIndex === index ? 0 : -20,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    Em curso
                  </span>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    y: hoveredIndex === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>

                {/* Button */}
                <motion.button
                  className="flex items-center gap-2 text-white font-semibold text-sm group/btn"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -20
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  Saber mais 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* Bottom colored line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1"
                style={{ backgroundColor: project.color }}
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? '100%' : '30%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
