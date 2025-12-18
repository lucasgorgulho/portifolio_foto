"use client"

import { motion } from "motion/react"
import { useInView } from "@/hooks/useInView"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function Testimonials() {
  const { ref, isInView } = useInView()
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Noiva",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      text: "Fotos incríveis do nosso casamento! Capturou cada emoção perfeitamente. Recomendo muito!",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Empresário",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      text: "Profissional excepcional. As fotos corporativas ficaram impecáveis e entregues no prazo.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Modelo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      text: "Ensaio maravilhoso! Super atencioso e me deixou super confortável durante as fotos.",
      rating: 5,
    },
    {
      name: "Roberto Lima",
      role: "Cliente Corporativo",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      text: "Trabalho impecável nas fotos da nossa equipe. Profissionalismo e qualidade em cada detalhe.",
      rating: 5,
    },
    {
      name: "Mariana Santos",
      role: "Formanda",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      text: "Fotos da formatura ficaram lindas! Guardei cada momento especial graças ao trabalho dele.",
      rating: 5,
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Depoimentos</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            O que meus clientes dizem sobre o trabalho
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white border border-border shadow-lg hover:bg-muted transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white border border-border shadow-lg hover:bg-muted transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border p-6 sm:p-8 h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-border"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-base">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary stroke-primary" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed italic flex-grow">"{testimonial.text}"</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:hidden"
          >
            Deslize para ver mais →
          </motion.p>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
