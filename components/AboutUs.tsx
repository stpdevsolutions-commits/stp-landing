"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1B8B5F] bg-[#1B8B5F]/10 rounded-full mb-4 uppercase tracking-wider">
              Quiénes somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6 leading-tight">
              Referentes en diseño e implementación de{" "}
              <span className="text-[#1B8B5F]">soluciones integrales</span>
            </h2>
            <p className="text-[#2D3748] text-lg leading-relaxed mb-6">
              Soluciones Técnicas Profesionales (STP) es una empresa dominicana fundada en 2023, conformada por un equipo de ingenieros y técnicos con más de 30 años de experiencia acumulada en electromecánica, sistemas eléctricos, energías renovables y obras civiles.
            </p>
            <p className="text-[#718096] leading-relaxed mb-8">
              Nos especializamos en ofrecer soluciones completas y personalizadas: desde el diseño inicial hasta la supervisión final, garantizando calidad, seguridad y eficiencia en cada proyecto. Operamos en todo el territorio nacional con un enfoque en la innovación sostenible.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📅", label: "Fundada", value: "2023" },
                { icon: "⚡", label: "Experiencia del equipo", value: "30+ años" },
                { icon: "🏆", label: "Proyectos destacados", value: "Múltiples sectores" },
                { icon: "🌿", label: "Enfoque", value: "Sostenibilidad" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0]"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-[#718096] font-medium">{item.label}</p>
                    <p className="text-sm font-semibold text-[#1E3A5F]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#1B8B5F] p-8 shadow-2xl">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#1B8B5F] flex items-center justify-center text-2xl flex-shrink-0">
                    🏗️
                  </div>
                  <div>
                    <p className="text-white font-semibold">Proyectos industriales</p>
                    <p className="text-white/70 text-sm">Desde planta fotovoltaica hasta generadores de gran escala</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#1B8B5F] flex items-center justify-center text-2xl flex-shrink-0">
                    🌱
                  </div>
                  <div>
                    <p className="text-white font-semibold">Energías renovables</p>
                    <p className="text-white/70 text-sm">Soluciones fotovoltaicas de alta eficiencia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#1B8B5F] flex items-center justify-center text-2xl flex-shrink-0">
                    🔧
                  </div>
                  <div>
                    <p className="text-white font-semibold">Obras civiles</p>
                    <p className="text-white/70 text-sm">Adaptadas a necesidades específicas del cliente</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/60 text-sm text-center italic">
                    "Transformamos desafíos técnicos en soluciones eficientes y sostenibles"
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B8B5F]/10 flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <p className="text-xs text-[#718096]">Certificación</p>
                  <p className="text-sm font-bold text-[#1E3A5F]">Normas internacionales</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
