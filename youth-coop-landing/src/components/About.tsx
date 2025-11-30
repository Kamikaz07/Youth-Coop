import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHandsHelping, FaGlobeEurope, FaSeedling, FaUsers } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: FaHandsHelping,
    title: 'Cooperação',
    description: 'Trabalhamos em conjunto com a comunidade'
  },
  {
    icon: FaGlobeEurope,
    title: 'Dimensão Europeia',
    description: 'Parcerias com organizações de toda a Europa'
  },
  {
    icon: FaSeedling,
    title: 'Sustentabilidade',
    description: 'Compromisso com o desenvolvimento sustentável'
  },
  {
    icon: FaUsers,
    title: 'Juventude',
    description: 'Foco no empoderamento de jovens'
  }
];

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const valuesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    valuesRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !valuesRef.current.includes(el)) {
      valuesRef.current.push(el);
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div ref={contentRef}>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6" style={{ color: '#251f55' }}>
              Sobre a <span style={{ color: '#c8144e' }}>Youth Coop</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma <strong>cooperativa de profissionais de juventude</strong> para a capacitação 
              e sensibilização de jovens no âmbito do <strong>trabalho de juventude (Youth Work)</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Desde <strong>2018</strong> que desenvolvemos ofertas sociais, educativas e comunitárias 
              sustentáveis, atuando no <strong>concelho de Sintra</strong> com projetos de dimensão local e europeia.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              O nosso foco é o <strong>desenvolvimento de competências pessoais e sociais</strong> de jovens 
              através de projetos e serviços com impacto positivo na comunidade.
            </p>
            <a 
              href="#areas" 
              className="inline-flex items-center px-6 py-3 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{ backgroundColor: '#c8144e' }}
            >
              Descobre as Nossas Áreas
            </a>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 rounded-2xl opacity-20" style={{ background: 'linear-gradient(135deg, #c8144e, #36c1cd)' }}></div>
            <img 
              src="https://youthcoop.pt/wp-content/uploads/brizy/imgs/1681514971693-2-1038x778x212x0x614x778x1686358284.jpg" 
              alt="Youth Coop em ação"
              className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
            <div 
              className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg"
              style={{ backgroundColor: '#ffc914' }}
            >
              <p className="font-bold text-lg" style={{ color: '#251f55' }}>Desde 2018</p>
              <p className="text-sm" style={{ color: '#251f55' }}>A empoderar jovens</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <value.icon className="text-4xl mx-auto mb-4" style={{ color: '#c8144e' }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#251f55' }}>{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
