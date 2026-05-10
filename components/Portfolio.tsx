"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    icon: "🏖️",
    title: "Villa Playa Nueva Romana",
    category: "Sistemas Eléctricos",
    categoryColor: "#f59e0b",
    description:
      "Diseño eléctrico integral, estructural y supervisión de obra en villa residencial de lujo en Playa Nueva Romana. Sistemas de baja y media tensión.",
    highlights: ["Diseño eléctrico", "Diseño estructural", "Supervisión de obra"],
    bgGradient: "from-amber-400/20 to-amber-600/10",
  },
  {
    icon: "☀️",
    title: "Planta Fotovoltaica 240 KWp",
    category: "Energías Renovables",
    categoryColor: "#1B8B5F",
    description:
      "Diseño e instalación de planta solar fotovoltaica de 240 KWp para la Cruz Roja Dominicana. Reducción significativa de costos energéticos institucionales.",
    highlights: ["240 KWp instalados", "Cruz Roja Dominicana", "Monitoreo remoto"],
    bgGradient: "from-green-400/20 to-green-600/10",
  },
  {
    icon: "⚡",
    title: "Generador Eléctrico 200 KW",
    category: "Sistemas de Potencia",
    categoryColor: "#1E3A5F",
    description:
      "Instalación integral de generador eléctrico de 200 KW, incluyendo tableros de control, sistema de transferencia automática y puesta en servicio completa.",
    highlights: ["200 KW de potencia", "ATS automático", "Instalación integral"],
    bgGradient: "from-blue-400/20 to-blue-600/10",
  },
  {
    icon: "⛪",
    title: "Ampliación Iglesia",
    category: "Obras Civiles",
    categoryColor: "#7c3aed",
    description:
      "Proyecto de ampliación con infraestructura electromecánica compleja, incluyendo instalación de transformador pad mounted de 225 KVA y sistema eléctrico integral.",
    highlights: ["Transformador 225 KVA", "Pad mounted", "Electromecánica compleja"],
    bgGradient: "from-purple-400/20 to-purple-600/10",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proyectos" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1B8B5F] bg-[#1B8B5F]/10 rounded-full mb-4 uppercase tracking-wider">
            Casos de éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
            Proyectos que hablan por sí solos
          </h2>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Una selección de nuestros proyectos más destacados en diferentes sectores y categorías de servicio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Card header with gradient */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {project.icon}
                </span>
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                    style={{ backgroundColor: project.categoryColor }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">{project.title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 text-xs font-medium bg-[#F8F9FA] text-[#2D3748] rounded-lg border border-[#E2E8F0]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center p-6 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]"
        >
          <p className="text-[#718096] text-sm">
            Estos proyectos son solo una muestra de nuestro portafolio.
            <button
              onClick={() => {
                const el = document.querySelector("#contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#1B8B5F] font-semibold ml-1 hover:underline"
            >
              Contáctanos para ver más casos de éxito →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
