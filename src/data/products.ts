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
  description?: string;
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
      { name: "Bloco de Vedação", dimensions: "9x19x39", image: blocoVedacao9x19x39, specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "39cm" }, description: "Indicado para paredes internas e externas de vedação, com bom rendimento por m² e modulação prática. Ideal para divisórias e fechamentos onde a parede não trabalha como elemento estrutural." },
      { name: "Meio Bloco", dimensions: "9x19x19", image: meioBloco9x19x19, specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "19cm" }, description: "Peça de ajuste para amarrações, arremates e paginação, reduzindo recortes na obra. Facilita encontros de paredes e fechamento de vãos com modulação." },
      { name: "Canaleta Inteira", dimensions: "9x19x39", image: canaletaInteira9x19x39, specs: { resistencia: "3MPa", largura: "9cm", altura: "19cm", comprimento: "39cm" }, description: "Usada para vergas, contravergas e cintas de amarração (com armação e graute quando especificado). Ajuda a distribuir esforços e organizar passagens horizontais no topo de paredes." },
    ],
  },
  {
    id: "blocos-14",
    title: "Blocos - Família 14",
    description: "Blocos estruturais e de vedação com 14cm de largura. Maior resistência para obras de médio porte.",
    icon: Box,
    products: [
      { name: "Bloco de Vedação", dimensions: "14x19x39", image: blocoVedacao14x19x39, specs: { resistencia: "3 MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" }, description: "Vedação com maior espessura, oferecendo melhor desempenho para paredes externas, muros e ambientes que pedem mais robustez. Boa opção quando se busca mais estabilidade e conforto." },
      { name: "Meio Bloco Vedação", dimensions: "14x19x19", image: meioBlocoVedacao14x19x19, specs: { resistencia: "3 MPa", largura: "14cm", altura: "19cm", comprimento: "19cm" }, description: "Ajuste de modulação para paginação, cantos, encontros e arremates. Diminui desperdício e acelera o assentamento." },
      { name: "Bloco Estrutural", dimensions: "14x19x39", image: blocoEstrutural14x19x39, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" }, description: "Indicado para alvenaria estrutural (conforme projeto), permitindo executar paredes portantes com produtividade. Solução que integra estrutura e vedação, reduzindo etapas na obra." },
      { name: "Meio Bloco Estrutural", dimensions: "14x19x19", image: meioBlocoEstrutural14x19x19, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "19cm" }, description: "Complemento para modulação na alvenaria estrutural, facilitando amarrações e ajustes sem improviso. Ajuda a manter o alinhamento e a paginação do projeto." },
      { name: "Canaleta Inteira", dimensions: "14x19x39", image: canaletaInteira14x19x39, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "39cm" }, description: "Peça para cintas, vergas e contravergas em sistemas de alvenaria, pronta para receber armadura e graute quando necessário. Muito usada no topo de paredes, sob lajes e acima de aberturas." },
      { name: "Compensador", dimensions: "14x19x4", image: compensador14x19x4, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "4cm" }, description: "Peça fina para correções de modulação e nivelamento em pontos específicos, evitando cortes de blocos. Útil em ajustes de paginação e fechamento de medidas." },
      { name: "Complemento", dimensions: "14x19x9", image: complemento14x19x9, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "9cm" }, description: "Peça de ajuste para completar vãos e manter a modulação da parede com acabamento mais limpo. Reduz retrabalho em arremates e encontros." },
    ],
  },
  {
    id: "blocos-19",
    title: "Blocos - Família 19",
    description: "Blocos estruturais com 19cm de largura. Alta resistência para grandes obras.",
    icon: Box,
    products: [
      { name: "Bloco Estrutural", dimensions: "19x19x39", image: blocoEstrutural19x19x39, specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "39cm" }, description: "Indicado para alvenaria estrutural e paredes com maior exigência de desempenho e robustez, conforme dimensionamento do projeto. Adequado para obras que pedem maior espessura e estabilidade." },
      { name: "Meio Bloco", dimensions: "19x19x19", image: meioBloco19x19x19, specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "19cm" }, description: "Ajuste de paginação para amarrações, encontros e arremates na família 19. Ajuda a reduzir recortes e manter o alinhamento." },
      { name: "Canaleta Inteira", dimensions: "19x19x39", image: canaletaInteira19x19x39, specs: { resistencia: "6MPa", largura: "19cm", altura: "19cm", comprimento: "39cm" }, description: "Canaleta para vergas, contravergas e cintas com maior espessura, compatível com paredes mais robustas. Facilita a execução de reforços horizontais conforme detalhamento do projeto." },
    ],
  },
  {
    id: "blocos-29",
    title: "Blocos - Família 29",
    description: "Blocos estruturais da família 29 com medidas especiais para obras específicas.",
    icon: Box,
    products: [
      { name: "Bloco Estrutural", dimensions: "14x19x29", image: blocoEstrutural14x19x29, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "29cm" }, description: "Bloco para modulações especiais e fechamento de comprimentos sem recortes, mantendo o padrão do assentamento. Muito usado para ajustar paginação próxima a vãos e encontros." },
      { name: "Meio Bloco", dimensions: "14x19x14", image: meioBloco14x19x14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "14cm" }, description: "Peça de ajuste curto para amarrações e correções finas de modulação. Ajuda a reduzir perdas e improvisos na obra." },
      { name: "Bloco Estrutural", dimensions: "14x19x44", image: blocoEstrutural14x19x44, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "44cm" }, description: "Alternativa para modulação de maior comprimento, aumentando produtividade em trechos retos e reduzindo juntas. Útil quando o projeto prevê paginação compatível com essa medida." },
      { name: "Canaleta Inteira", dimensions: "14x19x29", image: canaletaInteira14x19x29, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "29cm" }, description: "Canaleta para trechos de cinta/verga com modulação 29 cm, facilitando continuidade do alinhamento sem cortes. Recebe armadura e graute quando especificado." },
      { name: "Meia Canaleta", dimensions: "14x19x14", image: meiaCanaleta14x19x14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "19cm", comprimento: "14cm" }, description: "Ideal para arremates e trechos curtos de cinta, especialmente em encontros e bordas. Facilita o fechamento de modulação mantendo função de canaleta." },
      { name: "Meia Canaleta Baixa", dimensions: "14x9x14", image: meiaCanaletaBaixa14x9x14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "9cm", comprimento: "14cm" }, description: "Peça mais baixa para detalhes e ajustes onde não se deseja a altura total, comum em arremates e pontos específicos do projeto. Ajuda a compatibilizar níveis e paginação." },
      { name: "Meio Jota", dimensions: "14x9-19x14", image: meioJota14, specs: { resistencia: "4,5 a 16 MPa", largura: "14cm", altura: "9-19cm", comprimento: "14cm" }, description: "Peça de transição/encaixe para situações de encontro e ajuste geométrico, facilitando amarrações e detalhes construtivos. Útil para reduzir cortes em pontos críticos da alvenaria." },
    ],
  },
  {
    id: "pisos-intertravados",
    title: "Pisos Intertravados",
    description: "Pisos pré-moldados para pavimentação de calçadas, estacionamentos e áreas externas.",
    icon: Grid3X3,
    products: [
      { name: "Piso Retangular", dimensions: "H4", image: pisoRetangularH4, specs: { resistencia: "35MPa", altura: "4cm", tipo: "Retangular" }, description: "Indicado para áreas de passeio e uso leve, com visual tradicional e assentamento simples. Boa escolha para calçadas e áreas internas externas de baixo tráfego." },
      { name: "Piso Retangular", dimensions: "H6", image: pisoRetangularH6, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Retangular" }, description: "Versátil para calçadas, condomínios e áreas com tráfego leve a moderado. Combina bom custo-benefício com resistência adequada para a maioria das áreas comuns." },
      { name: "Piso Retangular", dimensions: "H8", image: pisoRetangularH8, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Retangular" }, description: "Recomendado para áreas com maior solicitação, como estacionamentos, vias internas e acessos com veículos. Maior espessura para melhor desempenho em tráfego mais intenso." },
      { name: "Piso Unistein", dimensions: "H6", image: pisoUnisteinH6, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Unistein" }, description: "Formato que melhora o travamento entre peças, indicado para tráfego leve a moderado com mais estabilidade. Ótima opção para áreas de manobra e locais com esforços horizontais." },
      { name: "Piso Unistein", dimensions: "H8", image: pisoUnisteinH8, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Unistein" }, description: "Indicado para estacionamentos e vias internas com tráfego mais intenso, com excelente intertravamento. Ajuda a reduzir deslocamentos das peças ao longo do tempo." },
      { name: "Piso Unistein", dimensions: "H10", image: pisoUnisteinH10, specs: { resistencia: "35MPa", altura: "10cm", tipo: "Unistein" }, description: "Aplicação em áreas de tráfego pesado e alta solicitação, conforme projeto de base e sub-base. Ideal para pátios operacionais, acessos de caminhões e áreas industriais." },
      { name: "Piso Citypalc", dimensions: "Padrão", image: pisoCitypalc, specs: { resistencia: "35MPa", tipo: "Citypalc" }, description: "Acabamento mais decorativo, indicado para áreas urbanas, calçadas e praças, valorizando o visual da paginação. Une estética e praticidade de manutenção do intertravado." },
      { name: "Pisograma", dimensions: "H8", image: pisograma, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Gramado" }, description: "Piso vazado/gradeado para áreas que combinam resistência e integração com paisagismo, permitindo uso com grama ou brita. Indicado para estacionamentos verdes e áreas de drenagem superficial." },
    ],
  },
  {
    id: "pisos-intertravados-permeaveis",
    title: "Pisos Intertravados Permeáveis",
    description: "Pisos pré-moldados permeáveis para pavimentação drenante de calçadas, estacionamentos e áreas externas.",
    icon: Grid3X3,
    products: [
      { name: "Piso Retangular Drenante", dimensions: "H6", image: pisoRetangularH6Drenante, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Drenante" }, description: "Indicado para calçadas e áreas leves que precisam favorecer infiltração e reduzir lâmina d'água. Ajuda no controle de escoamento superficial e poças." },
      { name: "Piso Retangular Drenante", dimensions: "H8", image: pisoRetangularH8Drenante, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Drenante" }, description: "Para estacionamentos e áreas com tráfego moderado onde a drenagem é requisito importante. Combina resistência com melhor gestão de água pluvial." },
      { name: "Piso Citypalc Drenante", dimensions: "Padrão", image: pisoCitypalcDrenante, specs: { resistencia: "35MPa", tipo: "Drenante" }, description: "Une estética e permeabilidade para áreas urbanas, calçadas e praças com exigência de drenagem. Facilita manutenção e melhora conforto em dias de chuva." },
      { name: "Piso Unistein Drenante", dimensions: "H6", image: pisoUnisteinH6Drenante, specs: { resistencia: "35MPa", altura: "6cm", tipo: "Drenante" }, description: "Boa opção para áreas com manobras e necessidade de travamento superior, mantendo capacidade drenante. Indicado para condomínios e áreas comerciais." },
      { name: "Piso Unistein Drenante", dimensions: "H8", image: pisoUnisteinH8Drenante, specs: { resistencia: "35MPa", altura: "8cm", tipo: "Drenante" }, description: "Indicado para estacionamentos e acessos com maior solicitação, com foco em intertravamento e drenagem. Solução eficiente para reduzir escorrimento em áreas pavimentadas." },
    ],
  },
  {
    id: "meio-fio",
    title: "Meio Fio",
    description: "Meio-fios pré-moldados para urbanização e delimitação de vias.",
    icon: Minus,
    products: [
      { name: "Meio Fio de Concreto", dimensions: "Padrão", image: meioFio1, specs: { resistencia: "35MPa", tipo: "Padrão" }, description: "Indicado para delimitar calçadas, canteiros e bordas de pavimento, organizando o acabamento e protegendo o intertravado. Ajuda a conter o conjunto e manter alinhamento." },
      { name: "Meio Fio de Concreto", dimensions: "Tipo 2", image: meioFio2, specs: { resistencia: "35MPa", tipo: "Alternativo" }, description: "Mesma função de contenção e delimitação, com variação de perfil para adequar ao padrão da via/projeto. Ideal para guias, sarjetas e separação de áreas." },
    ],
  },
  {
    id: "postes",
    title: "Postes",
    description: "Postes de concreto para redes de distribuição elétrica.",
    icon: Zap,
    products: [
      { name: "Poste Circular", dimensions: "Diversos tamanhos", image: posteCircular, specs: { tipo: "Circular", material: "Concreto Armado" }, description: "Usado para iluminação, cercamentos e aplicações diversas em áreas urbanas e rurais, com boa durabilidade e baixa manutenção. Adequado para instalações conforme projeto elétrico." },
      { name: "Poste Duplo T", dimensions: "Diversos tamanhos", image: posteDuploT, specs: { tipo: "Duplo T", material: "Concreto Armado" }, description: "Indicado para redes e estruturas que exigem maior rigidez e capacidade de suporte, conforme especificação. Muito usado em aplicações elétricas/estruturais onde o perfil \"T\" favorece montagem." },
    ],
  },
  {
    id: "cruzetas",
    title: "Cruzetas",
    description: "Cruzetas de concreto para redes de distribuição elétrica.",
    icon: Zap,
    products: [
      { name: "Cruzeta Beco", dimensions: "1,70m", image: cruzetaBeco, specs: { comprimento: "1,70m", tipo: "Beco" }, description: "Indicada para montagem de rede em espaços mais restritos, com vão menor, conforme padrão do projeto/concessionária. Facilita instalação em locais com limitações de faixa." },
      { name: "Cruzeta Meio Beco", dimensions: "1,90m", image: cruzetaMeioBeco, specs: { comprimento: "1,90m", tipo: "Meio Beco" }, description: "Opção intermediária para adequar vãos e geometria da rede, mantendo padronização. Usada conforme necessidade de afastamentos e ferragens." },
      { name: "Cruzeta Normal", dimensions: "1,90m", image: cruzetaNormal, specs: { comprimento: "1,90m", tipo: "Normal" }, description: "Aplicação comum em estruturas de rede para suportar isoladores e condutores, seguindo especificações. Solução padrão para montagem de distribuição." },
      { name: "Cruzeta Reta", dimensions: "2,35m", image: cruzetaReta, specs: { comprimento: "2,35m", tipo: "Reta" }, description: "Indicada para vãos maiores e necessidade de maior afastamento entre condutores, conforme projeto. Adequada para trechos que exigem geometria mais aberta." },
      { name: "Cruzeta Spacer", dimensions: "Padrão", image: cruzetaSpacer, specs: { tipo: "Spacer", material: "Concreto" }, description: "Usada em configurações com espaçadores, ajudando a manter afastamentos e estabilidade do conjunto. Indicada para projetos que pedem controle de posição dos cabos." },
    ],
  },
  {
    id: "caixa-passagem-tampa",
    title: "Caixa de Passagem e Tampa",
    description: "Caixas de passagem e tampas para infraestrutura urbana.",
    icon: CircleDot,
    products: [
      { name: "Caixa de Passagem", dimensions: "Com e sem tampa", image: caixaPassagem, specs: { tipo: "Passagem", material: "Concreto" }, description: "Usada para inspeção, derivação e organização de redes elétricas/telecom/drenagem leve (conforme aplicação), facilitando manutenção sem quebrar o piso. Ideal para áreas externas e internas, com instalação rápida." },
      { name: "Tampa para Caixa de Passagem", dimensions: "Padrão", image: tampaPassagem, specs: { tipo: "Tampa", material: "Concreto" }, description: "Tampa de reposição/acabamento para fechamento seguro da caixa, protegendo a rede e garantindo melhor estética. Facilita padronização e manutenção do sistema." },
    ],
  },
  {
    id: "manilhas",
    title: "Manilhas",
    description: "Manilhas de concreto para drenagem e saneamento.",
    icon: CircleDot,
    products: [
      { name: "Manilha Ponta e Bolsa", dimensions: "Diversos diâmetros", image: manilha, specs: { resistencia: "Classe PA1", tipo: "Ponta e Bolsa" }, description: "Indicada para redes de drenagem e escoamento (pluvial e outras aplicações conforme projeto), com encaixe tipo ponta e bolsa para montagem mais prática. Ajuda a garantir alinhamento e continuidade da tubulação com boa durabilidade." },
    ],
  },
];
