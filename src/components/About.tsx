import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MapPin, Camera, Heart, Compass } from 'lucide-react';

export function About() {
  const { ref, isInView } = useInView();

  const highlights = [
    {
      icon: MapPin,
      title: 'Localização',
      description: 'Hamburgo, disponível mundialmente com prazo de entrega de 3 meses.',
    },
    {
      icon: Camera,
      title: 'Experiência',
      description: '18 anos de paixão pela fotografia desde os 10 anos de idade.',
    },
    {
      icon: Heart,
      title: 'Estilo',
      description: 'Autêntico • Natural • Mágico',
    },
    {
      icon: Compass,
      title: 'Paixão',
      description: 'Amante da natureza e de viagens',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-[3/4] bg-neutral-100 overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?w=800"
                alt="Paula Stern"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              Conheça Paula Stern
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-neutral-600 mb-8"
            >
              <p>
                Aos 28 anos, já faz quase duas décadas que capturo os momentos mais preciosos da vida. 
                O que começou como um fascínio infantil pela minha primeira câmera aos 10 anos se transformou 
                em uma paixão para a vida toda por contar histórias através da fotografia.
              </p>
              <p>
                Sediada na bela cidade de Hamburgo, especializo-me em criar imagens autênticas, naturais 
                e imbuídas de um toque de magia. Cada fotografia que tiro é uma oportunidade de capturar 
                não apenas a aparência das coisas, mas também a sensação que elas transmitem.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
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
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-5 h-5 text-neutral-400" />
                    </motion.div>
                    <h4 className="text-sm">{item.title}</h4>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8 p-6 bg-neutral-50 border-l-4 border-neutral-300"
            >
              <p className="text-neutral-600 italic">
                "Adoro a natureza e viajar — sempre com uma câmera na mão. Há algo de mágico 
                em descobrir novos lugares e capturar a beleza única de cada canto do mundo."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}