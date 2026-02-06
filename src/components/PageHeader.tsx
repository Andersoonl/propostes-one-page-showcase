import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  backLink?: { to: string; label: string };
}

const PageHeader = ({ title, description, icon: Icon, backLink }: PageHeaderProps) => {
  return (
    <section
      className="pt-16 pb-8 sm:pt-24 sm:pb-12 md:pt-36 md:pb-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, hsl(220 50% 32%) 0%, hsl(220 55% 22%) 60%, hsl(200 40% 25%) 100%)",
      }}
    >
      {/* Texturas de fundo com opacidade reduzida */}
      <div className="bg-hero-texture-grid opacity-40" />
      <div className="bg-hero-texture-diagonal opacity-40" />

      {/* Elementos decorativos geométricos - apenas desktop */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block">
        {/* Bloco de concreto */}
        <div
          className="absolute w-20 h-14 rounded-sm border border-white/10 bg-white/[0.04] animate-float motion-reduce:animate-none"
          style={{ top: "15%", right: "8%" }}
        />
        {/* Paver quadrado */}
        <div
          className="absolute w-10 h-10 rounded-sm border border-turquoise/15 bg-turquoise/[0.06] animate-float motion-reduce:animate-none"
          style={{ top: "45%", right: "15%", animationDuration: "6s", animationDelay: "1s" }}
        />
        {/* Viga/verga */}
        <div
          className="absolute w-28 h-3 rounded-sm bg-turquoise/[0.08] animate-float-slow motion-reduce:animate-none"
          style={{ top: "25%", right: "3%", animationDelay: "2s" }}
        />
        {/* Bloco rotacionado */}
        <div
          className="absolute w-16 h-12 rounded-sm border border-white/[0.08] bg-white/[0.03] animate-float-rotate motion-reduce:animate-none"
          style={{ bottom: "20%", right: "10%", animationDelay: "0.5s" }}
        />
        {/* Accent pequeno */}
        <div
          className="absolute w-5 h-5 rounded-sm bg-turquoise/10 animate-pulse-subtle motion-reduce:animate-none"
          style={{ top: "35%", right: "25%", animationDelay: "1.5s" }}
        />
        {/* Grade 2x2 (pavers) */}
        <div
          className="absolute w-24 h-24 rounded-sm animate-float motion-reduce:animate-none"
          style={{ top: "55%", right: "5%", animationDuration: "9s", animationDelay: "3s" }}
        >
          <div className="grid grid-cols-2 gap-1.5 w-full h-full">
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.02]" />
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.02]" />
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.02]" />
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.02]" />
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Back Link com animação de entrada */}
        {backLink && (
          <Link
            to={backLink.to}
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium mb-4 sm:mb-6 transition-colors text-sm sm:text-base animate-fade-in"
            style={{ animationDuration: "600ms" }}
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            {backLink.label}
          </Link>
        )}

        {/* Ícone e Título */}
        <div
          className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 animate-fade-up"
          style={{ animationDuration: "600ms", animationDelay: "100ms", animationFillMode: "backwards" }}
        >
          {/* Ícone com glow sutil */}
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 border border-secondary/30 shadow-lg shadow-secondary/20 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:border-secondary/50">
            <Icon size={20} className="sm:hidden text-secondary" />
            <Icon size={28} className="hidden sm:block text-secondary" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
        </div>

        {/* Linha decorativa turquesa */}
        <div
          className="h-0.5 w-12 sm:w-16 bg-secondary rounded-full mb-4 sm:mb-5 animate-fade-in"
          style={{ animationDuration: "800ms", animationDelay: "300ms", animationFillMode: "backwards" }}
        />

        {/* Descrição */}
        <p
          className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl animate-fade-up"
          style={{ animationDuration: "600ms", animationDelay: "400ms", animationFillMode: "backwards" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
