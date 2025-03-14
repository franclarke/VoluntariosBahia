export default function Footer() {
  return (
    <footer className="bg-muted py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        
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