import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";
import logoPropostes from "@/assets/logo-propostes.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-14 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <img 
                src={logoPropostes} 
                alt="Propostes" 
                className="h-40 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              Fabricante de produtos pré-moldados em concreto de alta qualidade. 
              Há mais de 30 anos oferecendo soluções para construção civil em 
              Fortaleza e região.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/propostes/?locale=pt_BR" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/propostes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/watch?v=ckS5waT7xk0" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white/60 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-white/60 hover:text-secondary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/sobre-nos" className="text-white/60 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contatos e Localização</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/60">
                  <a href="tel:+558534634578" className="hover:text-secondary transition-colors">(85) 3463-4578</a>
                  {" | "}
                  <a href="tel:+558534634580" className="hover:text-secondary transition-colors">(85) 3463-4580</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/60">
                  <a href="https://wa.me/5585999066947" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">(85) 99906-6947</a>
                  {" | "}
                  <a href="https://wa.me/5585981889898" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">(85) 98188-9898</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a href="mailto:comercial@propostes.com.br" className="text-white/60 hover:text-secondary transition-colors">
                  comercial@propostes.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Via+de+Ligação+I+-+689+Distrito+Industrial+III,+Maracanaú,+CE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Loja e Fábrica - Via de Ligação I - 689<br />
                  Distrito Industrial III, Maracanaú, CE
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
