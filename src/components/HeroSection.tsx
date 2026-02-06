import { MessageCircle, Package, Calculator } from "lucide-react";
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
      <div className="relative z-10 container text-center px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Caixa de conteúdo */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-4 py-7 sm:px-6 sm:py-10 md:px-12 md:py-12 shadow-xl">
            {/* Logo */}
            <div
              className="mb-4 sm:mb-6 md:mb-8 opacity-0 animate-fade-up flex justify-center"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={logoPropostes}
                alt="Propostes - Soluções em Concreto"
                className="w-[65vw] sm:w-[55vw] md:w-[50vw] lg:w-[40vw] max-w-md md:max-w-lg h-auto"
              />
            </div>

            <p
              className="text-base sm:text-lg md:text-xl text-navy-700 font-medium mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Fábrica de pré-moldados de concreto com qualidade certificada para sua obra.
              Pisos intertravados, blocos de concreto, postes, meio-fio, manilhas e soluções
              para obras residenciais, comerciais e industriais.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-navy-700 active:bg-navy-800 text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] min-h-[42px] text-sm sm:text-base w-full sm:w-auto"
              >
                Produtos
                <Package size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="/calculadora"
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-navy-700 font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] min-h-[42px] text-sm sm:text-base border border-navy-200 w-full sm:w-auto"
              >
                Calculadora
                <Calculator size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/5585999066947"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-turquoise hover:bg-turquoise-dark active:brightness-90 text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] min-h-[42px] text-sm sm:text-base w-full sm:w-auto"
              >
                Solicitar orçamento
                <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
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
