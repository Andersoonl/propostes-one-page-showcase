/**
 * Configurações centralizadas do site Propostes
 * Edite este arquivo para atualizar informações de contato e URLs em todo o site
 */

export const COMPANY = {
  name: "Propostes",
  fullName: "Propostes Pré-Moldados",
  description: "Fabricante de produtos pré-moldados em concreto de alta qualidade",
  foundedYear: 1992,
  location: "Fortaleza/CE",
  factoryArea: "30.000m²",
} as const;

/** Calcula anos de negócio em runtime (não em build time) */
export const getYearsInBusiness = () => new Date().getFullYear() - COMPANY.foundedYear;

export const CONTACT = {
  phones: [
    { number: "(85) 3463-4578", href: "tel:+558534634578" },
    { number: "(85) 3463-4580", href: "tel:+558534634580" },
  ],
  whatsapp: [
    { number: "(85) 99906-6947", href: "https://wa.me/5585999066947" },
    { number: "(85) 98188-9898", href: "https://wa.me/5585981889898" },
  ],
  email: {
    address: "comercial@propostes.com.br",
    href: "mailto:comercial@propostes.com.br",
  },
  address: {
    street: "Via de Ligação I - 689",
    neighborhood: "Distrito Industrial III",
    city: "Maracanaú",
    state: "CE",
    full: "Loja e Fábrica - Via de Ligação I - 689, Distrito Industrial III, Maracanaú, CE",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+de+Liga%C3%A7%C3%A3o+I+-+689,+Distrito+Industrial+III,+Maracana%C3%BA,+CE",
  },
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/propostes/?locale=pt_BR",
  instagram: "https://www.instagram.com/propostes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  youtube: "https://www.youtube.com/watch?v=ckS5waT7xk0",
} as const;

export const WHATSAPP_CTA = {
  href: CONTACT.whatsapp[0].href,
  text: "Solicitar Orçamento via WhatsApp",
} as const;

// Formata telefones para exibição em linha
export const formatPhonesInline = () =>
  CONTACT.phones.map(p => p.number).join(" | ");

export const formatWhatsappInline = () =>
  CONTACT.whatsapp.map(p => p.number).join(" | ");

// Layout constants
export const LAYOUT = {
  header: {
    heightMobile: 54,  // px
    heightDesktop: 68, // px
    scrollOffset: 88,  // px - offset para scroll suave considerando header sticky
  },
} as const;
