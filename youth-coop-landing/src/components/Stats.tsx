import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 2018, label: 'Ano de Fundação', suffix: '', isYear: true },
  { number: 30, label: 'Organizações Europeias Parceiras', suffix: '+', isYear: false },
  { number: 500, label: 'Jovens Impactados', suffix: '+', isYear: false },
  { number: 5, label: 'Projetos Ativos', suffix: '', isYear: false },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const target = { value: 0 };
            gsap.to(target, {
              value: stat.number,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(target.value);
                  return newCounts;
                });
              }
            });
          });
        }
      }
    });

    return () => trigger.kill();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #251f55 0%, #c8144e 100%)' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            O Nosso Impacto 📊
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Números que refletem o nosso compromisso com a comunidade
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.isYear ? counts[index] : counts[index]}{stat.suffix}
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
