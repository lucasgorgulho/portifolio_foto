import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Check } from 'lucide-react';

export function Services() {
  const { ref, isInView } = useInView();

  const services = [
    {
      title: 'Fotografia de casamento',
      subtitle: 'Cobertura completa do seu dia especial',
      image: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?w=800',
      description: 'Cobertura completa do seu dia especial, desde os preparativos até a última dança. Inclui ensaio fotográfico de noivado e edição completa.',
      features: [
        '6 a 10 horas de suporte',
        'Sessão fotográfica de noivado incluída',
        'Mais de 300 fotos editadas',
        'Galeria online e pen-drive',
        'Comunicado para impressão',
        'Segundo fotógrafo opcional (+€400)',
      ],
      price: '1.800',
      originalPrice: '2.200',
    },
    {
      title: 'Festas de aniversário',
      subtitle: 'Capture a alegria e a emoção de festas de aniversário',
      image: 'https://images.unsplash.com/photo-1765615202714-e9c809896e19?w=800',
      description: 'Capture a alegria e a emoção de festas de aniversário, comemorações de datas importantes e encontros familiares.',
      features: [
        '2 a 4 horas de acompanhamento',
        'Fotos espontâneas e posadas',
        'Mais de 100 fotos editadas',
        'Galeria online',
        'Entrega na mesma semana',
        'Retratos de família incluídos',
      ],
      price: '450',
      originalPrice: '650',
    },
    {
      title: 'Cerimônias comemorativas',
      subtitle: 'Fotografia respeitosa e digna para cerimônias memoriais',
      image: 'https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=800',
      description: 'Fotografia respeitosa e digna para cerimônias memoriais, celebrações de vida e eventos comemorativos.',
      features: [
        '2 a 3 horas de acompanhamento',
        'Fotografia discreta',
        'Mais de 50 fotos editadas',
        'Retratos de família',
        'Uma abordagem sensível',
        'Processamento rápido (3-5 dias)',
      ],
      price: '350',
      originalPrice: '500',
    },
    {
      title: 'Sessões fotográficas individuais',
      subtitle: 'Sessões fotográficas personalizadas',
      image: 'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?w=800',
      description: 'Sessões fotográficas personalizadas, criadas para atender às suas necessidades específicas. Retratos de família, ensaios de casal ou eventos especiais.',
      features: [
        'Sessão de 1 a 2 horas',
        'Localização à sua escolha (Hamburgo + 50 km)',
        'Abordagem personalizada',
        'Mais de 30 fotos editadas',
        'A consulta incluiu',
        'Possibilidade de várias combinações de roupas',
      ],
      price: '280',
      originalPrice: '400',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Serviços de fotografia</h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Desde momentos íntimos a grandes celebrações, ofereço uma gama de serviços fotográficos 
            concebidos para captar as suas memórias mais importantes com autenticidade e arte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white border border-neutral-200 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm">📷</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="mb-2 text-lg">{service.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm text-neutral-500">A partir de</span>
                    <span className="text-2xl">{service.price} €</span>
                  </div>
                  <div className="text-sm text-neutral-400 line-through">
                    Preço normal: {service.originalPrice} €
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-neutral-200 hover:bg-neutral-300 text-black transition-colors"
                >
                  Reserve já
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}