import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-concrete.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p 
            className="text-primary font-medium text-lg md:text-xl mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Propostes — Qualidade em Concreto
          </p>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Conheça Nossos
            <span className="block text-primary">Produtos</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Soluções em pré-moldados de concreto com qualidade certificada. 
            Pisos, blocos, postes e muito mais para sua obra.
          </p>
          
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 bg-primary hover:bg-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-orange hover:-translate-y-1 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Veja Produtos
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
