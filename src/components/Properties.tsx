import { useEffect, useRef, useState } from 'react';
import { MapPin, Square, Eye, X, Bed, Bath, Car, Calendar } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';

const Properties = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const properties = [
    {
      id: 1,
      image: property1,
      title: "Casa Moderna Los Pinos",
      location: "Sector Los Pinos, Ciudad",
      area: "150 m²",
      price: "$85,000",
      description: "Hermosa casa moderna con acabados de primera calidad",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      year: 2023,
      interior: property2,
      mapUrl: "https://maps.google.com/maps?q=Los+Pinos&t=&z=13&ie=UTF8&iwloc=&output=embed",
      features: ["Cocina moderna", "Aire acondicionado", "Jardín privado", "Garaje techado"]
    },
    {
      id: 2,
      image: property2,
      title: "Apartamentos Vista Hermosa",
      location: "Centro de la Ciudad",
      area: "85 m²",
      price: "$65,000",
      description: "Modernos apartamentos con excelente ubicación",
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      year: 2024,
      interior: property1,
      mapUrl: "https://maps.google.com/maps?q=Centro+Ciudad&t=&z=13&ie=UTF8&iwloc=&output=embed",
      features: ["Balcón amplio", "Seguridad 24/7", "Ascensor", "Cerca transporte público"]
    },
    {
      id: 3,
      image: property1,
      title: "Terreno Urbanizable",
      location: "Zona Residencial Norte",
      area: "200 m²",
      price: "$45,000",
      description: "Terreno listo para construir con todos los servicios",
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      year: 2024,
      interior: property2,
      mapUrl: "https://maps.google.com/maps?q=Zona+Norte&t=&z=13&ie=UTF8&iwloc=&output=embed",
      features: ["Servicios básicos", "Documentos al día", "Zona en desarrollo", "Fácil acceso"]
    },
    {
      id: 4,
      image: property2,
      title: "Villa Familiar",
      location: "Residencial El Bosque",
      area: "220 m²",
      price: "$120,000",
      description: "Amplia villa con jardín y área de recreación",
      bedrooms: 4,
      bathrooms: 3,
      parking: 3,
      year: 2022,
      interior: property1,
      mapUrl: "https://maps.google.com/maps?q=El+Bosque&t=&z=13&ie=UTF8&iwloc=&output=embed",
      features: ["Piscina", "Jardín amplio", "Terraza", "Área de BBQ"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.property-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in-scale');
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
    <section id="properties" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-4">
            Propiedades en <span className="text-gradient">Venta</span>
          </h2>
          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Descubre nuestras mejores propiedades disponibles con la calidad y confianza que nos caracteriza
          </p>
        </div>

        {/* Scroll horizontal container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {properties.map((property, index) => (
              <div 
                key={property.id} 
                className="property-card group flex-shrink-0 w-80 bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
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
                    <button 
                      onClick={() => setSelectedProperty(property)}
                      className="flex items-center text-primary hover:text-primary-hover transition-colors font-medium"
                    >
                      <Eye size={16} className="mr-2" />
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de detalles */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-card p-4 border-b border-border flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">{selectedProperty.title}</h2>
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Imagen principal */}
                  <div className="space-y-4">
                    <img 
                      src={selectedProperty.image} 
                      alt={selectedProperty.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <img 
                      src={selectedProperty.interior} 
                      alt="Interior"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Detalles */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Bed size={20} className="text-primary mr-2" />
                          <span className="font-semibold">Habitaciones</span>
                        </div>
                        <span className="text-2xl font-bold">{selectedProperty.bedrooms || 'N/A'}</span>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Bath size={20} className="text-primary mr-2" />
                          <span className="font-semibold">Baños</span>
                        </div>
                        <span className="text-2xl font-bold">{selectedProperty.bathrooms || 'N/A'}</span>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Car size={20} className="text-primary mr-2" />
                          <span className="font-semibold">Estacionamiento</span>
                        </div>
                        <span className="text-2xl font-bold">{selectedProperty.parking || 'N/A'}</span>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Calendar size={20} className="text-primary mr-2" />
                          <span className="font-semibold">Año</span>
                        </div>
                        <span className="text-2xl font-bold">{selectedProperty.year}</span>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Características</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedProperty.features.map((feature: string, index: number) => (
                          <li key={index} className="text-sm text-muted-foreground">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{selectedProperty.price}</span>
                    </div>
                  </div>
                </div>
                
                {/* Mapa */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedProperty.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                
                {/* Información adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ubicación</h4>
                    <p className="text-muted-foreground">{selectedProperty.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Área</h4>
                    <p className="text-muted-foreground">{selectedProperty.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;