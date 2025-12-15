import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Check, ThumbsUp } from 'lucide-react';

export function Pricing() {
  const { ref, isInView } = useInView();

  const included = [
    'Edição profissional de todas as fotos',
    'Arquivos de alta resolução',
    'Galeria online por 1 ano',
    'Autorização para impressão',
    'Como chegar em Hamburgo',
  ];

  const additional = [
    'Deslocamentos fora de Hamburgo: €0,50/km',
    'Viagens internacionais: preço calculado de acordo com o custo',
    'Processamento expresso: ~€150',
    'Horas adicionais: €0 €/hora',
    'Impressões de alta qualidade: sob encomenda',
  ];

  return (
    <section className="py-24 px-4 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Preços transparentes</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-6 h-6 text-neutral-600" />
              <h3>Incluído no preço:</h3>
            </div>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-neutral-600"
                >
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Costs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <ThumbsUp className="w-6 h-6 text-neutral-600" />
              <h3>Custos adicionais:</h3>
            </div>
            <ul className="space-y-3">
              {additional.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-neutral-600"
                >
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border-2 border-neutral-300 hover:border-neutral-400 text-black transition-all"
          >
            Agende uma consulta gratuita.
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
