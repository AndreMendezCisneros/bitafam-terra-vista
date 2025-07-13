import { Phone, MessageSquare } from 'lucide-react';

const FloatingContact = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola BITAFAM, estoy interesado en sus servicios.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+593991234567', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare size={24} />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={makeCall}
        className="group bg-primary hover:bg-primary-hover text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Llamar ahora"
      >
        <Phone size={24} />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Llamar
        </span>
      </button>
    </div>
  );
};

export default FloatingContact;