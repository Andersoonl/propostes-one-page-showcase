import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Ruler, Box, Grid3X3, Info, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WHATSAPP_CTA } from "@/config";

// Dados dos produtos com rendimento por m²
const calculableProducts = {
  pisos: {
    title: "Pisos Intertravados",
    icon: Grid3X3,
    products: [
      { id: "retangular-h4", name: "Piso Retangular H4", piecesPerSqm: 50, dimensions: "10x20x4cm" },
      { id: "retangular-h6", name: "Piso Retangular H6", piecesPerSqm: 50, dimensions: "10x20x6cm" },
      { id: "retangular-h8", name: "Piso Retangular H8", piecesPerSqm: 50, dimensions: "10x20x8cm" },
      { id: "unistein-h6", name: "Piso Unistein H6", piecesPerSqm: 38, dimensions: "11,5x22,5x6cm" },
      { id: "unistein-h8", name: "Piso Unistein H8", piecesPerSqm: 38, dimensions: "11,5x22,5x8cm" },
      { id: "unistein-h10", name: "Piso Unistein H10", piecesPerSqm: 38, dimensions: "11,5x22,5x10cm" },
      { id: "citypalc", name: "Piso Citypalc", piecesPerSqm: 45, dimensions: "Variado" },
      { id: "pisograma", name: "Pisograma H8", piecesPerSqm: 4, dimensions: "60x40x8cm" },
    ],
  },
  blocos: {
    title: "Blocos de Concreto",
    icon: Box,
    products: [
      { id: "bloco-9", name: "Bloco 9x19x39", piecesPerSqm: 12.5, dimensions: "9x19x39cm" },
      { id: "bloco-14", name: "Bloco 14x19x39", piecesPerSqm: 12.5, dimensions: "14x19x39cm" },
      { id: "bloco-19", name: "Bloco 19x19x39", piecesPerSqm: 12.5, dimensions: "19x19x39cm" },
      { id: "bloco-14-29", name: "Bloco 14x19x29", piecesPerSqm: 16.5, dimensions: "14x19x29cm" },
      { id: "bloco-14-44", name: "Bloco 14x19x44", piecesPerSqm: 11, dimensions: "14x19x44cm" },
    ],
  },
};

