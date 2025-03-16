import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  className?: string;
}

const WhatsAppButton = ({ phoneNumber, message, className = "" }: WhatsAppButtonProps) => {
  // No procesar si el número está vacío
  if (!phoneNumber || phoneNumber.trim() === "") {
    return null;
  }
  
  const formattedNumber = phoneNumber.replace(/\D/g, ""); // Remueve caracteres no numéricos
  const encodedMessage = encodeURIComponent(message || "Hola, ¿cómo estás?");
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full"
    >
      <Button 
        size="sm"
        variant="outline"
        className={`w-full flex items-center justify-center gap-1.5 bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:text-green-800 hover:border-green-300 ${className}`}
      >
        <MessageSquare className="h-3.5 w-3.5" />
        <span className="text-xs sm:text-sm">WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
