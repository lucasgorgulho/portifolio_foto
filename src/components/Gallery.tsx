import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import { X, ZoomIn } from 'lucide-react';

type Category = 'Todos' | 'Retratos' | 'Eventos' | 'Paisagens' | 'Produtos';

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
  alt: string;
}

export function Gallery() {
  const { ref, isInView } = useInView();
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const categories: Category[] = ['Todos', 'Retratos', 'Eventos', 'Paisagens', 'Produtos'];

  const images: GalleryImage[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1624403857559-45631afd84fc?w=800', category: 'Retratos', alt: 'Retrato 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?w=800', category: 'Retratos', alt: 'Retrato 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?w=800', category: 'Eventos', alt: 'Evento 1' },
    { id: 4, src: 'https://images.unsplash.com/photo-1765615202714-e9c809896e19?w=800', category: 'Eventos', alt: 'Evento 2' },
    { id: 5, src: 'https://images.unsplash.com/photo-1675628362654-9d0be0179b6d?w=800', category: 'Paisagens', alt: 'Paisagem 1' },
    { id: 6, src: 'https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?w=800', category: 'Paisagens', alt: 'Paisagem 2' },
    { id: 7, src: 'https://images.unsplash.com/photo-1719176010035-17729577d496?w=800', category: 'Produtos', alt: 'Produto 1' },
    { id: 8, src: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?w=800', category: 'Retratos', alt: 'Retrato 3' },
  ];

  const filteredImages = selectedCategory === 'Todos' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              Galeria
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-black hover:bg-neutral-200'
                }`}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="categoryBackground"
                    className="absolute inset-0 bg-black"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 10,
                    rotateZ: Math.random() * 4 - 2,
                  }}
                  onHoverStart={() => setHoveredImage(image.id)}
                  onHoverEnd={() => setHoveredImage(null)}
                  onClick={() => setSelectedImage(image)}
                  className="aspect-square overflow-hidden cursor-pointer bg-neutral-100 relative group"
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white flex items-center gap-2"
                    >
                      <ZoomIn className="w-5 h-5" />
                      <span>Ver detalhes</span>
                    </motion.div>
                  </motion.div>

                  {/* Border Animation */}
                  {hoveredImage === image.id && (
                    <motion.div
                      layoutId="imageBorder"
                      className="absolute inset-0 border-4 border-white pointer-events-none"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
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
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.5, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 180 }}
              transition={{ type: 'spring', stiffness: 100 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}