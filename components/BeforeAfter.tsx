"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"

export function BeforeAfter() {
  const { ref, isInView } = useInView()
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX : e.clientX
    const position = ((x - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Edição Profissional</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            Veja o poder da pós-produção. <span className="font-semibold">Arraste o controle</span> para comparar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video overflow-hidden select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <img
            src="https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=1200"
            alt="Depois"
            className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=1200"
              alt="Antes"
              className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-75 saturate-50"
            />
          </div>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-5 bg-foreground/40" />
                <div className="w-0.5 h-5 bg-foreground/40" />
              </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-xs sm:text-sm backdrop-blur-sm">
            ANTES
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 text-white text-xs sm:text-sm backdrop-blur-sm">
            DEPOIS
          </div>
        </motion.div>
      </div>
    </section>
  )
}
