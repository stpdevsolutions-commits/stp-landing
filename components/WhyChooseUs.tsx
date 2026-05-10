"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "🏆",
    title: "Experiencia Comprobada",
    description:
      "Nuestro equipo cuenta con una trayectoria sólida en proyectos de gran escala en el sector eléctrico, electromecánico y de construcción en República Dominicana.",
    highlight: "30+ años",
    highlightLabel: "de trayectoria",
  },
  {
    icon: "🛡️",
    title: "Calidad y Seguridad",
    description:
      "Cumplimiento estricto de normas nacionales e internacionales en cada proyecto. Procesos auditados que garantizan la integridad de las instalaciones y la seguridad de las personas.",
    highlight: "ISO",
    highlightLabel: "estándares aplicados",
  },
  {
    icon: "💡",
    title: "Innovación Constante",
    description:
      "Incorporamos tecnologías de última generación en cada solución. Desde sistemas de monitoreo inteligente hasta materiales de vanguardia para maximizar la eficiencia.",
    highlight: "Tech",
    highlightLabel: "de vanguardia",
  },
  {
    icon: "🌿",
    title: "Compromiso Sostenible",
    description:
      "Diseñamos proyectos orientados a reducir costos operativos e impacto ambiental. La sostenibilidad no es una opción, es el fundamento de cada decisión técnica.",
    highlight: "Verde",
    highlightLabel: "por diseño",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1B8B5F] bg-[#1B8B5F]/10 rounded-full mb-4 uppercase tracking-wider">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
            Los pilares de nuestra propuesta de valor
          </h2>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Cada proyecto que ejecutamos refleja nuestro compromiso con la excelencia técnica y el bienestar de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6 p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#1B8B5F]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1B8B5F]/15 to-[#1E3A5F]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-[#1E3A5F]">{pillar.title}</h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold text-[#1B8B5F]">{pillar.highlight}</div>
                    <div className="text-xs text-[#718096]">{pillar.highlightLabel}</div>
                  </div>
                </div>
                <p className="text-[#718096] text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-[#1E3A5F] to-[#1B8B5F] p-8 sm:p-10 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Nuestro equipo está listo para evaluar tu caso y ofrecerte la solución más eficiente y económica.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#1E3A5F] font-bold rounded-xl hover:bg-[#F8F9FA] transition-colors shadow-lg"
          >
            Solicitar consulta gratuita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
