import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Map section IDs to their background colors
  // Note: These colors must match the background colors defined in the section components
  const getNavbarColor = () => {
    if (!scrolled && activeSection === 'inicio') return 'bg-transparent'; // Transparent at the very top

    switch (activeSection) {
      case 'inicio':
        return 'bg-white'; // Hero usually has an image, but let's default to white if scrolled
      case 'nosotras':
        return 'bg-gray-200';
      case 'concepto':
        return 'bg-white';
      case 'catalogo':
        return 'bg-white';
      case 'contacto':
        return 'bg-secondary text-white'; // Contact section is dark
      default:
        return 'bg-white';
    }
  };

  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
    } ${getNavbarColor()}`;

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Ingenieras', href: '#nosotras' },
    { name: 'Sistemas', href: '#concepto' },
    { name: 'Kits', href: '#catalogo' },
  ];

  return (
    <header className={navbarClasses}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-bold font-heading flex items-center gap-2 ${activeSection === 'contacto' ? 'text-white' : 'text-secondary'}`}>
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          LCgeoma
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold transition-colors text-[0.95rem] ${activeSection === 'contacto'
                  ? 'text-white/90 hover:text-white'
                  : 'text-secondary hover:text-primary'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-primary text-white px-6 py-2.5 rounded hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-green-500/30 text-sm font-bold uppercase tracking-wide"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl ${activeSection === 'contacto' ? 'text-white' : 'text-secondary'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-secondary font-semibold hover:text-primary py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded font-bold uppercase"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;