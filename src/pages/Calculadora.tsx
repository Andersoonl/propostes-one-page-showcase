import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Calculator, Ruler, Box, Grid3X3, Info, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
      { id: "retangular-h4", name: "Piso Retangular H4", piecesPerSqm: 50, dimensions: "10x20x4cm", sqmPerPallet: 20 },
      { id: "retangular-h6", name: "Piso Retangular H6", piecesPerSqm: 50, dimensions: "10x20x6cm", sqmPerPallet: 14 },
      { id: "retangular-h8", name: "Piso Retangular H8", piecesPerSqm: 50, dimensions: "10x20x8cm", sqmPerPallet: 12 },
      { id: "unistein-h6", name: "Piso Unistein H6", piecesPerSqm: 40, dimensions: "11,5x22,5x6cm", sqmPerPallet: 13.5 },
      { id: "unistein-h8", name: "Piso Unistein H8", piecesPerSqm: 40, dimensions: "11,5x22,5x8cm", sqmPerPallet: 11.25 },
      { id: "unistein-h10", name: "Piso Unistein H10", piecesPerSqm: 40, dimensions: "11,5x22,5x10cm", sqmPerPallet: 9 },
      { id: "cityplac", name: "Piso Cityplac", piecesPerSqm: 4, dimensions: "50x50x5cm", sqmPerPallet: 13 },
      { id: "pisograma", name: "Pisograma H8", piecesPerSqm: 13, dimensions: "60x40x8cm", sqmPerPallet: 11.54 },
    ],
  },
  blocos: {
    title: "Blocos de Concreto",
    icon: Box,
    products: [
      { id: "bloco-9", name: "Bloco 9x19x39", piecesPerSqm: 12.5, dimensions: "9x19x39cm", piecesPerPallet: 192 },
      { id: "bloco-14", name: "Bloco 14x19x39", piecesPerSqm: 12.5, dimensions: "14x19x39cm", piecesPerPallet: 144 },
      { id: "bloco-19", name: "Bloco 19x19x39", piecesPerSqm: 12.5, dimensions: "19x19x39cm", piecesPerPallet: 90 },
      { id: "bloco-14-29", name: "Bloco 14x19x29", piecesPerSqm: 16.5, dimensions: "14x19x29cm", piecesPerPallet: 168 },
      { id: "bloco-14-44", name: "Bloco 14x19x44", piecesPerSqm: 11, dimensions: "14x19x44cm", piecesPerPallet: 108 },
    ],
  },
};

