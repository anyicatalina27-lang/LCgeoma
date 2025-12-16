import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="concepto" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <div className="order-2 md:order-1">
            <img
              src="/assets/engineering-perspective.jpg"
              alt="Sistema Hidropónico NFT"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4 after:rounded-sm">
                Hidroponía: Perspectiva Ingenieril
              </h2>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Más allá de plantar, diseñamos <strong className="text-secondary">sistemas de recirculación cerrados</strong>.
              La hidroponía elimina la variable del suelo (geotecnia) y la reemplaza por una solución hidráulica controlada (nutrientes + agua).
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <i className="fas fa-water text-primary text-xl mt-1"></i>
                <span className="text-gray-700"><strong>Eficiencia Hidráulica:</strong> Reducción del 90% del consumo hídrico frente a métodos tradicionales.</span>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-hard-hat text-primary text-xl mt-1"></i>
                <span className="text-gray-700"><strong>Carga Estructural Ligera:</strong> Al no usar tierra pesada, nuestros sistemas son ideales para balcones y terrazas sin comprometer la losa.</span>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-solar-panel text-primary text-xl mt-1"></i>
                <span className="text-gray-700"><strong>Optimización Energética:</strong> Bombas de bajo consumo y aprovechamiento de luz natural.</span>
              </li>
            </ul>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
              <h4 className="text-lg font-bold font-heading text-secondary mb-2 flex items-center gap-2">
                <i className="fas fa-cogs"></i> Método Constructivo NFT
              </h4>
              <p className="text-sm text-gray-600">
                Implementamos la "Técnica de Película de Nutriente", calculando la pendiente exacta de la tubería para asegurar la oxigenación de raíces sin estancamientos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Concept;