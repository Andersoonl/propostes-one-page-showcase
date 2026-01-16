import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Factory, MapPin, Users, Target, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import seloIso9001 from "@/assets/selo iso9001.png";
import seloAbcp from "@/assets/selo abcp.jpg";
import fabrica1 from "@/assets/institucional/Fábrica Propostes 2022 (31).jpg";
import fabrica2 from "@/assets/institucional/Fábrica Propostes 2022 (35).jpg";
import fabrica3 from "@/assets/institucional/Fábrica Propostes 2022 (39).jpg";
import img4076 from "@/assets/institucional/IMG_4076.JPG";
import institucional1 from "@/assets/institucional/rgalizav- Propostes032023--103.jpg";
import institucional2 from "@/assets/institucional/rgalizav- Propostes032023--105.jpg";
import institucional3 from "@/assets/institucional/rgalizav- Propostes032023--115.jpg";
import institucional4 from "@/assets/institucional/rgalizav- Propostes032023--123.jpg";
import institucional5 from "@/assets/institucional/rgalizav- Propostes032023--124.jpg";
import institucional6 from "@/assets/institucional/rgalizav- Propostes032023--127.jpg";
import institucional7 from "@/assets/institucional/rgalizav- Propostes032023--139.jpg";
import institucional8 from "@/assets/institucional/rgalizav- Propostes032023--147.jpg";
import institucional9 from "@/assets/institucional/rgalizav- Propostes032023--153.jpg";
import institucional10 from "@/assets/institucional/rgalizav- Propostes032023--155.jpg";
import institucional11 from "@/assets/institucional/rgalizav- Propostes032023--16.jpg";
import institucional12 from "@/assets/institucional/rgalizav- Propostes032023--162.jpg";
import institucional13 from "@/assets/institucional/rgalizav- Propostes032023--164.jpg";
import institucional14 from "@/assets/institucional/rgalizav- Propostes032023--171.jpg";
import institucional15 from "@/assets/institucional/rgalizav- Propostes032023--190.jpg";
import institucional16 from "@/assets/institucional/rgalizav- Propostes032023--193.jpg";
import institucional17 from "@/assets/institucional/rgalizav- Propostes032023--221.jpg";
import institucional18 from "@/assets/institucional/rgalizav- Propostes032023--229.jpg";
import institucional19 from "@/assets/institucional/rgalizav- Propostes032023--236.jpg";
import institucional20 from "@/assets/institucional/rgalizav- Propostes032023--237.jpg";
import institucional21 from "@/assets/institucional/rgalizav- Propostes032023--24.jpg";
import institucional22 from "@/assets/institucional/rgalizav- Propostes032023--240.jpg";
import institucional23 from "@/assets/institucional/rgalizav- Propostes032023--246.jpg";
import institucional24 from "@/assets/institucional/rgalizav- Propostes032023--249.jpg";
import institucional25 from "@/assets/institucional/rgalizav- Propostes032023--298.jpg";
import institucional26 from "@/assets/institucional/rgalizav- Propostes032023--304.jpg";
import institucional27 from "@/assets/institucional/rgalizav- Propostes032023--321.jpg";
import institucional28 from "@/assets/institucional/rgalizav- Propostes032023--333.jpg";
import institucional29 from "@/assets/institucional/rgalizav- Propostes032023--41.jpg";
import institucional30 from "@/assets/institucional/rgalizav- Propostes032023--51.jpg";
import institucional31 from "@/assets/institucional/rgalizav- Propostes032023--61.jpg";
import institucional32 from "@/assets/institucional/rgalizav- Propostes032023--62.jpg";
import institucional33 from "@/assets/institucional/rgalizav- Propostes032023--68.jpg";
import institucional34 from "@/assets/institucional/rgalizav- Propostes032023--77.jpg";
import institucional35 from "@/assets/institucional/rgalizav- Propostes032023--84.jpg";
import institucional36 from "@/assets/institucional/rgalizav- Propostes032023--87.jpg";
import institucional37 from "@/assets/institucional/rgalizav- Propostes032023--93.jpg";
import institucional38 from "@/assets/institucional/rgalizav-7982.jpg";

