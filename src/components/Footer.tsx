export default function Footer() {
  return (
    <footer className="bg-muted py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Voluntarios Bahía - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
} 