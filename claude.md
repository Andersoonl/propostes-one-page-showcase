# Propostes - Instruções do Projeto

## Visão Geral

Site institucional para **Propostes**, empresa de pré-moldados de concreto. O projeto é um showcase B2B focado em apresentação de produtos, credibilidade da empresa e conversão via WhatsApp.

## Stack Tecnológica

- **Framework**: React 18 + TypeScript 5
- **Build**: Vite 5 com SWC
- **Estilização**: Tailwind CSS 3 + tailwindcss-animate
- **Componentes UI**: shadcn/ui (50+ componentes em `src/components/ui/`)
- **Ícones**: Lucide React
- **Roteamento**: React Router DOM 6
- **SEO**: React Helmet Async

## Estrutura de Pastas

```
src/
├── assets/
│   ├── drone/          # Imagens da hero section
│   ├── institucional/  # Galeria da empresa
│   └── products/       # Fotos dos produtos
├── components/
│   ├── ui/             # Componentes shadcn/ui (não editar diretamente)
│   ├── Header.tsx      # Navegação principal
│   ├── Footer.tsx      # Rodapé
│   ├── HeroSection.tsx # Seção principal da home
│   ├── ProductCard.tsx # Card reutilizável de produto
│   └── ...
├── pages/
│   ├── Index.tsx       # Página inicial
│   ├── Produtos.tsx    # Catálogo completo
│   ├── SobreNos.tsx    # Sobre a empresa
│   └── NotFound.tsx    # Página 404
├── hooks/              # Hooks customizados
├── lib/                # Utilitários
└── index.css           # Estilos globais + Tailwind
```

## Rotas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | Index.tsx | Home com hero, produtos em destaque e clientes |
| `/produtos` | Produtos.tsx | Catálogo completo com 70+ produtos |
| `/sobre-nos` | SobreNos.tsx | História, certificações e galeria |

## Paleta de Cores

Definida em `tailwind.config.ts`:

- **Navy (primária)**: `hsl(220 50% 32%)` - Azul escuro institucional
- **Turquoise (secundária)**: `hsl(174 50% 50%)` - Verde-água para destaques
- **Concrete**: Tons de cinza para textura de concreto

Uso no código:
```jsx
<div className="bg-navy-600 text-turquoise-400" />
```

## Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (`ProductCard.tsx`)
- **Seções**: Sufixo `Section` (`HeroSection.tsx`)
- **Páginas**: PascalCase descritivo (`SobreNos.tsx`)

### Imports
Usar alias `@/` para imports:
```typescript
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
```

### Estilização
- Priorizar classes Tailwind
- Classes customizadas disponíveis em `index.css`:
  - `.text-gradient` - Texto com gradiente
  - `.bg-navy-gradient` - Fundo gradiente primário
  - `.bg-construction-texture` - Textura de blocos de concreto

### Animações
Padrão de animação com delay escalonado:
```jsx
<div
  className="animate-fade-up"
  style={{ animationDelay: `${0.1 * index}s` }}
/>
```

## SEO

Cada página deve incluir meta tags via Helmet:
```jsx
<Helmet>
  <title>Título | Propostes</title>
  <meta name="description" content="Descrição da página" />
  <meta name="keywords" content="palavras, chave" />
  <meta property="og:title" content="Título" />
  <meta property="og:description" content="Descrição" />
</Helmet>
```

## Responsividade

Breakpoints principais:
- Mobile: padrão (< 768px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Grande: `xl:` (1280px+)

Alturas do Header:
- Mobile: 54px
- Desktop: 68px

## Estrutura de Dados dos Produtos

Localizada em `src/pages/Produtos.tsx`:
```typescript
{
  id: string;           // Identificador da categoria
  title: string;        // Nome de exibição
  description: string;  // Descrição da categoria
  icon: LucideIcon;     // Ícone Lucide
  products: [{
    name: string;
    dimensions: string;
    image: string;      // Imagem importada
    specs: Record<string, string | number>;
  }]
}
```

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificar código
```

## Contato/CTA Principal

O CTA principal é via WhatsApp. Número atual configurado nos componentes:
- Telefone: (11) 4719-0000
- WhatsApp: (11) 4719-0000 (link: `https://wa.me/551147190000`)

## Certificações

A empresa possui:
- ISO 9001
- Selo ABCP

Logos em `src/assets/` - manter visíveis nas páginas para credibilidade.

## Notas para Desenvolvimento

1. **Imagens**: Sempre importar assets via import, não usar paths diretos
2. **Componentes UI**: shadcn/ui em `components/ui/` - adicionar novos via CLI se necessário
3. **Animações**: Usar classes `animate-fade-up`, `animate-fade-in` definidas no Tailwind
4. **Mobile-first**: Sempre desenvolver pensando primeiro em mobile
5. **Performance**: Otimizar imagens antes de adicionar ao projeto

## TODO / Melhorias Futuras

- [ ] _Adicione aqui suas tarefas pendentes_
- [ ] _Exemplo: Implementar formulário de contato_
- [ ] _Exemplo: Adicionar mais fotos de produtos_