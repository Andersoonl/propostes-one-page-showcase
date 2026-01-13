import { Grid3X3, Box, Zap, Plus, CircleDot, Minus } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Pisos",
    description: "Pisos pré-moldados resistentes para áreas externas e internas. Alta durabilidade e acabamento de qualidade.",
    Icon: Grid3X3,
    href: "/produtos#pisos-intertravados",
  },
  {
    title: "Blocos",
    description: "Blocos estruturais e de vedação com precisão dimensional. Ideais para construções rápidas e econômicas.",
    Icon: Box,
    href: "/produtos#blocos-9",
  },
  {
    title: "Postes",
    description: "Postes de concreto armado para iluminação pública e rural. Resistência e longa vida útil garantida.",
    Icon: Zap,
    href: "/produtos#postes-cruzetas",
  },
  {
    title: "Cruzetas",
    description: "Cruzetas para redes de distribuição elétrica. Fabricadas conforme normas técnicas vigentes.",
    Icon: Plus,
    href: "/produtos#postes-cruzetas",
  },
  {
    title: "Manilhas",
    description: "Manilhas de concreto para drenagem e saneamento. Diversos diâmetros disponíveis.",
    Icon: CircleDot,
    href: "/produtos#tubos-caixas",
  },
  {
    title: "Meio Fio",
    description: "Meio-fios pré-moldados para urbanização. Acabamento perfeito e instalação facilitada.",
    Icon: Minus,
    href: "/produtos#meio-fio",
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 lg:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-secondary font-medium mb-2 md:mb-3 text-sm md:text-base">Nosso Catálogo</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-5">
            Produtos de Qualidade
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma linha completa de produtos pré-moldados em concreto 
            para atender às necessidades da sua obra.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
