import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            opacity: [null, Math.random() * 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Hero Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <img
          src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU3ODIyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Magnetic Cursor Effect */}
      <motion.div
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Content */}
      <motion.div 
        className="relative h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="text-center text-white px-4">
          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring' }}
            className="mb-6 perspective-1000"
          >
            Capturando momentos únicos com autenticidade
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Transformo emoções em imagens que contam histórias
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, type: 'spring', stiffness: 200 }}
            onClick={scrollToGallery}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 30px rgba(255,255,255,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-all relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors">
              Veja meu portfólio
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToGallery}
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.2 }}
          className="text-white"
        >
          <ChevronDown className="w-10 h-10" />
        </motion.button>
      </motion.div>
    </section>
  );
}