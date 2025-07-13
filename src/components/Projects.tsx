import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import { Calendar, MapPin, Users } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      image: property1,
      title: "Residencial Los Pinos",
      location: "Sector Norte, Ciudad",
      year: "2023",
      families: "45",
      description: "Desarrollo residencial completo con áreas verdes y recreación familiar"
    },
    {
      id: 2,
      image: property2,
      title: "Torres Vista Hermosa",
      location: "Centro de la Ciudad",
      year: "2022",
      families: "120",
      description: "Complejo de apartamentos modernos con vista panorámica"
    },
    {
      id: 3,
      image: property1,
      title: "Urbanización El Bosque",
      location: "Zona Residencial Este",
      year: "2021",
      families: "80",
      description: "Proyecto sustentable con espacios verdes y tecnología eco-amigable"
    },
    {
      id: 4,
      image: property2,
      title: "Conjunto Residencial Aurora",
      location: "Periferia Norte",
      year: "2020",
      families: "60",
      description: "Viviendas familiares con amplios espacios y seguridad 24/7"
    },
    {
      id: 5,
      image: property1,
      title: "Plaza Comercial Central",
      location: "Centro Comercial",
      year: "2019",
      families: "200+",
      description: "Centro comercial moderno que beneficia a toda la comunidad"
    },
    {
      id: 6,
      image: property2,
      title: "Condominios Las Flores",
      location: "Zona Residencial Sur",
      year: "2018",
      families: "35",
      description: "Exclusivo condominio con diseño arquitectónico contemporáneo"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.projects-title',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutQuart'
            });

            anime({
              targets: '.project-card',
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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="projects-title text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0">
            Proyectos <span className="text-gradient">Realizados</span>
          </h2>
          <p className="projects-title text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Más de 500 familias han confiado en nosotros para construir sus hogares de ensueño
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card opacity-0 group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-3 text-primary" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-3 text-primary" />
                    <span className="text-sm">Completado en {project.year}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users size={16} className="mr-3 text-primary" />
                    <span className="text-sm">{project.families} familias beneficiadas</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Familias Satisfechas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Proyectos Completados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;