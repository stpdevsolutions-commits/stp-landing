"use client";

import { type Variants, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "⚡",
    title: "Sistemas Eléctricos",
    description:
      "Diseño, instalación y mantenimiento de sistemas eléctricos para sectores industrial, comercial y residencial. Cumplimiento estricto de normativas nacionales e internacionales.",
    tags: ["Industrial", "Comercial", "Residencial"],
    color: "from-amber-400/10 to-amber-600/5",
    accent: "#f59e0b",
  },
  {
    icon: "☀️",
    title: "Energías Renovables",
    description:
      "Soluciones fotovoltaicas de alta eficiencia: desde diseño y dimensionamiento hasta instalación y monitoreo. Reducción de costos energéticos con tecnología de vanguardia.",
    tags: ["Solar", "Fotovoltaico", "Eficiencia"],
    color: "from-[#1B8B5F]/10 to-[#1B8B5F]/5",
    accent: "#1B8B5F",
  },
  {
    icon: "🏗️",
    title: "Obras Civiles y Electromecánicas",
    description:
      "Proyectos civiles y electromecánicos adaptados a las necesidades específicas del cliente. Desde estructuras hasta sistemas integrados de infraestructura compleja.",
    tags: ["Obras civiles", "Electromecánica", "Infraestructura"],
    color: "from-[#1E3A5F]/10 to-[#1E3A5F]/5",
    accent: "#1E3A5F",
  },
  {
    icon: "📋",
    title: "Gestión y Supervisión Integral",
    description:
      "Readecuación y modernización de infraestructuras existentes. Gestión integral de proyectos: planificación, supervisión técnica y control de calidad en cada etapa.",
    tags: ["Supervisión", "Readecuación", "Gestión"],
    color: "from-purple-400/10 to-purple-600/5",
    accent: "#7c3aed",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1B8B5F] bg-[#1B8B5F]/10 rounded-full mb-4 uppercase tracking-wider">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
            Soluciones para cada necesidad
          </h2>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Ofrecemos un portafolio completo de servicios técnicos especializados, adaptados al sector industrial, comercial y residencial.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1E3A5F] mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="text-[#718096] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: `${service.accent}15`,
                      color: service.accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1B8B5F] text-[#1B8B5F] font-semibold rounded-xl hover:bg-[#1B8B5F] hover:text-white transition-all duration-300"
          >
            Consultar sobre un servicio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
