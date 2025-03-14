import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export default function Footer() {
  return (
    <footer className="bg-muted py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <a 
            href="https://linktr.ee/voluntariosbahia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-4 py-2 transition-colors"
          >
            <WhatsappIcon className="h-5 w-5 mr-2" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Voluntarios Bahía - Todos los derechos reservados
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Sitio desarrollado por <a href="https://linkedin.com/in/franciscoclarke" target="_blank" rel="noopener noreferrer" className="hover:underline">Francisco Clarke</a>
        </p>
      </div>
    </footer>
  );
} 