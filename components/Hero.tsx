import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-[90vh] mt-[60px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: 'saturate(1.25) blur(6px)'
        }}
      >
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-[1200px] px-6">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 leading-relaxed drop-shadow-lg text-white">
          Ingeniería para la <br className="hidden md:block" /> Vida Sostenible
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
          Aplicamos principios de ingeniería civil e hidráulica para integrar sistemas de cultivo hidropónico eficientes en viviendas urbanas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalogo"
            className="bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/40"
          >
            Ver Soluciones
          </a>
          <a
            href="#nosotras"
            className="bg-secondary text-white border border-white/20 px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-[#1a252f] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Conócenos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
