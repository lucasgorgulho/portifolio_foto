import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { ref, isInView } = useInView();
  const [formType, setFormType] = useState<'contact' | 'quote'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: '',
    date: '',
    location: '',
    photoCount: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Retornaremos em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType: '',
      date: '',
      location: '',
      photoCount: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactItems = [
    { icon: Mail, label: 'contato@fotografia.com', href: 'mailto:contato@fotografia.com', color: 'from-red-500 to-orange-500' },
    { icon: Phone, label: '(11) 99999-9999', href: 'tel:+5511999999999', color: 'from-green-500 to-teal-500' },
    { icon: Instagram, label: '@fotografia', href: 'https://instagram.com', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, label: 'São Paulo, SP', href: '#', color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
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
            initial={{ opacity: 0, rotateY: 180 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            Entre em Contato
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
            Vamos conversar sobre seu próximo projeto
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Informações de Contato
            </motion.h3>
            
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    x: 15,
                    scale: 1.05,
                  }}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 text-neutral-600 hover:text-black transition-colors group"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-md opacity-0 group-hover:opacity-50`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <item.icon className="w-6 h-6 relative z-10" />
                  </motion.div>
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="mt-12 p-6 bg-neutral-50 border border-neutral-200 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-neutral-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h4 className="mb-4 relative z-10">Política de Serviço</h4>
              <ul className="space-y-2 text-neutral-600 text-sm relative z-10">
                {[
                  'Entrega em até 15 dias úteis',
                  'Todas as fotos com edição profissional',
                  'Direitos de uso para redes sociais inclusos',
                  'Reagendamento até 7 dias antes',
                  'Sinal de 30% para reserva da data',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex gap-4 mb-6">
              {['contact', 'quote'].map((type, index) => (
                <motion.button
                  key={type}
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onClick={() => setFormType(type as 'contact' | 'quote')}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 py-2 transition-all duration-300 relative overflow-hidden ${
                    formType === type
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-neutral-100 text-black hover:bg-neutral-200'
                  }`}
                >
                  {formType === type && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-black"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {type === 'contact' ? 'Contato' : 'Solicitar Orçamento'}
                  </span>
                </motion.button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: '#000' }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                />
              </motion.div>

              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefone"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                />
              </motion.div>

              {formType === 'quote' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                    >
                      <option value="">Tipo de serviço</option>
                      <option value="retrato">Ensaio/Retrato</option>
                      <option value="casamento">Casamento</option>
                      <option value="evento">Evento</option>
                      <option value="corporativo">Corporativo</option>
                      <option value="produto">Produto</option>
                    </motion.select>
                  </motion.div>

                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                    />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Local"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="photoCount"
                      value={formData.photoCount}
                      onChange={handleChange}
                      placeholder="Quantidade de fotos desejada"
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all"
                    />
                  </motion.div>
                </>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={formType === 'quote' ? 'Detalhes adicionais e preferências' : 'Sua mensagem'}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-all resize-none"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-black text-white hover:bg-neutral-800 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Enviar {formType === 'quote' ? 'Solicitação' : 'Mensagem'}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}