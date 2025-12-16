import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: 'Estudio Técnico',
    description: 'Revisión de cargas, puntos hidráulicos y eléctricos disponibles en el inmueble.',
    icon: 'fa-clipboard-check'
  },
  {
    id: 2,
    title: 'Diseño & Cálculo',
    description: 'Dimensionamiento de bombas y tuberías según el volumen de cultivo deseado.',
    icon: 'fa-drafting-compass'
  },
  {
    id: 3,
    title: 'Instalación Civil',
    description: 'Montaje limpio de estructuras, fijaciones y puesta en marcha del sistema de riego.',
    icon: 'fa-tools'
  },
  {
    id: 4,
    title: 'Entrega y Control',
    description: 'Verificación de parámetros (pH/EC) y capacitación técnica al usuario final.',
    icon: 'fa-chart-line'
  }
];

const Implementation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-secondary mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-4 after:rounded-sm">
            Proceso de Implementación
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Metodología estructurada para garantizar funcionalidad y estética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] text-center border-b-4 border-transparent hover:border-primary hover:-translate-y-2 transition-all duration-300 group"
            >
              <span className="absolute top-2 right-4 text-6xl font-bold text-primary/10 select-none group-hover:text-primary/20 transition-colors">
                0{step.id}
              </span>
              <i className={`fas ${step.icon} text-4xl text-primary mb-6 relative z-10`}></i>
              <h4 className="text-xl font-heading font-bold text-secondary mb-3 relative z-10">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Implementation;