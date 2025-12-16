import React, { useState, useEffect } from 'react';

const PromoModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal after 1 second
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                {/* Content */}
                <div className="text-center">
                    {/* Header Image/Color */}
                    {/* Header Image/Color */}
                    <div className="h-40 relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                            <div className="text-center text-white p-4">
                                <i className="fas fa-gift text-5xl mb-2 animate-bounce-slow drop-shadow-md"></i>
                                <h4 className="font-bold text-lg uppercase tracking-wider drop-shadow-md">Oferta Especial</h4>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                            ¡Oferta de Lanzamiento!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Aprovecha un <span className="font-bold text-primary text-xl">20% DE DESCUENTO</span> en nuestros kits hidropónicos.
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
                            <ul className="text-left space-y-2 text-sm text-gray-600">
                                <li className="flex justify-between">
                                    <span>Kit Mesa de Cultivo</span>
                                    <span className="font-bold text-primary">$280.000</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Módulo Vertical NFT</span>
                                    <span className="font-bold text-primary">$680.000</span>
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#catalogo"
                            onClick={closeModal}
                            className="block w-full bg-primary text-white font-bold py-3 rounded-lg uppercase tracking-wide hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Ver Ofertas
                        </a>

                        <button
                            onClick={closeModal}
                            className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline"
                        >
                            No, gracias
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;
