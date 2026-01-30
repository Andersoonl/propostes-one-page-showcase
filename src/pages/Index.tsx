import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import QualitySection from "@/components/QualitySection";
import Footer from "@/components/Footer";
import { COMPANY, CONTACT, SOCIAL } from "@/config";

// Schema.org LocalBusiness para SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.propostes.com.br/#organization",
  name: COMPANY.fullName,
  description: COMPANY.description,
  url: "https://www.propostes.com.br",
  telephone: CONTACT.phones[0].number,
  email: CONTACT.email.address,
  foundingDate: "1992",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.state,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.8767,
    longitude: -38.6247,
  },
  sameAs: [
    SOCIAL.facebook,
    SOCIAL.instagram,
    SOCIAL.youtube,
  ],
  priceRange: "$$",
  image: "https://www.propostes.com.br/og-image.jpg",
  areaServed: {
    "@type": "State",
    name: "Ceará",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produtos Pré-Moldados",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Blocos de Concreto" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pisos Intertravados" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Postes de Concreto" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cruzetas" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Manilhas" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Meio-Fio" } },
    ],
  },
};

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
        <meta property="og:url" content="https://www.propostes.com.br" />
        <meta property="og:image" content="https://www.propostes.com.br/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Propostes - Produtos de Concreto Pré-Moldado" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Propostes | Produtos de Concreto Pré-Moldado" />
        <meta name="twitter:description" content="Fabricante de produtos pré-moldados em concreto de alta qualidade em Fortaleza/CE." />
        <meta name="twitter:image" content="https://www.propostes.com.br/og-image.jpg" />
        <link rel="canonical" href="https://www.propostes.com.br" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
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
