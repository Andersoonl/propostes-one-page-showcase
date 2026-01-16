import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Box, Grid3X3, Zap, Minus, CircleDot } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import product images - Família 9
import blocoVedacao9x19x39 from "@/assets/products/bloco-vedacao-9x19x39.png";
import canaletaInteira9x19x39 from "@/assets/products/canaleta-inteira-9x19x39.png";
import meioBloco9x19x19 from "@/assets/products/meio-bloco-9x19x19.png";

// Import product images - Família 14
import blocoVedacao14x19x39 from "@/assets/products/bloco-vedacao-14x19x39.png";
import blocoEstrutural14x19x39 from "@/assets/products/bloco-estrutural-14x19x39.png";
import canaletaInteira14x19x39 from "@/assets/products/canaleta-inteira-14x19x39.png";
import compensador14x19x4 from "@/assets/products/compensador-14x19x4.png";
import complemento14x19x9 from "@/assets/products/complemento-14x19x9.png";
import meioBlocoEstrutural14x19x19 from "@/assets/products/meio-bloco-estrutural-14x19x19.png";
import meioBlocoVedacao14x19x19 from "@/assets/products/meio-bloco-vedacao-14x19x19.png";

// Import product images - Família 19
import blocoEstrutural19x19x39 from "@/assets/products/Bloco Estrutural 19x19x39.png";
import meioBloco19x19x19 from "@/assets/products/Meio Bloco 19x19x19.png";
import canaletaInteira19x19x39 from "@/assets/products/Canaleta Inteira 19x19x39.png";

// Import product images - Blocos Especiais (14x19)
import blocoEstrutural14x19x29 from "@/assets/products/Bloco Estrutural 14x19x29.png";
import blocoEstrutural14x19x44 from "@/assets/products/Bloco Estrutural 14x19x44.png";
import canaletaInteira14x19x29 from "@/assets/products/Canaleta Inteira 14x19x29.png";
import meiaCanaleta14x19x14 from "@/assets/products/Meia Canaleta 14x19x14.png";
import meiaCanaletaBaixa14x9x14 from "@/assets/products/Meia Canaleta Baixa 14x9x14.png";
import meioBloco14x19x14 from "@/assets/products/Meio Bloco 14x19x14.png";
import meioJota14 from "@/assets/products/Meio Jota 14x9-19x14.png";

// Import product images - Pisos
import pisoRetangularH4 from "@/assets/products/Piso Retangular H4.png";
import pisoRetangularH6 from "@/assets/products/Piso Retangular H6.png";
import pisoRetangularH6Drenante from "@/assets/products/Piso Retangular H6 Drenante.png";
import pisoRetangularH8 from "@/assets/products/Piso Retangular H8.png";
import pisoRetangularH8Drenante from "@/assets/products/Piso Retangular H8 Drenante.png";
import pisoUnisteinH6 from "@/assets/products/Piso Unistein H6.png";
import pisoUnisteinH6Drenante from "@/assets/products/Piso Unistein H6 Drenante.png";
import pisoUnisteinH8 from "@/assets/products/Piso Unistein H8.png";
import pisoUnisteinH8Drenante from "@/assets/products/Piso Unistein H8 Drenante.png";
import pisoUnisteinH10 from "@/assets/products/Piso Unistein H10.png";
import pisoCitypalc from "@/assets/products/Piso Citypalc.png";
import pisoCitypalcDrenante from "@/assets/products/Piso Citypalc Drenante.png";
import pisograma from "@/assets/products/Pisograma H8.png";

// Import product images - Meio Fio
import meioFio1 from "@/assets/products/Meio Fio de Concreto.png";
import meioFio2 from "@/assets/products/Meio Fio de Concreto 2.png";

// Import product images - Tubos e Caixas
import manilha from "@/assets/products/Manilha Ponto e Bolsa.png";
import caixaPassagem from "@/assets/products/Caixa de Passagem com e sem tampa.png";
import tampaPassagem from "@/assets/products/Tampa para Caixa de Passagem.png";

