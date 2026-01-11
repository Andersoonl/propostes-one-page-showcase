import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoPropostes from "@/assets/logo-propostes.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Clientes & Parceiros", href: "/#clientes" },
  { label: "Qualidade", href: "/#qualidade" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoPropostes} 
            alt="Propostes - Soluções em Concreto" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium transition-colors duration-200 ${
                isActiveLink(link.href)
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium transition-colors py-2 ${
                  isActiveLink(link.href)
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