const Calculadora = () => {
  const [inputMode, setInputMode] = useState<"dimensions" | "direct">("dimensions");
  const [inputUnit, setInputUnit] = useState<"sqm" | "pieces">("sqm");
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [directArea, setDirectArea] = useState<string>("");
  const [directPieces, setDirectPieces] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  // Calcula a quantidade de peças digitada diretamente
  const inputPieces = useMemo(() => {
    if (inputUnit !== "pieces") return 0;
    const pieces = parseFloat(directPieces.replace(",", "."));
    if (isNaN(pieces) || pieces <= 0) return 0;
    return pieces;
  }, [inputUnit, directPieces]);

  // Calcula a área total baseado no modo de entrada (quando entrada é em m²)
  const totalArea = useMemo(() => {
    if (inputUnit === "pieces") return 0; // Será calculado baseado nas peças
    if (inputMode === "direct") {
      const area = parseFloat(directArea.replace(",", "."));
      if (isNaN(area) || area <= 0) return 0;
      return area;
    }
    const l = parseFloat(length.replace(",", "."));
    const w = parseFloat(width.replace(",", "."));
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return 0;
    return l * w;
  }, [inputMode, inputUnit, length, width, directArea]);

  // Encontra o produto selecionado
  const selectedProduct = useMemo(() => {
    if (!category || !product) return null;
    const cat = calculableProducts[category as keyof typeof calculableProducts];
    if (!cat) return null;
    return cat.products.find((p) => p.id === product);
  }, [category, product]);

  // Calcula quantidade de peças (quando entrada é em m²)
  const piecesNeeded = useMemo(() => {
    if (inputUnit === "pieces") return inputPieces;
    if (!selectedProduct || totalArea <= 0) return 0;
    return Math.ceil(totalArea * selectedProduct.piecesPerSqm);
  }, [selectedProduct, totalArea, inputUnit, inputPieces]);

  // Calcula área total quando entrada é em peças
  const calculatedArea = useMemo(() => {
    if (inputUnit === "sqm") return totalArea;
    if (!selectedProduct || inputPieces <= 0) return 0;
    return inputPieces / selectedProduct.piecesPerSqm;
  }, [inputUnit, totalArea, selectedProduct, inputPieces]);

  // Área efetiva para cálculos (usada em palletInfo e WhatsApp)
  const effectiveArea = inputUnit === "pieces" ? calculatedArea : totalArea;

  // Calcula quantidade de pallets (decimal) e quanto falta para completar
  const palletInfo = useMemo(() => {
    if (!selectedProduct || effectiveArea <= 0) return null;

    // Para pisos: calcula baseado em m² por pallet
    if (category === "pisos") {
      const product = selectedProduct as typeof selectedProduct & { sqmPerPallet?: number };
      if (!product.sqmPerPallet) return null;
      const exactPallets = effectiveArea / product.sqmPerPallet;
      const wholePallets = Math.ceil(exactPallets);
      const sqmToComplete = (wholePallets * product.sqmPerPallet) - effectiveArea;
      return {
        exact: exactPallets,
        sqmToComplete: sqmToComplete > 0.01 ? sqmToComplete : 0, // evita valores muito pequenos por arredondamento
      };
    }

    // Para blocos: calcula baseado em peças por pallet
    if (category === "blocos") {
      const product = selectedProduct as typeof selectedProduct & { piecesPerPallet?: number };
      if (!product.piecesPerPallet) return null;
      const exactPallets = piecesNeeded / product.piecesPerPallet;
      const wholePallets = Math.ceil(exactPallets);
      const piecesToComplete = (wholePallets * product.piecesPerPallet) - piecesNeeded;
      // Converte peças faltantes para m²
      const sqmToComplete = piecesToComplete / selectedProduct.piecesPerSqm;
      return {
        exact: exactPallets,
        sqmToComplete: sqmToComplete > 0.01 ? sqmToComplete : 0,
      };
    }

    return null;
  }, [selectedProduct, effectiveArea, category, piecesNeeded]);

  // Produtos da categoria selecionada
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    const cat = calculableProducts[category as keyof typeof calculableProducts];
    return cat?.products || [];
  }, [category]);

  // Reset produto quando categoria muda e define inputUnit padrão
  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setProduct("");
    // Define a unidade de entrada padrão baseada na categoria
    if (value === "pisos") {
      setInputUnit("sqm");
    } else if (value === "blocos") {
      setInputUnit("pieces");
    }
  };

  // Gera mensagem para WhatsApp
  const getWhatsAppMessage = () => {
    if (!selectedProduct || effectiveArea <= 0) return WHATSAPP_CTA.href;
    const areaInfo = inputUnit === "pieces"
      ? `${effectiveArea.toFixed(2)}m² (calculado a partir de ${piecesNeeded} peças)`
      : inputMode === "dimensions"
        ? `${effectiveArea.toFixed(2)}m² (${length}m x ${width}m)`
        : `${effectiveArea.toFixed(2)}m²`;
    const palletText = palletInfo !== null
      ? `\n📦 Pallets estimados: ${palletInfo.exact.toFixed(2)}`
      : "";
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para:\n\n` +
      `📏 Área: ${areaInfo}\n` +
      `📦 Produto: ${selectedProduct.name}\n` +
      `🔢 Quantidade estimada: ${piecesNeeded} peças` +
      palletText +
      `\n\nPodem me ajudar?`
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

      <PageHeader
        title="Calculadora"
        description="Calcule quantas peças ou metros quadrados você precisa para sua obra."
        icon={Calculator}
        backLink={{ to: "/", label: "Voltar para Início" }}
      />

      {/* Calculator Section */}
      <main className="py-6 sm:py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
            {/* Input Section */}
            <div className="space-y-4 sm:space-y-6">
              {/* Product Selection */}
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg flex items-center justify-center">
                    <Box size={18} className="text-secondary sm:w-5 sm:h-5" />
                  </div>
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
                    <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-4 border border-secondary/20 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Info size={14} className="text-secondary flex-shrink-0" />
                        <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Produto selecionado</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-sm font-bold text-foreground">{selectedProduct.dimensions}</span>
                        <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/50" />
                        <span className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{selectedProduct.piecesPerSqm}</span> peças por m²
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Area/Quantity Input */}
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg flex items-center justify-center">
                    <Ruler size={18} className="text-secondary sm:w-5 sm:h-5" />
                  </div>
                  {inputUnit === "sqm" ? "Área" : "Quantidade"}
                </h2>

                {/* Input Unit Toggle */}
                <div className="flex gap-1.5 p-1.5 bg-muted/60 rounded-xl mb-4 border border-border/50">
                  <button
                    onClick={() => setInputUnit("sqm")}
                    className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                      inputUnit === "sqm"
                        ? "bg-white text-foreground shadow-md border border-border/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                    }`}
                  >
                    Metro quadrado
                  </button>
                  <button
                    onClick={() => setInputUnit("pieces")}
                    className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                      inputUnit === "pieces"
                        ? "bg-white text-foreground shadow-md border border-border/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                    }`}
                  >
                    Peças
                  </button>
                </div>

                {inputUnit === "sqm" ? (
                  <>
                    {/* Toggle Tabs for m² input mode */}
                    <div className="flex gap-1.5 p-1.5 bg-muted/40 rounded-lg mb-5 border border-border/30">
                      <button
                        onClick={() => setInputMode("dimensions")}
                        className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-200 ${
                          inputMode === "dimensions"
                            ? "bg-white text-foreground shadow-sm border border-border/50"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                        }`}
                      >
                        Calcular (C x L)
                      </button>
                      <button
                        onClick={() => setInputMode("direct")}
                        className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-200 ${
                          inputMode === "direct"
                            ? "bg-white text-foreground shadow-sm border border-border/50"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                        }`}
                      >
                        Já sei o m²
                      </button>
                    </div>

                    <div className="space-y-4">
                      {inputMode === "dimensions" ? (
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
                      ) : (
                        <div>
                          <Label htmlFor="directArea" className="text-xs sm:text-sm font-medium text-muted-foreground">
                            Metragem total (m²)
                          </Label>
                          <Input
                            id="directArea"
                            type="text"
                            inputMode="decimal"
                            placeholder="Ex: 50"
                            value={directArea}
                            onChange={(e) => setDirectArea(e.target.value)}
                            className="mt-1.5 h-12 text-base"
                          />
                        </div>
                      )}

                      {/* Area Display */}
                      <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-4 sm:p-5 border border-secondary/20 shadow-sm">
                        <div className="text-xs sm:text-sm text-muted-foreground mb-1 font-medium">Área total</div>
                        <div className="text-3xl sm:text-4xl font-bold text-primary">
                          {totalArea > 0 ? (
                            <>
                              {totalArea.toFixed(2)} <span className="text-primary">m²</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground/50">— m²</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="directPieces" className="text-xs sm:text-sm font-medium text-muted-foreground">
                        Quantidade de peças
                      </Label>
                      <Input
                        id="directPieces"
                        type="text"
                        inputMode="numeric"
                        placeholder="Ex: 500"
                        value={directPieces}
                        onChange={(e) => setDirectPieces(e.target.value)}
                        className="mt-1.5 h-12 text-base"
                      />
                    </div>

                    {/* Pieces Display */}
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-4 sm:p-5 border border-secondary/20 shadow-sm">
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1 font-medium">Quantidade de peças</div>
                      <div className="text-3xl sm:text-4xl font-bold text-primary">
                        {inputPieces > 0 ? (
                          <>
                            {inputPieces.toLocaleString("pt-BR")} <span className="text-primary">peças</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground/50">— peças</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-card to-secondary/5 border-2 border-secondary/40 rounded-xl p-4 sm:p-6 md:sticky md:top-24 shadow-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-lg flex items-center justify-center shadow-md">
                    <Calculator size={18} className="text-secondary-foreground sm:w-5 sm:h-5" />
                  </div>
                  Resultado
                </h2>

                {effectiveArea > 0 && selectedProduct ? (
                  <div className="space-y-4 sm:space-y-6">
                    {/* Main Result */}
                    <div className="bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/5 rounded-xl p-5 sm:p-8 text-center border border-secondary/30 shadow-inner">
                      {inputUnit === "sqm" ? (
                        <>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wide font-medium">
                            Quantidade necessária
                          </div>
                          <div className="text-5xl sm:text-6xl font-bold text-primary mb-2 sm:mb-3 drop-shadow-sm">
                            {piecesNeeded.toLocaleString("pt-BR")}
                          </div>
                          <div className="text-lg sm:text-xl text-foreground font-semibold">
                            peças
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wide font-medium">
                            Área calculada
                          </div>
                          <div className="text-5xl sm:text-6xl font-bold text-primary mb-2 sm:mb-3 drop-shadow-sm">
                            {calculatedArea.toFixed(2)}
                          </div>
                          <div className="text-lg sm:text-xl text-foreground font-semibold">
                            m²
                          </div>
                        </>
                      )}
                    </div>

                    {/* Details */}
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                      <div className="flex justify-between items-center py-2 border-b border-border/50 gap-2">
                        <span className="text-muted-foreground text-xs sm:text-sm">Produto</span>
                        <span className="font-medium text-foreground text-right text-xs sm:text-sm">
                          {selectedProduct.name}
                        </span>
                      </div>
                      {inputUnit === "sqm" ? (
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-muted-foreground text-xs sm:text-sm">Área</span>
                          <span className="font-medium text-foreground text-xs sm:text-sm">
                            {effectiveArea.toFixed(2)} m²
                          </span>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-muted-foreground text-xs sm:text-sm">Peças</span>
                          <span className="font-medium text-foreground text-xs sm:text-sm">
                            {piecesNeeded.toLocaleString("pt-BR")} peças
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-xs sm:text-sm">Rendimento</span>
                        <span className="font-medium text-foreground text-xs sm:text-sm">
                          {selectedProduct.piecesPerSqm} peças/m²
                        </span>
                      </div>
                      {palletInfo !== null && (
                        <div className="py-2 bg-gradient-to-r from-secondary/10 to-transparent -mx-2 px-2 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground text-xs sm:text-sm">Pallets</span>
                            <span className="font-bold text-secondary text-xs sm:text-sm">
                              {palletInfo.exact.toFixed(2)} {palletInfo.exact <= 1 ? "pallet" : "pallets"}
                            </span>
                          </div>
                          {palletInfo.sqmToComplete > 0 && (
                            <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 text-right">
                              Faltam <span className="font-semibold text-secondary">{palletInfo.sqmToComplete.toFixed(2)} m²</span> para completar {Math.ceil(palletInfo.exact)} {Math.ceil(palletInfo.exact) === 1 ? "pallet" : "pallets"}
                            </div>
                          )}
                        </div>
                      )}
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
                  <div className="text-center py-10 sm:py-14">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-inner">
                      <Calculator size={28} className="sm:w-10 sm:h-10 text-muted-foreground/40" />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base px-4 font-medium">
                      Preencha os campos ao lado para calcular
                    </p>
                    <p className="text-muted-foreground/60 text-xs sm:text-sm mt-2">
                      {inputUnit === "sqm" ? "Informe a área e selecione o produto" : "Informe a quantidade de peças e selecione o produto"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="group bg-gradient-to-br from-card to-primary/5 rounded-xl p-5 sm:p-6 border border-border shadow-md hover:shadow-lg hover:border-secondary/30 transition-all duration-300 flex sm:block items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary/30 group-hover:to-secondary/10 rounded-xl flex items-center justify-center sm:mb-4 flex-shrink-0 transition-all duration-300">
                <Info size={18} className="sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">Dica importante</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Considere adicionar <span className="font-semibold text-secondary">10%</span> para perdas com recortes.
                </p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-card to-primary/5 rounded-xl p-5 sm:p-6 border border-border shadow-md hover:shadow-lg hover:border-secondary/30 transition-all duration-300 flex sm:block items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary/30 group-hover:to-secondary/10 rounded-xl flex items-center justify-center sm:mb-4 flex-shrink-0 transition-all duration-300">
                <Ruler size={18} className="sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">Medição correta</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Divida áreas irregulares em retângulos e some os resultados.
                </p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-card to-primary/5 rounded-xl p-5 sm:p-6 border border-border shadow-md hover:shadow-lg hover:border-secondary/30 transition-all duration-300 flex sm:block items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary/30 group-hover:to-secondary/10 rounded-xl flex items-center justify-center sm:mb-4 flex-shrink-0 transition-all duration-300">
                <MessageCircle size={18} className="sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">Dúvidas?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Fale conosco pelo <span className="font-semibold text-secondary">WhatsApp</span> para orçamento personalizado.
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
