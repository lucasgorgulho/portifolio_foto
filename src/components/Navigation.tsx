import { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Camera className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
              </motion.div>
              <motion.span 
                className={`tracking-wider relative ${isScrolled ? 'text-black' : 'text-white'}`}
                whileHover={{ letterSpacing: '0.2em' }}
              >
                FOTOGRAFIA
              </motion.span>
              
              {/* Underline Animation */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className={`transition-colors relative ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 bg-white md:hidden w-3/4 max-w-sm shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center justify-center flex-1 gap-8 pb-20">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      whileHover={{ 
                        scale: 1.1,
                        x: 10,
                        color: '#9333ea',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="text-black text-2xl relative"
                    >
                      {item.label}
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}