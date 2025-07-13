import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import anime from 'animejs';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.contact-title',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutQuart'
            });

            anime({
              targets: '.contact-form',
              opacity: [0, 1],
              translateX: [-50, 0],
              duration: 1000,
              delay: 300,
              easing: 'easeOutQuart'
            });

            anime({
              targets: '.contact-info',
              opacity: [0, 1],
              translateX: [50, 0],
              duration: 1000,
              delay: 500,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    // Simular envío del formulario
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto",
    });

    // Limpiar formulario
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola BITAFAM, estoy interesado en sus servicios de construcción y propiedades.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="contact-title text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Estamos aquí para ayudarte a hacer realidad tu proyecto de construcción
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="contact-form opacity-0">
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-hero">
                  <Send size={20} className="mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="contact-info opacity-0 space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+593 99 123 4567</p>
                    <p className="text-muted-foreground">+593 2 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@bitafam.com</p>
                    <p className="text-muted-foreground">ventas@bitafam.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Oficina</h4>
                    <p className="text-muted-foreground">Av. Principal 123,</p>
                    <p className="text-muted-foreground">Centro de la Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horarios</h4>
                    <p className="text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sáb: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de WhatsApp */}
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              <MessageSquare size={20} className="mr-2" />
              Chatear por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;