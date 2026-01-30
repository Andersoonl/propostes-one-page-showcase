import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoPropostes from "@/assets/Logo-propostes-cut.png";
import { SOCIAL } from "@/config";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre Nós", href: "/sobre-nos" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Se não estiver na página inicial, navegar para ela
    if (location.pathname !== "/") {
      navigate("/");
    }
    
    // Sempre rolar para o topo da página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // If it's an anchor link on the home page and we're already on home
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href === "/produtos") return location.pathname === "/produtos";
    if (href === "/sobre-nos") return location.pathname === "/sobre-nos";
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-[54px] md:h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleLogoClick}>
          <img 
            src={logoPropostes} 
            alt="Propostes - Soluções em Concreto" 
            className="h-6 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`relative font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink(link.href)
                  ? "text-secondary bg-secondary/10 shadow-sm"
                  : "text-muted-foreground hover:text-secondary hover:bg-secondary/5"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {isActiveLink(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" aria-hidden="true" />
              )}
            </Link>
          ))}
          {/* Instagram Icon */}
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-muted-foreground hover:text-secondary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden bg-background border-b border-border animate-fade-in"
          aria-label="Navegação mobile"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? "text-secondary bg-secondary/10"
                    : "text-muted-foreground hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Instagram Icon - Mobile */}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors duration-300"
              aria-label="Instagram"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
