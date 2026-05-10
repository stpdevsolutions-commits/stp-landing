import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STP - Soluciones Técnicas Profesionales | Electromecánica y Construcción",
  description:
    "Empresa dominicana especializada en sistemas eléctricos, energías renovables, obras civiles y electromecánicas. Más de 30 años de experiencia acumulada.",
  keywords:
    "electromecánica, construcción, energía solar, sistemas eléctricos, Santo Domingo, República Dominicana",
  openGraph: {
    title: "STP - Soluciones Técnicas Profesionales",
    description:
      "Soluciones integrales en electromecánica y construcción en República Dominicana.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
