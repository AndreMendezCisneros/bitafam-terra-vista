import { useEffect } from 'react';
// @ts-ignore
import anime from 'animejs';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  useEffect(() => {
    // Hero background animation
    anime({
      targets: '.hero-bg',
      scale: [1.1, 1],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutQuart'
    });

    // Hero content animation
    anime({
      targets: '.hero-title',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      delay: 500,
      easing: 'easeOutQuart'
    });

    anime({
      targets: '.hero-subtitle',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      delay: 800,
      easing: 'easeOutQuart'
    });

    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      translateY: [30, 0],
      scale: [0.9, 1],
      duration: 1000,
      delay: 1100,
      easing: 'easeOutElastic'
    });
  }, []);

  const scrollToProperties = () => {
    const section = document.getElementById('properties');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="BITAFAM Construction"
          className="hero-bg w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/90 to-brand-orange-dark/95"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 opacity-0">
          Construyendo el futuro 
          <span className="block text-white/90">desde la tierra</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl mb-8 opacity-0 font-light">
          Más de 15 años transformando terrenos en hogares de ensueño
        </p>
        
        <button 
          onClick={scrollToProperties}
          className="hero-cta btn-hero opacity-0 bg-white text-brand-orange hover:bg-white/90"
        >
          Ver Propiedades
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;