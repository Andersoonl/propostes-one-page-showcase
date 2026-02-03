import { useState, useEffect } from "react";
import parceirosImg1 from "@/assets/parceiros_img1.png";
import parceirosImg2 from "@/assets/parceiros_img2.png";

const partners = [
  { id: 1, image: parceirosImg1, alt: "Parceiros da Propostes - Parte 1" },
  { id: 2, image: parceirosImg2, alt: "Parceiros da Propostes - Parte 2" },
];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clientes" className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-secondary font-medium mb-2 md:mb-3 text-sm md:text-base">Parcerias de Sucesso</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-5">
            Clientes & Parceiros
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Empresas que confiam na qualidade dos produtos Propostes 
            para suas construções e projetos.
          </p>
        </div>

        {/* Partners Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Parceiros e clientes da Propostes"
        >
          <div className="relative min-h-[300px] overflow-hidden rounded-xl" aria-live="polite">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} de ${partners.length}`}
                aria-hidden={index !== currentIndex}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="w-full bg-card border border-border rounded-xl shadow-xl overflow-hidden flex items-center justify-center p-2 md:p-3">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Navegação do carousel">
            {partners.map((_, index) => (
              <button
                key={index}
                role="tab"
                onClick={() => setCurrentIndex(index)}
                aria-selected={index === currentIndex}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-secondary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Mostrar parceiros ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="text-muted-foreground text-base md:text-lg">
            Mais de <span className="text-secondary font-bold">1000 clientes</span> atendidos e satisfeitos com nossos <span className="text-secondary font-bold">pré-moldados de concreto</span> em todo o Ceará.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
