"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { X, ZoomIn } from "lucide-react"

type Category = "Todos" | "Retratos" | "Eventos" | "Paisagens" | "Produtos"

interface GalleryImage {
  id: number
  src: string
  category: Category
  alt: string
}

export function Gallery() {
  const { ref, isInView } = useInView()
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const categories: Category[] = ["Todos", "Retratos", "Eventos", "Paisagens", "Produtos"]

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=800",
      category: "Retratos",
      alt: "Retrato 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?w=800",
      category: "Retratos",
      alt: "Retrato 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?w=800",
      category: "Eventos",
      alt: "Evento 1",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1765628362654-e9c809896e19?w=800",
      category: "Eventos",
      alt: "Evento 2",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1675628362654-9d0be0179b6d?w=800",
      category: "Paisagens",
      alt: "Paisagem 1",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?w=800",
      category: "Paisagens",
      alt: "Paisagem 2",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      category: "Produtos",
      alt: "Produto 1",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?w=800",
      category: "Retratos",
      alt: "Retrato 3",
    },
  ]

  const filteredImages =
    selectedCategory === "Todos" ? images : images.filter((img) => img.category === selectedCategory)

  return (
    <>
      <section id="gallery" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Galeria</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="aspect-square overflow-hidden cursor-pointer bg-muted relative group"
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-neutral-400 transition-colors z-10"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.5, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 100 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
