"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.querySelector("#servicios");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#1a3352] to-[#0f2340]" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1B8B5F] rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1B8B5F] rounded-full opacity-8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B8B5F]/20 border border-[#1B8B5F]/40 text-[#4ade80] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            República Dominicana · Desde 2023
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Soluciones Integrales en
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#34d399]">
              Electromecánica
            </span>{" "}
            y
            <br />
            Construcción
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <strong className="text-white">30+ años de experiencia</strong> acumulada del equipo + innovación de vanguardia. Referentes en diseño e implementación de soluciones integrales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1B8B5F] hover:bg-[#157a52] text-white font-semibold text-base rounded-xl shadow-lg shadow-[#1B8B5F]/30 hover:shadow-[#1B8B5F]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Cuéntanos tu proyecto
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver servicios
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "30+", label: "Años de experiencia" },
            { value: "100%", label: "Proyectos completados" },
            { value: "4", label: "Áreas de servicio" },
            { value: "RD", label: "Presencia nacional" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs">Desplázate</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
