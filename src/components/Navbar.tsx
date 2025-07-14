import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-2xl font-bold text-gradient">BITAFAM</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="fade-in-up nav-link"
              style={{ animationDelay: `0.4s` }}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="fade-in-up nav-link"
              style={{ animationDelay: `0.5s` }}
            >
              Propiedades
            </button>
            {/* Dropdown Servicios */}
            <div
              className="relative fade-in-up"
              style={{ animationDelay: `0.6s` }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1"
                type="button"
                tabIndex={0}
                onClick={() => scrollToSection('services')}
                onMouseDown={e => e.currentTarget.blur()}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Servicios
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-50 opacity-100 translate-y-0 pointer-events-auto transition-all">
                  <ul className="py-2 text-sm text-foreground">
                    <li><Link to="/servicios/venta-propiedades" className="w-full text-left px-4 py-2 hover:bg-primary/10 block">Venta de Propiedades</Link></li>
                    <li><Link to="/servicios/diseno-planos" className="w-full text-left px-4 py-2 hover:bg-primary/10 block">Diseño de Planos</Link></li>
                    <li><Link to="/servicios/construccion-obras" className="w-full text-left px-4 py-2 hover:bg-primary/10 block">Construcción de Obras</Link></li>
                    <li><Link to="/servicios/topografia-georreferenciacion" className="w-full text-left px-4 py-2 hover:bg-primary/10 block">Topografía y Georreferenciación</Link></li>
                    <li><Link to="/servicios/saneamiento-fisico-legal" className="w-full text-left px-4 py-2 hover:bg-primary/10 block">Saneamiento Físico Legal</Link></li>
                    <li><Link to="/servicios/regularizacion-terrenos" className="w-full text-left px-4 py-2 hover:bg-primary/10 block">Regularización de Terrenos</Link></li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="fade-in-up nav-link"
              style={{ animationDelay: `0.7s` }}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="fade-in-up nav-link"
              style={{ animationDelay: `0.8s` }}
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="fade-in-up nav-link"
              style={{ animationDelay: `0.9s` }}
            >
              Contacto
            </button>
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