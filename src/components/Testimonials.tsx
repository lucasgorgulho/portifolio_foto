import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Noiva',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      text: 'Fotos incríveis do nosso casamento! Capturou cada emoção perfeitamente. Recomendo muito!',
      rating: 5,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Carlos Mendes',
      role: 'Empresário',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      text: 'Profissional excepcional. As fotos corporativas ficaram impecáveis e entregues no prazo.',
      rating: 5,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Juliana Costa',
      role: 'Modelo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      text: 'Ensaio maravilhoso! Super atencioso e me deixou super confortável durante as fotos.',
      rating: 5,
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-neutral-100 rounded-full blur-2xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-neutral-100 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            Depoimentos
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-neutral-600"
          >
            O que meus clientes dizem sobre o trabalho
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 100, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 80,
              }}
              whileHover={{ 
                y: -20,
                scale: 1.05,
                rotateZ: index % 2 === 0 ? 3 : -3,
              }}
              className="bg-white p-8 text-center hover:shadow-2xl transition-all duration-500 relative group overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Quote Icon */}
              <motion.div
                className="absolute top-4 right-4 opacity-10"
                initial={{ rotate: 0, scale: 0 }}
                animate={isInView ? { rotate: 360, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5, type: 'spring' }}
              >
                <Quote className="w-12 h-12" />
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="relative mb-4 inline-block"
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Glow Ring */}
                <motion.div
                  className="absolute inset-0 bg-neutral-300 rounded-full blur-md opacity-0 group-hover:opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.img
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover relative z-10 border-4 border-white shadow-lg"
                />
              </motion.div>
              
              {/* Stars */}
              <motion.div 
                className="flex justify-center gap-1 mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                    }}
                  >
                    <Star className={`w-4 h-4 fill-yellow-400 stroke-yellow-400`} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-neutral-600 mb-4 italic relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                "{testimonial.text}"
              </motion.p>

              {/* Name */}
              <motion.p 
                className="mb-1 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.7 }}
              >
                {testimonial.name}
              </motion.p>

              {/* Role */}
              <motion.p 
                className="text-sm text-neutral-500 relative z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.8 }}
              >
                {testimonial.role}
              </motion.p>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}