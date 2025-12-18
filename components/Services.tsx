import { motion } from "motion/react"
import { useInView } from "@/hooks/useInView"
import { Check } from "lucide-react"

export function Services() {
  const { ref, isInView } = useInView()

  const services = [
    {
      title: "Fotografia de casamento",
      subtitle: "Cobertura completa do seu dia especial",
      image: "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?w=800",
      description:
        "Cobertura completa do seu dia especial, desde os preparativos até a última dança. Inclui ensaio fotográfico de noivado e edição completa.",
      features: [
        "6 a 10 horas de suporte",
        "Sessão fotográfica de noivado incluída",
        "Mais de 300 fotos editadas",
        "Galeria online e pen-drive",
        "Comunicado para impressão",
        "Segundo fotógrafo opcional (+€400)",
      ],
      price: "1.800",
      originalPrice: "2.200",
    },
    {
      title: "Festas de aniversário",
      subtitle: "Capture a alegria e a emoção de festas de aniversário",
      image: "https://images.unsplash.com/photo-1765615202714-e9c809896e19?w=800",
      description:
        "Capture a alegria e a emoção de festas de aniversário, comemorações de datas importantes e encontros familiares.",
      features: [
        "2 a 4 horas de acompanhamento",
        "Fotos espontâneas e posadas",
        "Mais de 100 fotos editadas",
        "Galeria online",
        "Entrega na mesma semana",
        "Retratos de família incluídos",
      ],
      price: "450",
      originalPrice: "650",
    },
    {
      title: "Cerimônias comemorativas",
      subtitle: "Fotografia respeitosa e digna para cerimônias memoriais",
      image: "https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=800",
      description:
        "Fotografia respeitosa e digna para cerimônias memoriais, celebrações de vida e eventos comemorativos.",
      features: [
        "2 a 3 horas de acompanhamento",
        "Fotografia discreta",
        "Mais de 50 fotos editadas",
        "Retratos de família",
        "Uma abordagem sensível",
        "Processamento rápido (3-5 dias)",
      ],
      price: "350",
      originalPrice: "500",
    },
    {
      title: "Sessões fotográficas individuais",
      subtitle: "Sessões fotográficas personalizadas",
      image: "https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?w=800",
      description:
        "Sessões fotográficas personalizadas, criadas para atender às suas necessidades específicas. Retratos de família, ensaios de casal ou eventos especiais.",
      features: [
        "Sessão de 1 a 2 horas",
        "Localização à sua escolha (Hamburgo + 50 km)",
        "Abordagem personalizada",
        "Mais de 30 fotos editadas",
        "A consulta incluiu",
        "Possibilidade de várias combinações de roupas",
      ],
      price: "280",
      originalPrice: "400",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Serviços</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base leading-relaxed">
            Desde momentos íntimos a grandes celebrações, ofereço uma gama de serviços fotográficos profissionais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card border border-border overflow-hidden flex flex-col group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-auto">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl sm:text-3xl font-bold text-foreground">{service.price}€</span>
                    <span className="text-sm text-muted-foreground line-through">{service.originalPrice}€</span>
                  </div>

                  <button className="w-full py-2.5 sm:py-3 bg-[#eebbbb] text-gray-800 font-medium hover:bg-[#f6c8c7] transition-colors text-sm">
                    Reservar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
