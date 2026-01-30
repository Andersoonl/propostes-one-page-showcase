import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import logoPropostes from "@/assets/logo-propostes.png";
import { COMPANY, CONTACT, SOCIAL, getYearsInBusiness } from "@/config";

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
                alt={COMPANY.name}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              {COMPANY.description}.
              Há mais de {getYearsInBusiness()} anos oferecendo soluções para construção civil em
              {COMPANY.location} e região.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL.youtube}
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
                <a href="/#inicio" className="text-white/70 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/#produtos" className="text-white/70 hover:text-secondary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/sobre-nos" className="text-white/70 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/#clientes" className="text-white/70 hover:text-secondary transition-colors">
                  Clientes & Parceiros
                </a>
              </li>
              <li>
                <a href="/#qualidade" className="text-white/70 hover:text-secondary transition-colors">
                  Qualidade
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
                <span className="text-white/70">
                  {CONTACT.phones.map((phone, index) => (
                    <span key={phone.number}>
                      <a href={phone.href} className="hover:text-secondary transition-colors">{phone.number}</a>
                      {index < CONTACT.phones.length - 1 && " | "}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  {CONTACT.whatsapp.map((whats, index) => (
                    <span key={whats.number}>
                      <a href={whats.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">{whats.number}</a>
                      {index < CONTACT.whatsapp.length - 1 && " | "}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a href={CONTACT.email.href} className="text-white/70 hover:text-secondary transition-colors">
                  {CONTACT.email.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Loja e Fábrica - {CONTACT.address.street}<br />
                  {CONTACT.address.neighborhood}, {CONTACT.address.city}, {CONTACT.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido com dedicação em {COMPANY.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
