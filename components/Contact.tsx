import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    interes: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
    console.log('Intentando enviar a:', webhookUrl); // Debug log
    console.log('Datos del formulario:', formData); // Debug log

    if (!webhookUrl) {
      console.error('URL del Webhook no encontrada');
      setSubmitMessage('Error: No se ha configurado la URL del Webhook.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Respuesta del servidor:', response); // Debug log

      if (response.ok) {
        setSubmitMessage('Mensaje enviado exitosamente. Nos pondremos en contacto pronto.');
        setFormData({ nombre: '', correo: '', telefono: '', interes: '', mensaje: '' });
      } else {
        console.error('Error en la respuesta:', response.status, response.statusText);
        setSubmitMessage('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setSubmitMessage('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="py-24 bg-secondary text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-4 after:rounded-sm">
            Contacto Directo
          </h2>
          <p className="opacity-80 text-lg max-w-2xl mx-auto">
            Hable directamente con las ingenieras encargadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Details */}
          <div>
            <h3 className="text-3xl font-heading font-bold mb-6">LCgeoma S.A.S.</h3>
            <p className="opacity-80 mb-10 leading-relaxed">
              Ofrecemos soporte técnico y asesoría profesional en Bogotá y alrededores. Envíos nacionales disponibles.
            </p>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Líneas de Atención</h4>
                <p><a href="tel:+573213689906" className="hover:text-primary transition-colors">321 368 9906</a> (Ing. Laura)</p>
                <p><a href="tel:+57320555400" className="hover:text-primary transition-colors">320 555 400</a> (Ing. Anyi)</p>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-12">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Correo Corporativo</h4>
                <p><a href="mailto:LCgeoma@gmail.com" className="hover:text-primary transition-colors">LCgeoma@gmail.com</a></p>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/1AiXgj4yxZ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-secondary rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/573213689906" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-secondary rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://t.me/+573213689906" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-secondary rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-secondary p-10 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-heading font-bold mb-6">Solicitud de Asesoría</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Nombre Completo"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Correo Electrónico"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Teléfono"
                  required
                />
              </div>
              <div>
                <select
                  name="interes"
                  value={formData.interes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-600"
                  required
                >
                  <option value="">Interés Principal...</option>
                  <option value="Compra de Kit Hidropónico">Compra de Kit Hidropónico</option>
                  <option value="Diseño Estructural a Medida">Diseño Estructural a Medida</option>
                  <option value="Asesoría Técnica General">Asesoría Técnica General</option>
                </select>
              </div>
              <div>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  rows={4}
                  placeholder="Describa su requerimiento..."
                ></textarea>
              </div>
              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes('exitosamente') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded uppercase tracking-wide hover:bg-primary-dark transition-all shadow-lg shadow-green-600/30 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;