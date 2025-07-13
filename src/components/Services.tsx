import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import { Home, Map, FileText, Ruler, Shield, Building2 } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Home,
      title: "Venta de Propiedades",
      description: "Ofrecemos las mejores propiedades y terrenos con ubicación estratégica y precios competitivos."
    },
    {
      icon: FileText,
      title: "Diseño de Planos",
      description: "Diseños arquitectónicos personalizados que se adaptan a tus necesidades y presupuesto."
    },
    {
      icon: Building2,
      title: "Construcción de Obras",
      description: "Construcción integral con los más altos estándares de calidad y acabados premium."
    },
    {
      icon: Map,
      title: "Topografía y Georreferenciación",
      description: "Servicios precisos de medición y mapeo para garantizar proyectos exitosos."
    },
    {
      icon: Shield,
      title: "Saneamiento Físico Legal",
      description: "Regularizamos la documentación de tu propiedad para brindarte total seguridad jurídica."
    },
    {
      icon: Ruler,
      title: "Regularización de Terrenos",
      description: "Legalizamos terrenos para que puedas construir sin preocupaciones legales."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.services-title',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutQuart'
            });

            anime({
              targets: '.service-card',
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(150, { start: 300 }),
              easing: 'easeOutQuart'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="services-title text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Brindamos soluciones integrales en construcción y bienes raíces con más de 15 años de experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card opacity-0 group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;