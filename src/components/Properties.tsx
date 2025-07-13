import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import { MapPin, Square, Eye } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';

const Properties = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const properties = [
    {
      id: 1,
      image: property1,
      title: "Casa Moderna Los Pinos",
      location: "Sector Los Pinos, Ciudad",
      area: "150 m²",
      price: "$85,000",
      description: "Hermosa casa moderna con acabados de primera calidad"
    },
    {
      id: 2,
      image: property2,
      title: "Apartamentos Vista Hermosa",
      location: "Centro de la Ciudad",
      area: "85 m²",
      price: "$65,000",
      description: "Modernos apartamentos con excelente ubicación"
    },
    {
      id: 3,
      image: property1,
      title: "Terreno Urbanizable",
      location: "Zona Residencial Norte",
      area: "200 m²",
      price: "$45,000",
      description: "Terreno listo para construir con todos los servicios"
    },
    {
      id: 4,
      image: property2,
      title: "Villa Familiar",
      location: "Residencial El Bosque",
      area: "220 m²",
      price: "$120,000",
      description: "Amplia villa con jardín y área de recreación"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.property-title',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutQuart'
            });

            anime({
              targets: '.property-card',
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(200, { start: 200 }),
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
    <section id="properties" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="property-title text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0">
            Propiedades en <span className="text-gradient">Venta</span>
          </h2>
          <p className="property-title text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Descubre nuestras mejores propiedades disponibles con la calidad y confianza que nos caracteriza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="property-card opacity-0 group">
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{property.title}</h3>
                
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <Square size={16} className="mr-2" />
                  <span className="text-sm">{property.area}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{property.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <button className="flex items-center text-primary hover:text-primary-hover transition-colors font-medium">
                    <Eye size={16} className="mr-2" />
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;