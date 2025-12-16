import React from 'react';
import { Founder } from '../types';

const foundersList: Founder[] = [
  {
    name: 'Laura Camila Bernate Gomez',
    role: 'Co-Fundadora & Gerente de Proyectos',
    degree: 'Ingeniera Civil',
    description: 'Experta en cálculo de redes hidráulicas para sistemas de riego automatizado. Laura garantiza que el flujo de nutrientes y la presión del agua sean óptimos en cada instalación.',
    image: '/assets/laura-profile.jpg',
    contactLink: '#contacto'
  },
  {
    name: 'Anyi Catalina Páez Camacho',
    role: 'Co-Fundadora & Directora de Operaciones',
    degree: 'Ingeniera Civil',
    description: 'Especialista en materiales sostenibles e integridad estructural. Anyi supervisa el montaje seguro de huertos verticales y su integración no invasiva en las estructuras de vivienda.',
    image: '/assets/anyi-profile.jpg',
    contactLink: '#contacto'
  }
];

const Founders: React.FC = () => {
  return (
    <section id="nosotras" className="py-24 bg-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-secondary mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-4 after:rounded-sm">
            Liderazgo Técnico
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            LCgeoma fusiona la precisión de la ingeniería civil con la biología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {foundersList.map((founder, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-10 text-center transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-light-gray"
              />
              <span className="block text-primary font-bold text-xs uppercase tracking-wider mb-1">
                {founder.role}
              </span>
              <span className="block text-secondary font-semibold text-sm opacity-80 mb-4">
                {founder.degree}
              </span>
              <h3 className="text-2xl font-heading font-bold mb-4">{founder.name}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {founder.description}
              </p>
              <a
                href={founder.contactLink}
                className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i> Contactar Ingeniera
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;