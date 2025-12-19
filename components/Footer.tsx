import { Camera, Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5" />
              <span className="font-semibold tracking-wide">CLICKS DA CAH</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Capturando momentos únicos com autenticidade desde 2014.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-foreground transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contato</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>clicksdacah@gmail.com</li>
              <li>(35) 99842-3458</li>
              <li>Maria da Fé, MG</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/clicksdacah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a href="mailto:clicksdacah@gmail.com" className="hover:opacity-70 transition-opacity">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-xs sm:text-sm">
          <p>© 2025 ClicksDaCah. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
