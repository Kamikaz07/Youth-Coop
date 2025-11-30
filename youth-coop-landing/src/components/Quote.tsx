import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(quoteRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={quoteRef} className="text-center">
          <FaQuoteLeft className="text-5xl mx-auto mb-6" style={{ color: '#c8144e' }} />
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8" style={{ color: '#251f55' }}>
            "A educação é a arma mais poderosa que podes usar para mudar o mundo."
          </blockquote>
          <cite className="text-lg font-semibold" style={{ color: '#c8144e' }}>
            — Nelson Mandela
          </cite>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Esta citação inspira o nosso trabalho diário. Acreditamos que através do trabalho de juventude 
            e da educação não formal, podemos capacitar jovens para transformar as suas comunidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
