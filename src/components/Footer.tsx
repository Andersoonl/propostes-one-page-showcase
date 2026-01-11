import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-14 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Propostes</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              Fabricante de produtos pré-moldados em concreto de alta qualidade. 
              Há mais de 20 anos oferecendo soluções para construção civil em 
              Fortaleza e região.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white/60 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-white/60 hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-white/60 hover:text-primary transition-colors">
                  Clientes & Parceiros
                </a>
              </li>
              <li>
                <a href="#qualidade" className="text-white/60 hover:text-primary transition-colors">
                  Qualidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-white/60">
                  Av. Industrial, 1500<br />
                  Distrito Industrial, Fortaleza/CE<br />
                  CEP: 60000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+558532001234" className="text-white/60 hover:text-primary transition-colors">
                  (85) 3200-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:contato@propostes.com.br" className="text-white/60 hover:text-primary transition-colors">
                  contato@propostes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Propostes. Todos os direitos reservados.</p>
          <p>Desenvolvido com dedicação em Fortaleza/CE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
