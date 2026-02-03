import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Youtube, LucideIcon } from "lucide-react";
import logoPropostes from "@/assets/logo-propostes.png";
import { COMPANY, CONTACT, SOCIAL, getYearsInBusiness } from "@/config";

const socialLinks: { href: string; icon: LucideIcon; label: string }[] = [
  { href: SOCIAL.facebook, icon: Facebook, label: "Facebook" },
  { href: SOCIAL.instagram, icon: Instagram, label: "Instagram" },
  { href: SOCIAL.youtube, icon: Youtube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 md:py-10 pb-[calc(3rem+env(safe-area-inset-bottom))] md:pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 mb-6">
          {/* Company Info - Left */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start md:items-center text-left md:text-center">
            <img
              src={logoPropostes}
              alt={COMPANY.name}
              className="h-16 w-auto brightness-0 invert mb-3"
            />
            <div className="flex gap-2 mb-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {COMPANY.description}. Há mais de {getYearsInBusiness()} anos oferecendo soluções para construção civil.
            </p>
          </div>

          {/* Contact Info - Center */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col items-start md:items-center text-left md:text-center">
            <h4 className="font-semibold text-lg mb-4">Contatos e Localização</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {CONTACT.phones.map((phone, index) => (
                    <span key={phone.number}>
                      <a href={phone.href} className="hover:text-secondary transition-colors">{phone.number}</a>
                      {index < CONTACT.phones.length - 1 && " | "}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-secondary flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {CONTACT.whatsapp.map((whats, index) => (
                    <span key={whats.number}>
                      <a href={whats.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">{whats.number}</a>
                      {index < CONTACT.whatsapp.length - 1 && " | "}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <a href={CONTACT.email.href} className="text-white/70 text-sm hover:text-secondary transition-colors">
                  {CONTACT.email.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href={CONTACT.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-secondary transition-colors leading-tight"
                >
                  {CONTACT.address.street}, {CONTACT.address.neighborhood}<br />
                  {CONTACT.address.city}, {CONTACT.address.state}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Right */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col items-start md:items-center text-left md:text-center">
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="/#inicio" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/#produtos" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/sobre-nos" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/calculadora" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Calculadora
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido em {COMPANY.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
