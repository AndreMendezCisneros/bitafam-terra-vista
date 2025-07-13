import { useEffect, useRef } from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import teamWork from '@/assets/team-work.jpg';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: CheckCircle,
      title: "Calidad",
      description: "Comprometidos con la excelencia en cada proyecto"
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cumplimos tiempos y especificaciones técnicas"
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Procesos claros y comunicación constante"
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicación total hacia nuestros clientes"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('fade-in-up');
              }, index * 200);
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
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conoce <span className="text-gradient">BITAFAM</span>
          </h2>
          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Más de 15 años construyendo confianza y transformando sueños en realidad
          </p>
        </div>

        {/* Historia y Misión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-foreground mb-6">Nuestra Historia</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desde 2008, BITAFAM ha sido pionera en el desarrollo inmobiliario de la región. 
              Comenzamos como una pequeña empresa familiar con el sueño de crear espacios que 
              transformen vidas y comunidades.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hoy somos reconocidos por nuestra experiencia en construcción, venta de propiedades 
              y servicios legales especializados, siempre manteniendo nuestros valores de 
              calidad, honestidad y compromiso.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Misión</h4>
                  <p className="text-muted-foreground">Crear espacios de calidad que mejoren la vida de las familias</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visión</h4>
                  <p className="text-muted-foreground">Ser la empresa constructora líder en la región</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <img 
              src={teamWork}
              alt="Equipo BITAFAM"
              className="w-full h-96 object-cover rounded-2xl shadow-[var(--shadow-card)]"
            />
          </div>
        </div>

        {/* Valores */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los principios que guían cada uno de nuestros proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="animate-on-scroll text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;