import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Link href="/" className="text-2xl font-bold">
          Voluntarios Bahía
        </Link>
      </div>
    </header>
  );
} 