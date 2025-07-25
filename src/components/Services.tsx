import { useEffect, useRef, useState } from 'react';
import { Home, Map, FileText, Ruler, Shield, Building2 } from 'lucide-react';
import teamWork from '@/assets/team-work.jpg';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import heroConstruction from '@/assets/hero-construction.jpg';
import { X } from 'lucide-react';

const serviceDetails = [
  {
    name: 'Venta de Propiedades',
    description: 'Ofrecemos las mejores propiedades y terrenos con ubicación estratégica y precios competitivos. Te acompañamos en todo el proceso de compra-venta, brindando asesoría legal y financiera.',
    image: property1,
    features: ['Asesoría personalizada', 'Gestión de documentos', 'Acompañamiento legal', 'Opciones de financiamiento']
  },
  {
    name: 'Diseño de Planos',
    description: 'Realizamos diseños arquitectónicos personalizados que se adaptan a tus necesidades y presupuesto. Utilizamos tecnología de vanguardia para visualizar tu proyecto antes de construir.',
    image: teamWork,
    features: ['Planos 2D y 3D', 'Modelado digital', 'Optimización de espacios', 'Entrega rápida']
  },
  {
    name: 'Construcción de Obras',
    description: 'Construcción integral con los más altos estándares de calidad y acabados premium. Supervisión constante y cumplimiento de plazos.',
    image: heroConstruction,
    features: ['Materiales de calidad', 'Supervisión profesional', 'Entrega garantizada', 'Presupuesto cerrado']
  },
  {
    name: 'Topografía y Georreferenciación',
    description: 'Servicios precisos de medición y mapeo para garantizar proyectos exitosos. Utilizamos equipos modernos y personal capacitado.',
    image: property2,
    features: ['Mapeo digital', 'Certificados oficiales', 'Levantamientos topográficos', 'Georreferenciación GPS']
  },
  {
    name: 'Saneamiento Físico Legal',
    description: 'Regularizamos la documentación de tu propiedad para brindarte total seguridad jurídica. Trámites rápidos y transparentes.',
    image: teamWork,
    features: ['Gestión de títulos', 'Solución de conflictos', 'Asesoría legal', 'Trámites notariales']
  },
  {
    name: 'Regularización de Terrenos',
    description: 'Legalizamos terrenos para que puedas construir sin preocupaciones legales. Te guiamos en todo el proceso.',
    image: property2,
    features: ['Diagnóstico legal', 'Gestión municipal', 'Actualización de registros', 'Acompañamiento total']
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalService, setModalService] = useState<null | number>(null);

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
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in-up');
              }, index * 150);
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
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Brindamos soluciones integrales en construcción y bienes raíces con más de 15 años de experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setModalService(index)}
            >
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

      {/* Modal de detalle de servicio */}
      {modalService !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40" onClick={() => setModalService(null)}>
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative animate-fade-in" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-primary"
              onClick={() => setModalService(null)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <img
              src={serviceDetails[modalService].image}
              alt={serviceDetails[modalService].name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-primary">
              {serviceDetails[modalService].name}
            </h2>
            <p className="mb-4 text-muted-foreground">
              {serviceDetails[modalService].description}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
              {serviceDetails[modalService].features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;