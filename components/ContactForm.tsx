"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, type ContactFormData } from "@/lib/validation";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Error al enviar el formulario.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Ocurrió un error inesperado. Por favor intenta nuevamente."
      );
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#2D3748] placeholder-[#A0AEC0] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#1B8B5F]/30 focus:border-[#1B8B5F] bg-white ${
      hasError
        ? "border-red-400 bg-red-50/30 focus:ring-red-400/20 focus:border-red-400"
        : "border-[#E2E8F0] hover:border-[#CBD5E0]"
    }`;

  return (
    <section id="contacto" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA text + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1B8B5F] bg-[#1B8B5F]/10 rounded-full mb-4 uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6 leading-tight">
              ¿Listo para tu{" "}
              <span className="text-[#1B8B5F]">próximo proyecto</span>?
            </h2>
            <p className="text-[#718096] text-lg leading-relaxed mb-10">
              Cuéntanos tu idea o necesidad. Nuestro equipo de especialistas analizará tu caso y te propondrá la solución más eficiente y adaptada a tu presupuesto.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "📞",
                  label: "Teléfonos",
                  value: "809-537-6566 / 809-350-9162",
                  href: "tel:+18095376566",
                },
                {
                  icon: "✉️",
                  label: "Correo",
                  value: "proyectos@stpsoluciones.com",
                  href: "mailto:proyectos@stpsoluciones.com",
                },
                {
                  icon: "📍",
                  label: "Dirección",
                  value: "Calle Bonanza #58, Loyola, Santo Domingo Oeste",
                  href: null,
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E2E8F0]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1B8B5F]/10 flex items-center justify-center text-lg flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#718096] font-medium mb-0.5">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-sm font-semibold text-[#1E3A5F] hover:text-[#1B8B5F] transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#1E3A5F]">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {["LinkedIn", "Instagram", "Facebook"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#718096] hover:text-[#1B8B5F] hover:border-[#1B8B5F]/30 transition-colors cursor-pointer"
                  title={social}
                >
                  {social === "LinkedIn" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social === "Instagram" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social === "Facebook" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#1B8B5F]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-[#1B8B5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">¡Mensaje enviado!</h3>
                    <p className="text-[#718096] mb-6 text-sm">
                      Hemos recibido tu consulta. Uno de nuestros especialistas te contactará en las próximas 24-48 horas hábiles.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-[#1B8B5F] text-sm font-semibold hover:underline"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <h3 className="text-lg font-bold text-[#1E3A5F] mb-6">Envía tu consulta</h3>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-1.5">
                        Nombre <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Tu nombre completo"
                        className={inputClass(!!errors.name)}
                        disabled={status === "loading"}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="tu@email.com"
                        className={inputClass(!!errors.email)}
                        disabled={status === "loading"}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-1.5">
                        Teléfono <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="809-XXX-XXXX"
                        className={inputClass(!!errors.phone)}
                        disabled={status === "loading"}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-1.5">
                        Mensaje <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Cuéntanos sobre tu proyecto o consulta..."
                        className={`${inputClass(!!errors.message)} resize-none`}
                        disabled={status === "loading"}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B8B5F] hover:bg-[#157a52] disabled:bg-[#1B8B5F]/60 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-[#1B8B5F]/20"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Consulta
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-[#A0AEC0]">
                      Tu información es confidencial y no será compartida con terceros.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
