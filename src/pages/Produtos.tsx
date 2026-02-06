import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Box, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WHATSAPP_CTA, LAYOUT } from "@/config";
import { productCategories } from "@/data/products";

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - LAYOUT.header.heightDesktop;

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

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Produtos - Propostes | Blocos, Pisos e Postes de Concreto</title>
        <meta name="description" content="Catálogo completo de produtos Propostes: blocos de concreto, pisos intertravados, meio-fio, tubos, postes e cruzetas. Qualidade certificada ISO 9001." />
        <meta name="keywords" content="blocos de concreto, pisos intertravados, postes de concreto, meio-fio, tubos de concreto, Fortaleza, Ceará" />
        <meta property="og:title" content="Produtos - Propostes | Blocos, Pisos e Postes de Concreto" />
        <meta property="og:description" content="Catálogo completo de produtos Propostes: blocos de concreto, pisos intertravados, meio-fio, tubos, postes e cruzetas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.propostes.com.br/produtos" />
        <meta property="og:image" content="https://www.propostes.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produtos - Propostes" />
        <meta name="twitter:description" content="Catálogo completo de produtos pré-moldados em concreto." />
        <meta name="twitter:image" content="https://www.propostes.com.br/og-image.jpg" />
      </Helmet>

      <Header />

      <PageHeader
        title="Todos os Produtos"
        description="Conheça nossa linha completa de produtos pré-moldados em concreto. Qualidade certificada ISO 9001 e Selo ABCP."
        icon={Box}
        backLink={{ to: "/", label: "Voltar para Início" }}
      />

      {/* Sticky Navigation Menu */}
      <div
        className={`sticky top-[54px] md:top-[68px] z-40 bg-background/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300`}
      >
        <div className="container py-2 md:py-3">
          <nav className="overflow-x-auto scrollbar-discreet -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 sm:gap-4 md:gap-6 min-w-max">
              {productCategories.map((category) => {
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${category.id}`);
                      if (element) {
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - LAYOUT.header.scrollOffset;
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
                      {'description' in product && product.description && (
                        <p className="text-muted-foreground text-sm">
                          {product.description}
                        </p>
                      )}
                      {product.calculatorRef && (
                        <Link
                          to={`/calculadora?produto=${product.calculatorRef}${product.isDrenante ? '&drenante=1' : ''}`}
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-turquoise-dark transition-colors duration-200"
                        >
                          <Calculator size={14} />
                          Calcular quantidade
                        </Link>
                      )}
                      {/* Specs ocultas visualmente, mantidas para SEO */}
                      <div className="sr-only">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <span key={key}>{key}: {String(value)} </span>
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
            href={WHATSAPP_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-turquoise-dark text-secondary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-accent"
          >
            {WHATSAPP_CTA.text}
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
