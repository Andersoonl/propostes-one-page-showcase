import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/institucional/rgalizav- Propostes032023--240.jpg";
import logoPropostes from "@/assets/Logo-propostes-cut.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Otimizado para mobile e desktop */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center md:object-[left_top] md:scale-110 blur-sm"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Caixa de conteúdo */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-10 md:px-12 md:py-12 shadow-xl">
            {/* Logo */}
            <div
              className="mb-6 md:mb-8 opacity-0 animate-fade-up flex justify-center"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={logoPropostes}
                alt="Propostes - Soluções em Concreto"
                className="w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-md md:max-w-lg h-auto"
              />
            </div>

            <p
              className="text-lg md:text-xl text-navy-700 font-medium mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Fábrica de pré-moldados de concreto com qualidade certificada para sua obra.
              Pisos intertravados, blocos de concreto, postes, meio-fio, manilhas e soluções
              para obras residenciais, comerciais e industriais.
            </p>

            <a
              href="https://wa.me/551147190000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-navy-700 active:bg-navy-800 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] opacity-0 animate-fade-up min-h-11"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="md:hidden">Solicitar orçamento</span>
              <span className="hidden md:inline">Solicite seu orçamento com uma de nossas atendentes</span>
              <MessageCircle size={20} />
            </a>
          </div>
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
