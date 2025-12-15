import { Camera, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6" />
              <span className="tracking-wider">FOTOGRAFIA</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Capturando momentos únicos com autenticidade e paixão desde 2014.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@fotografia.com"
                className="hover:text-neutral-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>© 2024 Fotografia. Todos os direitos reservados.</p>
          <p className="mt-2">
            Todas as imagens são propriedade do fotógrafo e protegidas por direitos autorais.
          </p>
        </div>
      </div>
    </footer>
  );
}
