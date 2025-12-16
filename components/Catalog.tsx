import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'mesa-cultivo',
    title: 'Kit Mesa de Cultivo',
    price: '$280.000 COP',
    originalPrice: '$350.000 COP',
    features: ['Capacidad: 6 Plantas', 'Sistema: Raíz Flotante', 'Material: Polímero resistente UV', 'Incluye: Kit de nutrición base'],
    image: '/assets/mesa-cultivo.jpg',
    badge: 'Básico',
    ctaLink: 'https://wa.me/573213689906?text=Hola%20Ingenieras,%20me%20interesa%20el%20Kit%20Mesa%20de%20Cultivo'
  },
  {
    id: 'vertical-nft',
    title: 'Módulo Vertical NFT',
    price: '$680.000 COP',
    originalPrice: '$850.000 COP',
    features: ['Capacidad: 24 Plantas', 'Estructura: PVC sanitario reforzado', 'Bomba: Sumergible silenciosa', 'Ideal para: Espacios reducidos'],
    image: '/assets/vertical-nft.jpg',
    badge: 'Vertical',
    ctaLink: 'https://wa.me/573213689906?text=Hola%20Ingenieras,%20me%20interesa%20el%20Modulo%20Vertical%20NFT'
  },
  {
    id: 'custom-project',
    title: 'Proyecto a Medida',
    price: 'Bajo Cotización',
    features: ['Diseño integrado a la vivienda', 'Automatización domótica', 'Cálculos estructurales incluidos', 'Iluminación técnica LED'],
    image: '/assets/custom-project.jpg',
    badge: 'Estructural',
    ctaLink: '#contacto',
    isSecondary: true
  }
];

const Catalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-secondary mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-4 after:rounded-sm">
            Kits Hidropónicos LCgeoma
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sistemas modulares diseñados bajo estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-sm uppercase tracking-wide">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold text-secondary mb-2">{product.title}</h3>

                <div className="mb-6">
                  {product.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400 line-through text-lg">{product.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">-20%</span>
                    </div>
                  )}
                  <p className="text-3xl font-bold text-primary">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 mt-1 font-medium">Oferta de Lanzamiento</p>
                  )}
                </div>

                <ul className="mb-8 flex-grow space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 pb-2 border-b border-gray-100 last:border-0 flex items-start">
                      <span className="mr-2 text-primary">•</span> {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={product.ctaLink}
                  className={`block text-center py-3 rounded font-bold uppercase tracking-wider text-sm transition-all shadow-md ${product.isSecondary
                    ? 'bg-secondary text-white hover:bg-[#1a252f]'
                    : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                >
                  {product.isSecondary ? 'Agendar Visita Técnica' : 'Solicitar Kit'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;