import React from "react";

const WhatsAppButton = ({ phoneNumber, message }: { phoneNumber: string; message: string }) => {
  const formattedNumber = phoneNumber.replace(/\D/g, ""); // Remueve caracteres no numéricos
  const encodedMessage = encodeURIComponent(message || "Hola, ¿cómo estás?");
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Enviar mensaje por WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppButton;
