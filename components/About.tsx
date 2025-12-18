import { motion } from "motion/react"
import { useInView } from "@/hooks/useInView"
import { MapPin, Camera, Heart, Compass } from "lucide-react"

export function About() {
  const { ref, isInView } = useInView()

  const highlights = [
    {
      icon: MapPin,
      title: "Localização",
      description: "Hamburgo, disponível mundialmente com prazo de entrega de 3 meses.",
    },
    {
      icon: Camera,
      title: "Experiência",
      description: "18 anos de paixão pela fotografia desde os 10 anos de idade.",
    },
    {
      icon: Heart,
      title: "Estilo",
      description: "Autêntico • Natural • Mágico",
    },
    {
      icon: Compass,
      title: "Paixão",
      description: "Amante da natureza e de viagens",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?w=800"
                alt="Paula Stern"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Conheça Paula Stern
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Aos 28 anos, já faz quase duas décadas que capturo os momentos mais preciosos da vida. O que começou
                como um fascínio infantil pela minha primeira câmera aos 10 anos se transformou em uma paixão para a
                vida toda.
              </p>
              <p>
                Sediada na bela cidade de Hamburgo, especializo-me em criar imagens autênticas, naturais e imbuídas de
                um toque de magia.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                      <item.icon className="w-5 h-5 text-neutral-400" />
                    </motion.div>
                    <h4 className="text-sm sm:text-base font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-neutral-50 border-l-4 border-neutral-300"
            >
              <p className="text-neutral-600 italic leading-relaxed text-sm sm:text-base">
                "Adoro a natureza e viajar — sempre com uma câmera na mão. Há algo de mágico em descobrir novos lugares
                e capturar a beleza única de cada canto do mundo."
              </p>
            </motion.div>

            {/* New Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Experiência", value: "18 anos" },
                { label: "Projetos", value: "500+" },
                { label: "Clientes", value: "300+" },
                { label: "Localização", value: "Hamburgo" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="border-l-2 border-primary pl-4"
                >
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="text-lg sm:text-xl font-semibold text-foreground">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
