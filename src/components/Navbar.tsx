import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// @ts-ignore
import anime from 'animejs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    anime({
      targets: '.nav-logo',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 800,
      delay: 200,
      easing: 'easeOutQuart'
    });

    anime({
      targets: '.nav-item',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 600,
      delay: anime.stagger(100, { start: 400 }),
      easing: 'easeOutQuart'
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="nav-logo opacity-0">
            <h1 className="text-2xl font-bold text-gradient">BITAFAM</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Inicio', id: 'hero' },
              { name: 'Propiedades', id: 'properties' },
              { name: 'Servicios', id: 'services' },
              { name: 'Nosotros', id: 'about' },
              { name: 'Proyectos', id: 'projects' },
              { name: 'Contacto', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-item nav-link opacity-0"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="flex flex-col space-y-4 py-4">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Propiedades', id: 'properties' },
                { name: 'Servicios', id: 'services' },
                { name: 'Nosotros', id: 'about' },
                { name: 'Proyectos', id: 'projects' },
                { name: 'Contacto', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 nav-link"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;