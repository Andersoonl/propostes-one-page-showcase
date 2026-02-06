import { Grid3X3, Box, Zap, Plus, CircleDot, Minus } from "lucide-react";
import ProductCard from "./ProductCard";

import pisosImg from "@/assets/cards/pisos.jpg";
import blocosImg from "@/assets/cards/blocos.jpg";
import postesImg from "@/assets/cards/postes.jpg";
import cruzetasImg from "@/assets/cards/cruzetas.jpg";
import manilhasImg from "@/assets/cards/manilhas.jpg";
import meioFioImg from "@/assets/cards/meio-fio.jpg";

const products = [
  {
    title: "Pisos",
    description: "Pisos pré-moldados resistentes para áreas externas e internas. Alta durabilidade e acabamento de qualidade.",
    Icon: Grid3X3,
    href: "/produtos#pisos-intertravados",
    image: pisosImg,
  },
  {
    title: "Blocos",
    description: "Blocos estruturais e de vedação com precisão dimensional. Ideais para construções rápidas e econômicas.",
    Icon: Box,
    href: "/produtos#blocos-9",
    image: blocosImg,
  },
  {
    title: "Postes",
    description: "Postes de concreto armado para iluminação pública e rural. Resistência e longa vida útil garantida.",
    Icon: Zap,
    href: "/produtos#postes",
    image: postesImg,
  },
  {
    title: "Cruzetas",
    description: "Cruzetas para redes de distribuição elétrica. Fabricadas conforme normas técnicas vigentes.",
    Icon: Plus,
    href: "/produtos#cruzetas",
    image: cruzetasImg,
  },
  {
    title: "Manilhas",
    description: "Manilhas de concreto para drenagem e saneamento. Diversos diâmetros disponíveis.",
    Icon: CircleDot,
    href: "/produtos#manilhas",
    image: manilhasImg,
  },
  {
    title: "Meio Fio",
    description: "Meio-fios pré-moldados para urbanização. Acabamento perfeito e instalação facilitada.",
    Icon: Minus,
    href: "/produtos#meio-fio",
    image: meioFioImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-12 md:py-24 lg:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 lg:mb-20">
          <p className="text-secondary font-medium mb-2 md:mb-3 text-sm md:text-base">Nosso Catálogo</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-5">
            Produtos de Qualidade
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma linha completa de produtos pré-moldados em concreto
            para atender às necessidades da sua obra.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                Icon={product.Icon}
                href={product.href}
                backgroundImage={product.image}
                backgroundPosition={product.backgroundPosition}
                backgroundSize={product.backgroundSize}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
