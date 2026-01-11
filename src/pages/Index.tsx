import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import QualitySection from "@/components/QualitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Propostes | Produtos de Concreto Pré-Moldado em Fortaleza</title>
        <meta 
          name="description" 
          content="Propostes: fabricante de produtos de concreto pré-moldado em Fortaleza/CE. Pisos, blocos, postes, cruzetas, manilhas e meio-fio com qualidade ISO 9001." 
        />
        <meta 
          name="keywords" 
          content="concreto pré-moldado, pisos de concreto, blocos de concreto, postes de concreto, Fortaleza, Ceará, pré-moldados, construção civil" 
        />
        <meta name="author" content="Propostes" />
        <meta property="og:title" content="Propostes | Produtos de Concreto Pré-Moldado" />
        <meta 
          property="og:description" 
          content="Fabricante de produtos pré-moldados em concreto de alta qualidade em Fortaleza/CE." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <link rel="canonical" href="https://www.propostes.com.br" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ClientsSection />
        <QualitySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