// Import product images - Postes e Cruzetas
import posteCircular from "@/assets/products/Poste Circular.png";
import posteDuploT from "@/assets/products/Poste Duplo T.png";
import cruzetaNormal from "@/assets/products/Cruzeta Normal 1,90m.png";
import cruzetaBeco from "@/assets/products/Cruzeta Beco 1,70m.png";
import cruzetaMeioBeco from "@/assets/products/Cruzeta Meio Beco 1,90m.png";
import cruzetaReta from "@/assets/products/Cruzeta Reta 2,35m.png";
import cruzetaSpacer from "@/assets/products/Cruzeta spacer.png";

const productCategories = [
  {
    id: "blocos-9",
    title: "Blocos - Família 9",
    description: "Blocos de vedação e estruturais com 9cm de largura. Ideais para construções econômicas e rápidas.",
    icon: Box,
    products: [
      { name: "Bloco de Vedação", dimensions: "9x19x39", image: blocoVedacao9x19x39, specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco", dimensions: "9x19x19", image: meioBloco9x19x19, specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Canaleta Inteira", dimensions: "9x19x39", image: canaletaInteira9x19x39, specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "39cm" } },
    ],
  },
  {
    id: "blocos-14",
    title: "Blocos - Família 14",
    description: "Blocos estruturais e de vedação com 14cm de largura. Maior resistência para obras de médio porte.",
    icon: Box,
    products: [
      { name: "Bloco de Vedação", dimensions: "14x19x39", image: blocoVedacao14x19x39, specs: { resistencia: "3 MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco Vedação", dimensions: "14x19x19", image: meioBlocoVedacao14x19x19, specs: { resistencia: "3 MPa", largura: "14cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Bloco Estrutural", dimensions: "14x19x39", image: blocoEstrutural14x19x39, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco Estrutural", dimensions: "14x19x19", image: meioBlocoEstrutural14x19x19, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Canaleta Inteira", dimensions: "14x19x39", image: canaletaInteira14x19x39, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Compensador", dimensions: "14x19x4", image: compensador14x19x4, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "4cm" } },
      { name: "Complemento", dimensions: "14x19x9", image: complemento14x19x9, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "9cm" } },
    ],
  },
  {
    id: "blocos-19",
    title: "Blocos - Família 19",
    description: "Blocos estruturais com 19cm de largura. Alta resistência para grandes obras.",
    icon: Box,
    products: [
      { name: "Bloco Estrutural", dimensions: "19x19x39", image: blocoEstrutural19x19x39, specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "39cm" } },
      { name: "Meio Bloco", dimensions: "19x19x19", image: meioBloco19x19x19, specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "19cm" } },
      { name: "Canaleta Inteira", dimensions: "19x19x39", image: canaletaInteira19x19x39, specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "39cm" } },
    ],
  },
  {
    id: "blocos-29",
    title: "Blocos - Família 29",
    description: "Blocos estruturais da família 29 com medidas especiais para obras específicas.",
    icon: Box,
    products: [
      { name: "Bloco Estrutural", dimensions: "14x19x29", image: blocoEstrutural14x19x29, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "29cm" } },
      { name: "Meio Bloco", dimensions: "14x19x14", image: meioBloco14x19x14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "14cm" } },
      { name: "Bloco Estrutural", dimensions: "14x19x44", image: blocoEstrutural14x19x44, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "44cm" } },
      { name: "Canaleta Inteira", dimensions: "14x19x29", image: canaletaInteira14x19x29, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "29cm" } },
      { name: "Meia Canaleta", dimensions: "14x19x14", image: meiaCanaleta14x19x14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "14cm" } },
      { name: "Meia Canaleta Baixa", dimensions: "14x9x14", image: meiaCanaletaBaixa14x9x14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "9cm", comprimento: "14cm" } },
      { name: "Meio Jota", dimensions: "14x9-19x14", image: meioJota14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "9-19cm", comprimento: "14cm" } },
    ],
  },
  {
    id: "pisos-intertravados",
    title: "Pisos Intertravados",
    description: "Pisos pré-moldados para pavimentação de calçadas, estacionamentos e áreas externas.",
    icon: Grid3X3,
    products: [
      { name: "Piso Retangular", dimensions: "H4", image: pisoRetangularH4, specs: { resistencia: "35MPa", altura: "4cm", tipo: "Retangular" } },
      { name: "Piso Retangular", dimensions: "H6", image: pisoRetangularH6, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Retangular" } },
      { name: "Piso Retangular", dimensions: "H8", image: pisoRetangularH8, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Retangular" } },
      { name: "Piso Unistein", dimensions: "H6", image: pisoUnisteinH6, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Unistein" } },
      { name: "Piso Unistein", dimensions: "H8", image: pisoUnisteinH8, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Unistein" } },
      { name: "Piso Unistein", dimensions: "H10", image: pisoUnisteinH10, specs: { resistencia: "35MPa", altura: "10cm", tipo: "Unistein" } },
      { name: "Piso Citypalc", dimensions: "Padrão", image: pisoCitypalc, specs: { resistencia: "35MPa", tipo: "Citypalc" } },
      { name: "Pisograma", dimensions: "H8", image: pisograma, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Gramado" } },
    ],
  },
  {
    id: "pisos-intertravados-permeaveis",
    title: "Pisos Intertravados Permeáveis",
    description: "Pisos pré-moldados permeáveis para pavimentação drenante de calçadas, estacionamentos e áreas externas.",
    icon: Grid3X3,
    products: [
      { name: "Piso Retangular Drenante", dimensions: "H6", image: pisoRetangularH6Drenante, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Drenante" } },
      { name: "Piso Retangular Drenante", dimensions: "H8", image: pisoRetangularH8Drenante, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Drenante" } },
      { name: "Piso Citypalc Drenante", dimensions: "Padrão", image: pisoCitypalcDrenante, specs: { resistencia: "35MPa", tipo: "Drenante" } },
      { name: "Piso Unistein Drenante", dimensions: "H6", image: pisoUnisteinH6Drenante, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Drenante" } },
      { name: "Piso Unistein Drenante", dimensions: "H8", image: pisoUnisteinH8Drenante, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Drenante" } },
    ],
  },
  {
    id: "meio-fio",
    title: "Meio Fio",
    description: "Meio-fios pré-moldados para urbanização e delimitação de vias.",
    icon: Minus,
    products: [
      { name: "Meio Fio de Concreto", dimensions: "Padrão", image: meioFio1, specs: { resistencia: "35MPa", tipo: "Padrão" } },
      { name: "Meio Fio de Concreto", dimensions: "Tipo 2", image: meioFio2, specs: { resistencia: "35MPa", tipo: "Alternativo" } },
    ],
  },
  {
    id: "postes",
    title: "Postes",
    description: "Postes de concreto para redes de distribuição elétrica.",
    icon: Zap,
    products: [
      { name: "Poste Circular", dimensions: "Diversos tamanhos", image: posteCircular, specs: { tipo: "Circular", material: "Concreto Armado" } },
      { name: "Poste Duplo T", dimensions: "Diversos tamanhos", image: posteDuploT, specs: { tipo: "Duplo T", material: "Concreto Armado" } },
    ],
  },
  {
    id: "cruzetas",
    title: "Cruzetas",
    description: "Cruzetas de concreto para redes de distribuição elétrica.",
    icon: Zap,
    products: [
      { name: "Cruzeta Beco", dimensions: "1,70m", image: cruzetaBeco, specs: { comprimento: "1,70m", tipo: "Beco" } },
      { name: "Cruzeta Meio Beco", dimensions: "1,90m", image: cruzetaMeioBeco, specs: { comprimento: "1,90m", tipo: "Meio Beco" } },
      { name: "Cruzeta Normal", dimensions: "1,90m", image: cruzetaNormal, specs: { comprimento: "1,90m", tipo: "Normal" } },
      { name: "Cruzeta Reta", dimensions: "2,35m", image: cruzetaReta, specs: { comprimento: "2,35m", tipo: "Reta" } },
      { name: "Cruzeta Spacer", dimensions: "Padrão", image: cruzetaSpacer, specs: { tipo: "Spacer", material: "Concreto" } },
    ],
  },
  {
    id: "caixa-passagem-tampa",
    title: "Caixa de Passagem e Tampa",
    description: "Caixas de passagem e tampas para infraestrutura urbana.",
    icon: CircleDot,
    products: [
      { name: "Caixa de Passagem", dimensions: "Com e sem tampa", image: caixaPassagem, specs: { tipo: "Passagem", material: "Concreto" } },
      { name: "Tampa para Caixa de Passagem", dimensions: "Padrão", image: tampaPassagem, specs: { tipo: "Tampa", material: "Concreto" } },
    ],
  },
  {
    id: "manilhas",
    title: "Manilhas",
    description: "Manilhas de concreto para drenagem e saneamento.",
    icon: CircleDot,
    products: [
      { name: "Manilha Ponta e Bolsa", dimensions: "Diversos diâmetros", image: manilha, specs: { resistencia: "Classe PA1", tipo: "Ponta e Bolsa" } },
    ],
  },
];

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isMenuSticky, setIsMenuSticky] = useState(true);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 68; // Altura do header fixo
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Scroll inicial quando o componente é montado
    const timer = setTimeout(scrollToHash, 100);

    // Listener para mudanças no hash
    window.addEventListener("hashchange", scrollToHash);

    // Listener para detectar quando o menu deve ficar sticky
    const handleScroll = () => {
      const heroSection = document.querySelector('section.bg-navy-gradient');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsMenuSticky(heroBottom < 100);
      } else {
        // Se não encontrar a seção, mostra o menu sempre
        setIsMenuSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica no carregamento inicial

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Produtos - Propostes | Blocos, Pisos e Postes de Concreto</title>
        <meta name="description" content="Catálogo completo de produtos Propostes: blocos de concreto, pisos intertravados, meio-fio, tubos, postes e cruzetas. Qualidade certificada ISO 9001." />
        <meta name="keywords" content="blocos de concreto, pisos intertravados, postes de concreto, meio-fio, tubos de concreto, Fortaleza, Ceará" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        className="pt-28 pb-16 md:pt-36 md:pb-20 text-white relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(220 50% 32%) 0%, hsl(220 55% 22%) 100%)',
        }}
      >
        {/* Textura de construção */}
        <div 
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 36px,
                hsl(220 45% 24% / 0.7) 36px,
                hsl(220 45% 24% / 0.7) 40px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 36px,
                hsl(220 45% 24% / 0.7) 36px,
                hsl(220 45% 24% / 0.7) 40px
              ),
              radial-gradient(circle at 20% 30%, hsl(220 40% 28% / 0.6) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, hsl(220 45% 26% / 0.55) 0%, transparent 35%),
              radial-gradient(circle at 50% 50%, hsl(220 50% 23% / 0.5) 0%, transparent 40%),
              radial-gradient(circle at 10% 80%, hsl(220 40% 28% / 0.5) 0%, transparent 30%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 120px 120px, 100px 100px, 150px 150px, 110px 110px',
            backgroundPosition: '0 0, 0 0, 0 0, 60px 60px, 30px 30px, 20px 20px',
            zIndex: 1
          }}
        />
        <div 
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(
                45deg,
                transparent 0px,
                transparent 2px,
                hsl(220 50% 20% / 0.4) 2px,
                hsl(220 50% 20% / 0.4) 4px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent 0px,
                transparent 3px,
                hsl(220 50% 22% / 0.35) 3px,
                hsl(220 50% 22% / 0.35) 6px
              ),
              linear-gradient(to bottom, transparent 0%, hsl(220 55% 18% / 0.5) 100%)
            `,
            zIndex: 1
          }}
        />
        <div className="container relative z-10">
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

      {/* Sticky Navigation Menu */}
      <div
        className={`sticky top-[54px] md:top-[68px] z-40 bg-background/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300`}
      >
        <div className="container py-3">
          <nav className="overflow-x-auto scrollbar-discreet">
            <div className="flex gap-6 md:gap-8 min-w-max">
              {productCategories.map((category) => {
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${category.id}`);
                      if (element) {
                        const headerOffset = 88;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="relative whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 px-3 py-1.5 border border-border/30 rounded-md hover:border-border/60 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {category.title}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

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
                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/50 hover:shadow-md transition-all duration-300"
                  >
                    {/* Product Image */}
                    {'image' in product && product.image ? (
                      <div 
                        className="aspect-square bg-muted/30 flex items-center justify-center p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => setSelectedImage({
                          src: product.image,
                          alt: `${product.name} ${product.dimensions}`
                        })}
                      >
                        <img 
                          src={product.image} 
                          alt={`${product.name} ${product.dimensions}`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square bg-muted/30 flex items-center justify-center">
                        <Box size={64} className="text-muted-foreground/30" />
                      </div>
                    )}
                    
                    {/* Product Info */}
                    <div className="p-5">
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

      {/* Image Zoom Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Visualização da Imagem</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full h-[80vh] flex items-center justify-center bg-background rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Produtos;
