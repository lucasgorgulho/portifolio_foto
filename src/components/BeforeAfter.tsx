import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Sparkles } from 'lucide-react';

export function BeforeAfter() {
  const { ref, isInView } = useInView();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-yellow-500 mx-auto" />
          </motion.div>

          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edição Profissional
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-neutral-600"
          >
            Veja o poder da pós-produção profissional. <span className="font-semibold">Arraste o controle</span> para comparar
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-4xl mx-auto aspect-video overflow-hidden select-none shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=1200"
            alt="Depois"
            className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* Before Image */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=1200"
              alt="Antes"
              className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-75 saturate-50"
            />
          </motion.div>

          {/* Slider */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
            style={{ left: `${sliderPosition}%` }}
            whileHover={{ width: '4px' }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={isDragging ? { scale: 1.1 } : {}}
            >
              <motion.div 
                className="flex gap-1"
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-0.5 h-6 bg-neutral-400" />
                <div className="w-0.5 h-6 bg-neutral-400" />
              </motion.div>
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full blur-xl opacity-50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Labels */}
          <motion.div 
            className="absolute top-4 left-4 px-4 py-2 bg-black/70 text-white backdrop-blur-sm"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            ANTES
          </motion.div>
          <motion.div 
            className="absolute top-4 right-4 px-4 py-2 bg-black/70 text-white backdrop-blur-sm"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            DEPOIS
          </motion.div>
        </motion.div>

        {/* Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-8 text-neutral-500 italic"
        >
          💡 Todas as fotos recebem tratamento profissional de cor, luz e contraste
        </motion.p>
      </div>
    </section>
  );
}