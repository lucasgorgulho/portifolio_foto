"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { Mail, Phone, Instagram, MapPin, Send, MessageSquare, FileText, X, User } from "lucide-react"

export function Contact() {
  const { ref, isInView } = useInView()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
    date: "",
    location: "",
    photoCount: "",
    projectDetails: "",
  })

  const handleSubmit = (e: React.FormEvent, type: "contact" | "quote") => {
    e.preventDefault()
    alert(
      type === "contact"
        ? "Obrigado pelo contato! Retornaremos em breve."
        : "Solicitação de orçamento enviada! Em breve retornaremos.",
    )
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceType: "",
      date: "",
      location: "",
      photoCount: "",
      projectDetails: "",
    })
    setIsContactModalOpen(false)
    setIsQuoteModalOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Vamos criar juntos?
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 sm:w-20 h-1 bg-[#eebbbb] mx-auto mb-6 sm:mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto text-white/80 mb-10 sm:mb-12 text-base sm:text-lg leading-relaxed px-4"
            >
              Entre em contato para dúvidas ou solicite um orçamento personalizado para seu projeto
            </motion.p>

            {/* Botões CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-white text-black font-semibold transition-all shadow-lg text-base sm:text-lg"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                Entre em Contato
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(238, 187, 187, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-[#eebbbb] text-gray-800 font-semibold transition-all shadow-lg text-base sm:text-lg"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                Faça seu Orçamento
              </motion.button>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {[
                { icon: Mail, label: "clicksdacah@gmail.com", href: "mailto:clicksdacah@gmail.com" },
                { icon: Phone, label: "(35) 99842-3458", href: "tel:+5535998423458" },
                { icon: Instagram, label: "@clicksdacah", href: "https://instagram.com/clicksdacah" },
                { icon: MapPin, label: "Minas Gerais, MG", href: "#" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all group"
                >
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white/90 group-hover:text-white transition-colors" />
                  <span className="text-xs sm:text-sm text-center break-all">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Contato */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsContactModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl rounded-2xl"
            >
              {/* Header with gradient */}
              <div className="bg-[#fbe3e3] text-gray-800 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-7 h-7 text-[#eebbbb]" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">Entre em Contato</h3>
                    <p className="text-sm text-gray-600">Estamos aqui para ajudar</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Form */}
              <div className="max-h-[calc(90vh-100px)] overflow-y-auto">
                <form onSubmit={(e) => handleSubmit(e, "contact")} className="p-6 space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Digite seu nome"
                      required
                      className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-lg focus:border-[#eebbbb] focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-lg focus:border-[#eebbbb] focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-lg focus:border-[#eebbbb] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como podemos te ajudar?"
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-lg focus:border-[#eebbbb] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 text-base font-semibold bg-[#eebbbb] text-gray-800 rounded-lg hover:bg-[#f6c8c7] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQuoteModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl rounded-2xl"
            >
              {/* Header com gradiente rosa */}
              <div className="bg-[#f6c8c7] text-gray-800 p-6 sm:p-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Solicitar Orçamento</h3>
                    <p className="text-sm sm:text-base text-white/90 mt-1">Planeje seu projeto conosco</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Form com scroll */}
              <div className="max-h-[calc(90vh-140px)] overflow-y-auto">
                <form onSubmit={(e) => handleSubmit(e, "quote")} className="p-6 sm:p-8 space-y-6">
                  {/* Dados pessoais */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-neutral-800 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#fbe3e3] rounded-lg flex items-center justify-center">
                        <User className="w-4 h-4 text-[#eebbbb]" />
                      </div>
                      Dados Pessoais
                    </h4>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">Nome completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome completo"
                        required
                        className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">E-mail *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Telefone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          required
                          className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Divisor */}
                  <div className="border-t border-neutral-200" />

                  {/* Detalhes do projeto */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-neutral-800 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#f9d6d5] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#eebbbb]" />
                      </div>
                      Detalhes do Projeto
                    </h4>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">Tipo de serviço *</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all bg-white"
                      >
                        <option value="">Selecione o tipo de serviço</option>
                        <option value="retrato">Ensaio/Retrato</option>
                        <option value="casamento">Casamento</option>
                        <option value="evento">Evento Corporativo</option>
                        <option value="corporativo">Fotografia Corporativa</option>
                        <option value="produto">Fotografia de Produto</option>
                        <option value="formatura">Formatura</option>
                        <option value="aniversario">Aniversário</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Data desejada *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Local do evento *</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Cidade/Estado"
                          required
                          className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">Quantidade de fotos</label>
                      <input
                        type="text"
                        name="photoCount"
                        value={formData.photoCount}
                        onChange={handleChange}
                        placeholder="Ex: 50 fotos editadas"
                        className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">Detalhes do projeto *</label>
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Conte mais sobre seu projeto, estilo desejado, quantidade de pessoas, etc."
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 text-base border-2 border-neutral-200 rounded-xl focus:border-[oklch(0.6_0.15_115)] focus:ring-2 focus:ring-[oklch(0.6_0.15_115/0.2)] focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Botão de envio */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 text-base sm:text-lg font-semibold bg-[#eebbbb] text-gray-800 rounded-xl hover:bg-[#f6c8c7] hover:shadow-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </motion.button>

                  <p className="text-xs text-center text-neutral-500">
                    Retornaremos em até 24 horas com um orçamento personalizado
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
