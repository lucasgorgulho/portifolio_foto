import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}