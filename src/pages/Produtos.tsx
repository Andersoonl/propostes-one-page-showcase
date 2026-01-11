import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Box, Grid3X3, Zap, Minus, CircleDot, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const productCategories = [
  {
    id: "blocos-9",
    title: "Blocos - Família 9",
    description: "Blocos de vedação e estruturais com 9cm de largura. Ideais para construções econômicas e rápidas.",
    icon: Box,
    products: [
      { name: "Bloco de Vedação", dimensions: "9x19x39", specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco", dimensions: "9x19x19", specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Canaleta Inteira", dimensions: "9x19x39", specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "39cm" } },
    ],
  },
  {
    id: "blocos-14",
    title: "Blocos - Família 14",
    description: "Blocos estruturais e de vedação com 14cm de largura. Maior resistência para obras de médio porte.",
    icon: Box,
    products: [
      { name: "Bloco de Vedação", dimensions: "14x19x39", specs: { resistencia: "4MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco Vedação", dimensions: "14x19x19", specs: { resistencia: "4MPa", largura: "14cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Bloco Estrutural", dimensions: "14x19x39", specs: { resistencia: "6MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Canaleta Inteira", dimensions: "14x19x39", specs: { resistencia: "4MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Canaleta Meia", dimensions: "14x19x19", specs: { resistencia: "4MPa", largura: "14cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Compensador A", dimensions: "14x19x9", specs: { resistencia: "4MPa", largura: "14cm", altura: "19cm", comprimento: "9cm" } },
      { name: "Compensador B", dimensions: "14x19x4", specs: { resistencia: "4MPa", largura: "14cm", altura: "19cm", comprimento: "4cm" } },
    ],
  },
  {
    id: "blocos-19",
    title: "Blocos - Família 19",
    description: "Blocos estruturais com 19cm de largura. Alta resistência para grandes obras.",
    icon: Box,
    products: [
      { name: "Bloco Estrutural", dimensions: "19x19x39", specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco", dimensions: "19x19x19", specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Canaleta Inteira", dimensions: "19x19x39", specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "39cm" } },
    ],
  },
  {
    id: "blocos-29",
    title: "Blocos - Família 29",
    description: "Blocos especiais com 29cm de largura. Máxima resistência e isolamento térmico.",
    icon: Box,
    products: [
      { name: "Bloco Estrutural", dimensions: "29x19x39", specs: { resistencia: "8MPa", largura: "29cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco", dimensions: "29x19x19", specs: { resistencia: "8MPa", largura: "29cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Canaleta Inteira", dimensions: "29x19x39", specs: { resistencia: "8MPa", largura: "29cm", altura: "19cm", comprimento: "39cm" } },
    ],
  },
  {
    id: "pisos-intertravados",
    title: "Piso Intertravado",
    description: "Pisos pré-moldados para pavimentação de calçadas, estacionamentos e áreas externas.",
    icon: Grid3X3,
    products: [
      { name: "Piso Retangular", dimensions: "10x20x6", specs: { resistencia: "35MPa", largura: "10cm", altura: "6cm", comprimento: "20cm" } },
      { name: "Piso Retangular", dimensions: "10x20x8", specs: { resistencia: "35MPa", largura: "10cm", altura: "8cm", comprimento: "20cm" } },
      { name: "Piso 16 Faces", dimensions: "20x20x6", specs: { resistencia: "35MPa", largura: "20cm", altura: "6cm", comprimento: "20cm" } },
      { name: "Piso Sextavado", dimensions: "25x25x6", specs: { resistencia: "35MPa", largura: "25cm", altura: "6cm", comprimento: "25cm" } },
    ],
  },
  {
    id: "pisos-permeaveis",
    title: "Pisos Permeáveis",
    description: "Pisos com alta permeabilidade para drenagem sustentável de águas pluviais.",
    icon: Grid3X3,
    products: [
      { name: "Piso Permeável", dimensions: "10x20x6", specs: { resistencia: "35MPa", largura: "10cm", altura: "6cm", comprimento: "20cm" } },
      { name: "Piso Permeável", dimensions: "10x20x8", specs: { resistencia: "35MPa", largura: "10cm", altura: "8cm", comprimento: "20cm" } },
      { name: "Grama Block", dimensions: "40x60x8", specs: { resistencia: "35MPa", largura: "40cm", altura: "8cm", comprimento: "60cm" } },
    ],
  },
  {
    id: "meio-fio",
    title: "Meio Fio",
    description: "Meio-fios pré-moldados para urbanização e delimitação de vias.",
    icon: Minus,
    products: [
      { name: "Meio Fio Padrão", dimensions: "100x30x12", specs: { resistencia: "35MPa", largura: "12cm", altura: "30cm", comprimento: "100cm" } },
      { name: "Meio Fio Jardim", dimensions: "50x20x8", specs: { resistencia: "35MPa", largura: "8cm", altura: "20cm", comprimento: "50cm" } },
    ],
  },
  {
    id: "tubos-caixas",
    title: "Tubo de Concreto / Caixa de Passagem",
    description: "Tubos e caixas para drenagem, saneamento e infraestrutura urbana.",
    icon: CircleDot,
    products: [
      { name: "Tubo Concreto", dimensions: "Ø30x100", specs: { resistencia: "Classe PA1", diametro: "30cm", comprimento: "100cm" } },
      { name: "Tubo Concreto", dimensions: "Ø40x100", specs: { resistencia: "Classe PA1", diametro: "40cm", comprimento: "100cm" } },
      { name: "Tubo Concreto", dimensions: "Ø60x100", specs: { resistencia: "Classe PA1", diametro: "60cm", comprimento: "100cm" } },
      { name: "Caixa de Passagem", dimensions: "60x60x60", specs: { resistencia: "Classe PA1", dimensoes: "60x60x60cm" } },
    ],
  },
  {
    id: "postes-cruzetas",
    title: "Postes / Cruzetas",
    description: "Postes e cruzetas de concreto para redes de distribuição elétrica.",
    icon: Zap,
    products: [
      { name: "Poste Circular", dimensions: "7m - 150daN", specs: { resistencia: "150daN", altura: "7m", tipo: "Circular" } },
      { name: "Poste Circular", dimensions: "9m - 300daN", specs: { resistencia: "300daN", altura: "9m", tipo: "Circular" } },
      { name: "Poste Circular", dimensions: "11m - 600daN", specs: { resistencia: "600daN", altura: "11m", tipo: "Circular" } },
      { name: "Cruzeta", dimensions: "90cm", specs: { comprimento: "90cm", tipo: "Padrão COELCE" } },
      { name: "Cruzeta", dimensions: "2m", specs: { comprimento: "2m", tipo: "Padrão COELCE" } },
    ],
  },
];

const Produtos = () => {
  return (
    <>
      <Helmet>
        <title>Produtos - Propostes | Blocos, Pisos e Postes de Concreto</title>
        <meta name="description" content="Catálogo completo de produtos Propostes: blocos de concreto, pisos intertravados, meio-fio, tubos, postes e cruzetas. Qualidade certificada ISO 9001." />
        <meta name="keywords" content="blocos de concreto, pisos intertravados, postes de concreto, meio-fio, tubos de concreto, Fortaleza, Ceará" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-navy-gradient text-white">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar para Início
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Todos os Produtos
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Conheça nossa linha completa de produtos pré-moldados em concreto. Qualidade certificada ISO 9001.
          </p>
        </div>
      </section>

      {/* Products Sections */}
      <main className="py-16 md:py-24">
        <div className="container">
          {productCategories.map((category, categoryIndex) => (
            <section
              key={category.id}
              id={category.id}
              className={`${categoryIndex > 0 ? "mt-20 pt-20 border-t border-border" : ""}`}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <category.icon size={24} className="text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {category.products.map((product, productIndex) => (
                  <div
                    key={`${category.id}-${productIndex}`}
                    className="bg-card border border-border rounded-xl p-5 hover:border-secondary/50 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-semibold text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-3">
                      {product.dimensions}
                    </p>
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="font-medium text-foreground">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Precisa de um orçamento?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Entre em contato conosco para solicitar um orçamento personalizado para sua obra.
          </p>
          <a
            href="https://wa.me/+5585999066947"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-turquoise-dark text-secondary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-accent"
          >
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Produtos;
