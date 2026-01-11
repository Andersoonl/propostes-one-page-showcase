import { Grid3X3, Box, Zap, Plus, CircleDot, Minus } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Pisos",
    description: "Pisos pré-moldados resistentes para áreas externas e internas. Alta durabilidade e acabamento de qualidade.",
    Icon: Grid3X3,
  },
  {
    title: "Blocos",
    description: "Blocos estruturais e de vedação com precisão dimensional. Ideais para construções rápidas e econômicas.",
    Icon: Box,
  },
  {
    title: "Postes",
    description: "Postes de concreto armado para iluminação pública e rural. Resistência e longa vida útil garantida.",
    Icon: Zap,
  },
  {
    title: "Cruzetas",
    description: "Cruzetas para redes de distribuição elétrica. Fabricadas conforme normas técnicas vigentes.",
    Icon: Plus,
  },
  {
    title: "Manilhas",
    description: "Manilhas de concreto para drenagem e saneamento. Diversos diâmetros disponíveis.",
    Icon: CircleDot,
  },
  {
    title: "Meio Fio",
    description: "Meio-fios pré-moldados para urbanização. Acabamento perfeito e instalação facilitada.",
    Icon: Minus,
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-primary font-medium mb-3">Nosso Catálogo</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Produtos de Qualidade
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma linha completa de produtos pré-moldados em concreto 
            para atender às necessidades da sua obra.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