const SobreNos = () => {
  const [api, setApi] = useState<CarouselApi>();

  // Array com todas as imagens para o carrossel
  const galleryImages = [
    fabrica1,
    fabrica2,
    fabrica3,
    img4076,
    institucional1,
    institucional2,
    institucional3,
    institucional4,
    institucional5,
    institucional6,
    institucional7,
    institucional8,
    institucional9,
    institucional10,
    institucional11,
    institucional12,
    institucional13,
    institucional14,
    institucional15,
    institucional16,
    institucional17,
    institucional18,
    institucional19,
    institucional20,
    institucional21,
    institucional22,
    institucional23,
    institucional24,
    institucional25,
    institucional26,
    institucional27,
    institucional28,
    institucional29,
    institucional30,
    institucional31,
    institucional32,
    institucional33,
    institucional34,
    institucional35,
    institucional36,
    institucional37,
    institucional38,
  ];

  // Autoplay do carrossel - muda a cada 4 segundos
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Propostes | Conheça Nossa História</title>
        <meta 
          name="description" 
          content="Conheça a Propostes: fundada em 1992 em Fortaleza/CE, líder em pré-moldados de concreto. Mais de 30 anos de excelência, certificação ISO 9001 e compromisso com qualidade." 
        />
        <meta 
          name="keywords" 
          content="Propostes, história, sobre nós, empresa de concreto, Fortaleza, Ceará, pré-moldados, ISO 9001" 
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 md:pt-40 md:pb-20 text-white relative overflow-hidden"
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
            Quem Somos
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Conheça a história da Propostes, uma empresa líder em pré-moldados de concreto com mais de 30 anos de excelência.
          </p>
        </div>
      </section>

      <main className="py-16 md:py-24">
        {/* Nossa História Section */}
        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-16 bg-secondary"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossa História</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Fundada em 1992, na cidade de Fortaleza, Ceará, a <strong className="text-foreground">Propostes</strong> é uma empresa líder na área de pré-moldados para a construção civil, especializada na fabricação de uma vasta gama de produtos em concreto, incluindo Postes Circulares e Duplo T, Cruzetas, Blocos, Pisos, Manilhas, Meio Fio, entre outros artefatos.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Iniciando sua trajetória com a produção de postes de concreto, a Propostes consolidou sua presença no mercado, fornecendo milhares de postes para diversos estados do Nordeste, incluindo Piauí, Maranhão e, claro, Ceará. Destacando-se como fornecedora estratégica da <strong className="text-foreground">Coelce por mais de uma década</strong>, contribuiu significativamente para o avanço do setor elétrico no estado do Ceará.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Com o passar dos anos, a empresa expandiu sua linha de produtos para atender às demandas crescentes do mercado da construção civil. Investindo em tecnologia de ponta e maquinário de última geração, agora oferece uma ampla variedade de produtos, incluindo blocos e pisos de concreto. Essa expansão permitiu à Propostes atender às principais construtoras e obras em todo o Nordeste, estabelecendo-se como uma referência em qualidade e confiabilidade.
                </p>

                <div className="bg-primary/5 border-l-4 border-secondary p-6 my-8 rounded-r-lg">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Localizada estrategicamente no <strong className="text-foreground">Distrito Industrial de Maracanaú</strong>, em uma área de aproximadamente <strong className="text-foreground">30.000m²</strong>, a Propostes possui instalações modernas e eficientes para a fabricação de seus produtos. Comprometida com a inovação e o desenvolvimento tecnológico, a empresa investe constantemente na capacitação de sua equipe, garantindo a conformidade com as normas regulatórias e a excelência em todos os seus produtos.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Orgulhosamente, todos os artefatos de concreto fabricados pela Propostes passam por <strong className="text-foreground">rigorosos testes e ensaios de qualidade</strong>, assegurando sua segurança e credibilidade. Esse compromisso com a qualidade e a confiabilidade tornou a Propostes uma escolha preferencial para clientes em toda a região.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de Fotos - Carrossel Automático */}
        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <div className="h-1 w-16 bg-secondary"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossa Fábrica em Imagens</h2>
              </div>

              <div className="relative px-8 md:px-0">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src={image} 
                            alt={`Fábrica Propostes - Imagem ${index + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 md:left-4" />
                  <CarouselNext className="right-2 md:right-4" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Certificações Section */}
        <section className="mb-20 md:mb-32 bg-muted/50 py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-1 w-16 bg-secondary"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certificações e Qualidade</h2>
                <div className="h-1 w-16 bg-secondary"></div>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nossa dedicação à excelência é reconhecida internacionalmente
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={seloIso9001} 
                    alt="Certificação ISO 9001" 
                    className="max-w-[200px] h-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Certificação ISO 9001</h3>
                <p className="text-muted-foreground">
                  A Propostes possui a Certificação ISO 9001, reconhecendo nosso compromisso com padrões de qualidade internacionalmente reconhecidos.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={seloAbcp} 
                    alt="Selo ABCP" 
                    className="max-w-[200px] h-auto rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Selo ABCP</h3>
                <p className="text-muted-foreground">
                  Reconhecimento da Associação Brasileira de Cimento Portland pela qualidade e excelência em nossos produtos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <div className="h-1 w-16 bg-secondary"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Diferenciais</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <Factory className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Capacidade Produtiva</h3>
                    <p className="text-muted-foreground">
                      Com uma capacidade produtiva impressionante e uma vasta área fabril, somos reconhecidos como uma das principais empresas do Nordeste em nosso segmento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Qualidade Garantida</h3>
                    <p className="text-muted-foreground">
                      Todos os produtos passam por rigorosos testes e ensaios de qualidade, assegurando segurança e credibilidade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <Target className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Pontualidade e Agilidade</h3>
                    <p className="text-muted-foreground">
                      Reputação de pontualidade e agilidade na entrega, graças à frota própria de caminhões e carretas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <Users className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Desenvolvimento Sustentável</h3>
                    <p className="text-muted-foreground">
                      Contribuímos para o desenvolvimento econômico da região, gerando empregos e promovendo o crescimento sustentável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fundador Section */}
        <section className="mb-20 md:mb-32 bg-primary/5 py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-16 bg-secondary"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossa Liderança</h2>
              </div>

              <div className="bg-background p-8 md:p-10 rounded-lg shadow-sm border border-border">
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Fundada pelo <strong className="text-foreground">Administrador de Empresas Flávio Lima</strong>, a Propostes orgulha-se de seus <strong className="text-foreground">30 anos de história</strong> marcados pela excelência e comprometimento com seus clientes. Com uma reputação de pontualidade, agilidade na entrega (graças à frota própria de caminhões e carretas) e o mais alto padrão de qualidade de produtos no Norte e Nordeste, a empresa continua a liderar o caminho na indústria de artefatos de concreto.
                </p>

                <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
                  <p className="text-foreground text-lg font-medium italic">
                    "Na Propostes, nossa missão é simples: fornecer soluções em concreto de alta qualidade, promovendo o crescimento e o desenvolvimento sustentável de nossos clientes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section 
          className="text-white py-16 md:py-20 relative overflow-hidden"
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-1 w-16 bg-secondary"></div>
                <h2 className="text-3xl md:text-4xl font-bold">Contatos e Localização</h2>
                <div className="h-1 w-16 bg-secondary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-white/70">
                      Loja e Fábrica - Via de Ligação I - 689<br />
                      Distrito Industrial III, Maracanaú, CE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Área Total</h3>
                    <p className="text-white/70">
                      Aproximadamente 30.000m² de instalações modernas e eficientes
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/70 mb-4">
                  <strong className="text-white">Telefones:</strong> (85) 3463-4578 | (85) 3463-4580
                </p>
                <p className="text-white/70 mb-4">
                  <strong className="text-white">WhatsApp:</strong> (85) 99906-6947 | (85) 98188-9898
                </p>
                <p className="text-white/70">
                  <strong className="text-white">E-mail:</strong>{" "}
                  <a href="mailto:comercial@propostes.com.br" className="text-secondary hover:text-secondary/80 transition-colors">
                    comercial@propostes.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SobreNos;
