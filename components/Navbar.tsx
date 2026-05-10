"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1B8B5F] to-[#1E3A5F] flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm tracking-tight">STP</span>
          </div>
          <div className="hidden sm:block">
            <p className={`font-bold text-sm leading-tight transition-colors ${isScrolled ? "text-[#1E3A5F]" : "text-white"}`}>
              Soluciones Técnicas
            </p>
            <p className={`text-xs leading-tight transition-colors ${isScrolled ? "text-[#1B8B5F]" : "text-[#86efac]"}`}>
              Profesionales
            </p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#1B8B5F] ${
                  isScrolled ? "text-[#2D3748]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#contacto")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B8B5F] text-white text-sm font-semibold hover:bg-[#157a52] transition-colors shadow-sm"
        >
          Cuéntanos tu proyecto
        </button>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-[#1E3A5F] hover:bg-[#E2E8F0]" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 mb-1 transition-all bg-current ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 mb-1 transition-all bg-current ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 transition-all bg-current ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-[#E2E8F0] shadow-lg"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-3 py-2.5 text-[#2D3748] font-medium rounded-lg hover:bg-[#F8F9FA] hover:text-[#1B8B5F] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNavClick("#contacto")}
                  className="w-full px-3 py-2.5 bg-[#1B8B5F] text-white font-semibold rounded-lg hover:bg-[#157a52] transition-colors"
                >
                  Cuéntanos tu proyecto
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