const Calculadora = () => {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  // Calcula a área total
  const totalArea = useMemo(() => {
    const l = parseFloat(length.replace(",", "."));
    const w = parseFloat(width.replace(",", "."));
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return 0;
    return l * w;
  }, [length, width]);

  // Encontra o produto selecionado
  const selectedProduct = useMemo(() => {
    if (!category || !product) return null;
    const cat = calculableProducts[category as keyof typeof calculableProducts];
    if (!cat) return null;
    return cat.products.find((p) => p.id === product);
  }, [category, product]);

  // Calcula quantidade de peças
  const piecesNeeded = useMemo(() => {
    if (!selectedProduct || totalArea <= 0) return 0;
    return Math.ceil(totalArea * selectedProduct.piecesPerSqm);
  }, [selectedProduct, totalArea]);

  // Produtos da categoria selecionada
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    const cat = calculableProducts[category as keyof typeof calculableProducts];
    return cat?.products || [];
  }, [category]);

  // Reset produto quando categoria muda
  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setProduct("");
  };

  // Gera mensagem para WhatsApp
  const getWhatsAppMessage = () => {
    if (!selectedProduct || totalArea <= 0) return WHATSAPP_CTA.href;
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para:\n\n` +
      `📏 Área: ${totalArea.toFixed(2)}m² (${length}m x ${width}m)\n` +
      `📦 Produto: ${selectedProduct.name}\n` +
      `🔢 Quantidade estimada: ${piecesNeeded} peças\n\n` +
      `Podem me ajudar?`
    );
    return `${WHATSAPP_CTA.href}?text=${message}`;
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Materiais | Propostes</title>
        <meta
          name="description"
          content="Calcule quantos metros quadrados e peças de pisos intertravados ou blocos de concreto você precisa para sua obra. Calculadora gratuita Propostes."
        />
        <meta
          name="keywords"
          content="calculadora pisos, calculadora blocos, quantas peças por m², calculadora concreto, Propostes"
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section
        className="pt-16 pb-8 sm:pt-24 sm:pb-12 md:pt-36 md:pb-20 text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(220 50% 32%) 0%, hsl(220 55% 22%) 100%)",
        }}
      >
        <div className="bg-hero-texture-grid" />
        <div className="bg-hero-texture-diagonal" />
        <div className="container relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Voltar
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
              <Calculator size={20} className="sm:hidden text-secondary" />
              <Calculator size={28} className="hidden sm:block text-secondary" />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Calculadora
            </h1>
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-white/70 max-w-2xl">
            Calcule quantas peças você precisa para sua obra.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <main className="py-6 sm:py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
            {/* Input Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                  <Ruler size={18} className="text-secondary sm:w-5 sm:h-5" />
                  Dimensões da Área
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="length" className="text-xs sm:text-sm font-medium text-muted-foreground">
                        Comprimento (m)
                      </Label>
                      <Input
                        id="length"
                        type="text"
                        inputMode="decimal"
                        placeholder="Ex: 10"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="mt-1.5 h-12 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width" className="text-xs sm:text-sm font-medium text-muted-foreground">
                        Largura (m)
                      </Label>
                      <Input
                        id="width"
                        type="text"
                        inputMode="decimal"
                        placeholder="Ex: 5"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="mt-1.5 h-12 text-base"
                      />
                    </div>
                  </div>

                  {/* Area Display */}
                  <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-border/50">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Área total</div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">
                      {totalArea > 0 ? `${totalArea.toFixed(2)} m²` : "— m²"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Selection */}
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                  <Box size={18} className="text-secondary sm:w-5 sm:h-5" />
                  Selecione o Produto
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Categoria
                    </Label>
                    <Select value={category} onValueChange={handleCategoryChange}>
                      <SelectTrigger className="mt-1.5 h-12 text-base">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(calculableProducts).map(([key, cat]) => (
                          <SelectItem key={key} value={key} className="py-3">
                            {cat.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Produto
                    </Label>
                    <Select
                      value={product}
                      onValueChange={setProduct}
                      disabled={!category}
                    >
                      <SelectTrigger className="mt-1.5 h-12 text-base">
                        <SelectValue placeholder={category ? "Selecione um produto" : "Selecione a categoria"} />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryProducts.map((p) => (
                          <SelectItem key={p.id} value={p.id} className="py-3">
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedProduct && (
                    <div className="text-xs sm:text-sm text-muted-foreground bg-muted/30 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <Info size={14} className="flex-shrink-0 hidden sm:block" />
                      <span className="leading-relaxed">
                        <span className="font-medium">{selectedProduct.dimensions}</span>
                        <span className="mx-2 hidden sm:inline">|</span>
                        <br className="sm:hidden" />
                        <span>{selectedProduct.piecesPerSqm} peças/m²</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-card border-2 border-secondary/30 rounded-xl p-4 sm:p-6 md:sticky md:top-24">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                  <Calculator size={18} className="text-secondary sm:w-5 sm:h-5" />
                  Resultado
                </h2>

                {totalArea > 0 && selectedProduct ? (
                  <div className="space-y-4 sm:space-y-6">
                    {/* Main Result */}
                    <div className="bg-secondary/10 rounded-xl p-4 sm:p-6 text-center">
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
                        Quantidade necessária
                      </div>
                      <div className="text-4xl sm:text-5xl font-bold text-secondary mb-1 sm:mb-2">
                        {piecesNeeded.toLocaleString("pt-BR")}
                      </div>
                      <div className="text-base sm:text-lg text-foreground font-medium">
                        peças
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                      <div className="flex justify-between items-center py-2 border-b border-border/50 gap-2">
                        <span className="text-muted-foreground text-xs sm:text-sm">Produto</span>
                        <span className="font-medium text-foreground text-right text-xs sm:text-sm">
                          {selectedProduct.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-xs sm:text-sm">Área</span>
                        <span className="font-medium text-foreground text-xs sm:text-sm">
                          {totalArea.toFixed(2)} m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground text-xs sm:text-sm">Rendimento</span>
                        <span className="font-medium text-foreground text-xs sm:text-sm">
                          {selectedProduct.piecesPerSqm} peças/m²
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={getWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-turquoise-dark text-secondary-foreground font-semibold px-5 py-3.5 sm:px-6 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-accent text-sm sm:text-base"
                    >
                      <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                      Solicitar Orçamento
                    </a>

                    <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                      Valores estimados. Entre em contato para orçamento preciso.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Calculator size={24} className="sm:w-8 sm:h-8 text-muted-foreground/50" />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base px-4">
                      Preencha os campos acima para calcular.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-6 md:grid-cols-3">
            <div className="bg-muted/50 rounded-xl p-4 sm:p-6 border border-border/50 flex sm:block items-start gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center sm:mb-4 flex-shrink-0">
                <Info size={16} className="sm:w-5 sm:h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Dica</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Considere adicionar 10% para perdas com recortes.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 sm:p-6 border border-border/50 flex sm:block items-start gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center sm:mb-4 flex-shrink-0">
                <Ruler size={16} className="sm:w-5 sm:h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Medição correta</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Divida áreas irregulares em retângulos e some.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 sm:p-6 border border-border/50 flex sm:block items-start gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center sm:mb-4 flex-shrink-0">
                <MessageCircle size={16} className="sm:w-5 sm:h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Dúvidas?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Fale conosco pelo WhatsApp para orçamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Calculadora;
