import { Box, Grid3X3, Zap, Minus, CircleDot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

// Types
export interface ProductSpec {
  [key: string]: string | number;
}

export interface Product {
  name: string;
  dimensions: string;
  image: string;
  specs: ProductSpec;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  products: Product[];
}

// Product Categories Data
export const productCategories: ProductCategory[] = [
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
