import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voluntarios Donaciones Bahía",
  description: "Plataforma para conectar voluntarios y personas necesitadas en Bahía Blanca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
