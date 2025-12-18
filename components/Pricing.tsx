"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { Check, ThumbsUp } from "lucide-react"

export function Pricing() {
  const { ref, isInView } = useInView()

  const included = [
    "Edição profissional de todas as fotos",
    "Arquivos de alta resolução",
    "Galeria online por 1 ano",
    "Autorização para impressão",
    "Como chegar em Hamburgo",
  ]

  const additional = [
    "Deslocamentos fora de Hamburgo: €0,50/km",
    "Viagens internacionais: preço calculado de acordo com o custo",
    "Processamento expresso: ~€150",
    "Horas adicionais: €100/hora",
    "Impressões de alta qualidade: sob encomenda",
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Preços Transparentes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Incluído no preço
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-primary" />
              Custos adicionais
            </h3>
            <ul className="space-y-3">
              {additional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  )
}
