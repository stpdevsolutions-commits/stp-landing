"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    icon: "🏗️",
    specialty: "Ingeniería Civil",
    experience: "20+",
    experienceUnit: "años",
    competencies: ["Estructuras", "Geotecnia", "Obras hidráulicas", "Supervisión"],
    description: "Especialista en diseño estructural y gestión de obras civiles de alta complejidad.",
  },
  {
    icon: "⚡",
    specialty: "Ingeniería Eléctrica",
    experience: "25+",
    experienceUnit: "años",
    competencies: ["Alta tensión", "Automatización", "Protecciones", "Normativas NEC"],
    description: "Experto en sistemas eléctricos industriales, comerciales y de generación.",
  },
  {
    icon: "⚙️",
    specialty: "Ingeniería Electromecánica",
    experience: "35+",
    experienceUnit: "años",
    competencies: ["Transformadores", "Generadores", "HVAC", "Energía renovable"],
    description: "Trayectoria en proyectos de gran escala: potencia, climatización y electromecánica integral.",
  },
  {
    icon: "📊",
    specialty: "Gestión de Proyectos",
    experience: "20+",
    experienceUnit: "años",
    competencies: ["PMI", "Presupuesto", "Planificación", "Control de calidad"],
    description: "Coordinación y dirección de proyectos multidisciplinarios desde el diseño hasta la entrega.",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipo" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1B8B5F] bg-[#1B8B5F]/10 rounded-full mb-4 uppercase tracking-wider">
            Nuestro equipo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
            Especialistas con trayectoria comprobada
          </h2>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Nuestro equipo multidisciplinario combina décadas de experiencia práctica con conocimiento técnico de alto nivel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.specialty}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] hover:shadow-xl hover:border-[#1B8B5F]/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#1B8B5F] flex items-center justify-center text-2xl shadow-md">
                  {member.icon}
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#1B8B5F]">{member.experience}</span>
                  <p className="text-xs text-[#718096]">{member.experienceUnit}</p>
                </div>
              </div>

              <h3 className="text-base font-bold text-[#1E3A5F] mb-2">{member.specialty}</h3>
              <p className="text-[#718096] text-xs leading-relaxed mb-4">{member.description}</p>

              <div className="space-y-1.5">
                {member.competencies.map((competency) => (
                  <div key={competency} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1B8B5F] flex-shrink-0" />
                    <span className="text-xs text-[#2D3748] font-medium">{competency}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 text-center text-sm text-[#718096]"
        >
          Equipo complementado por técnicos especializados, supervisores de campo y personal de apoyo con certificaciones vigentes.
        </motion.p>
      </div>
    </section>
  );
}
