# Template: Marketplace de Moda Moderno - Next.js + HeroUI

## 📋 Visão Geral

Este guia documenta a estrutura completa de uma página de marketplace de moda moderna, desenvolvida com Next.js 16, HeroUI 2.8.5 e Tailwind CSS V4. Use este template para criar páginas semelhantes ou solicitar ao Cascade a criação de marketplaces de moda.

---

## 🎯 Características Principais

### Design
- ✅ **Navbar transparente** com backdrop blur e font Roboto
- ✅ **Hero Section** com carrossel fullscreen de wallpapers
- ✅ **Cards de produtos** com efeito glass e glass footer
- ✅ **3 seções personalizadas** modernas e responsivas
- ✅ **Footer completo** com gradientes e links organizados
- ✅ **Gradientes modernos** em backgrounds
- ✅ **Paleta de cores criativa** (pink, purple, indigo)

### Funcionalidades
- ✅ **Animações suaves** de 500ms com Framer Motion
- ✅ **Totalmente responsivo** (mobile-first)
- ✅ **Dark mode integrado** com tema do projeto
- ✅ **Performance otimizada** com lazy loading
- ✅ **Carrossel automático** com controles manuais
- ✅ **Fonte Roboto** aplicada em todos os componentes

---

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   ├── marketplace/
│   │   └── page.tsx                    # Página principal do marketplace
│   ├── layout.tsx                      # Layout com fonte Roboto
│   └── globals.css                     # CSS global com tema
├── components/
│   └── marketplace/
│       ├── MarketplaceNavbar.tsx       # Navbar transparente
│       ├── HeroCarousel.tsx            # Carrossel hero fullscreen
│       ├── ProductCard.tsx             # Card de produto com glass effect
│       ├── FeaturedSection.tsx         # Seção 1 - Coleção Exclusiva
│       ├── TrendingSection.tsx         # Seção 2 - Tendências
│       ├── NewsletterSection.tsx       # Seção 3 - Newsletter
│       └── MarketplaceFooter.tsx       # Footer moderno
```

---

## 🚀 Prompt para Cascade

Use este prompt para solicitar a criação de uma página marketplace de moda:

```
Desenvolva uma página completa de marketplace de moda moderno, contendo:

1. HeroUI Navbar no top, transparente, com menus visíveis e fonte Roboto
2. Hero Section com carrossel de wallpapers full-width
3. HeroUI Cards personalizados com efeito glass e glass footer
4. 3 seções personalizadas modernas
5. Footer moderno e responsivo

Requisitos:
- Todos os componentes modernos, responsivos e mobile-first
- Animações suaves de 500ms
- Totalmente integrado com o tema do projeto
- Gradientes modernos no background
- Paleta de cores: pink, purple, indigo
- Fonte Roboto em todos os textos
- Dark mode suportado
- Performance otimizada

Teste a implementação e valide interface, desempenho e integração.
Crie documentação em docs/guides como template reutilizável.
```

---

## 🎨 Paleta de Cores

### Gradientes Principais
```css
/* Hero/CTA Buttons */
background: linear-gradient(to-r, from-pink-500, to-purple-500);

/* Newsletter Section */
background: linear-gradient(to-br, from-purple-500, via-pink-500, to-indigo-500);

/* Featured Section Background */
background: linear-gradient(to-br, from-pink-50, via-purple-50, to-indigo-50);

/* Footer */
background: linear-gradient(to-br, from-gray-900, via-purple-900/20, to-gray-900);
```

### Cores Base
- **Pink:** `#ec4899` (pink-500)
- **Purple:** `#a855f7` (purple-500)
- **Indigo:** `#6366f1` (indigo-500)
- **Gray Dark:** `#111827` (gray-900)

---

## 📦 Componentes Detalhados

### 1. MarketplaceNavbar

**Características:**
- Transparente com backdrop-blur-md
- Borda inferior com border-white/10
- Logo com gradiente pink-purple-indigo
- Menu desktop: 5 links (Novidades, Masculino, Feminino, Acessórios, Promoções)
- Botões: Entrar (flat) e Cadastrar (gradient)
- Theme switch integrado
- Menu mobile com NavbarMenuToggle

**Código exemplo:**
```tsx
<Navbar
  maxWidth="full"
  className="bg-transparent backdrop-blur-md border-b border-white/10"
>
  {/* Logo com gradiente */}
  <p className="font-roboto font-bold text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
    FASHION
  </p>
  
  {/* Menu items */}
  <NavbarContent className="hidden sm:flex gap-8">
    {menuItems.map((item) => (
      <Link className="font-roboto text-foreground hover:text-primary transition-colors duration-500">
        {item.name}
      </Link>
    ))}
  </NavbarContent>
</Navbar>
```

---

### 2. HeroCarousel

**Características:**
- 3 slides com imagens Unsplash
- Transição automática a cada 5 segundos
- Controles manuais (setas)
- Indicadores de dots
- Overlay com gradiente personalizado por slide
- Títulos e CTAs com animação stagger
- Altura: calc(100vh - 64px)

**Slides:**
1. Nova Coleção Primavera - gradiente pink/purple
2. Estilo Urbano - gradiente indigo/blue  
3. Acessórios Premium - gradiente purple/pink

**Animações (Framer Motion):**
```tsx
<motion.div
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.5 }}
>
  {/* Conteúdo do slide */}
</motion.div>
```

---

### 3. ProductCard

**Características:**
- Card HeroUI com `isFooterBlurred`
- Imagem produto (400x400)
- Footer glass com backdrop-blur-md
- Categoria em uppercase
- Preço destacado
- Botão "Comprar" com hover effect
- Animação no hover (scale: 1.05)
- Animação de entrada com delay baseado no index

**Estrutura do Footer Glass:**
```tsx
<CardFooter className="justify-between before:bg-white/10 dark:before:bg-black/10 border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%-8px)] shadow-medium ml-1 z-10 backdrop-blur-md backdrop-saturate-150">
  <div>
    <p className="text-tiny text-white/80 uppercase">{category}</p>
    <p className="text-base text-white font-semibold">{title}</p>
  </div>
  <div>
    <p className="text-lg text-white font-bold">{price}</p>
    <Button className="bg-black/30 hover:bg-black/50">Comprar</Button>
  </div>
</CardFooter>
```

---

### 4. FeaturedSection (Seção 1)

**Características:**
- Grid 2 colunas (texto + imagem)
- Fundo com gradiente sutil pink/purple/indigo
- Título com gradiente clip-text
- Imagem com hover scale
- Efeito de blur decorativo (gradiente circular)
- 2 CTAs (Ver Coleção e Saiba Mais)

**Layout:**
- Mobile: Coluna única
- Desktop: 2 colunas 50/50
- Padding: py-20
- Animação entrada: X-axis (-50 / +50)

---

### 5. TrendingSection (Seção 2)

**Características:**
- 4 cards de tendências
- Emojis como ícones
- Cards com glass effect
- Grid responsivo (1/2/4 colunas)
- Animação stagger nos cards

**Tendências:**
1. ✨ Minimalismo Elegante
2. 🌟 Estampas Ousadas
3. 💎 Sustentabilidade
4. 🎨 Mix de Texturas

**Card Style:**
```tsx
<Card className="bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-md hover:shadow-xl transition-all duration-500 border border-white/20">
  <CardBody className="text-center p-6">
    <div className="text-5xl mb-4">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </CardBody>
</Card>
```

---

### 6. NewsletterSection (Seção 3)

**Características:**
- Fundo gradiente vibrante (purple-pink-indigo)
- Input de email com backdrop blur
- Botão "Inscrever-se" branco
- Texto todo em branco
- Form funcional com useState
- Mensagem sem spam

**Estilo Input:**
```tsx
<Input
  type="email"
  classNames={{
    inputWrapper: "bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-500"
  }}
  size="lg"
/>
```

---

### 7. MarketplaceFooter

**Características:**
- Fundo gradiente dark (gray-900 + purple-900/20)
- 5 colunas no desktop
- Seção de marca (2 cols) + 3 seções de links
- Ícones sociais com backdrop blur
- Formas de pagamento (emojis)
- Bottom bar com copyright e links legais
- Grid responsivo

**Seções:**
1. **Brand:** Logo, descrição, redes sociais
2. **Comprar:** Novidades, categorias, promoções
3. **Ajuda:** FAQ, entregas, suporte
4. **Sobre:** História, sustentabilidade, trabalhe conosco

---

## 🛠️ Instalação de Dependências

### Fonte Roboto
```bash
npm install @fontsource/roboto
```

### Configuração no Layout
```tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Adicionar ao body className
className={`${roboto.variable} antialiased`}
```

### CSS Global
```css
@theme inline {
  --font-roboto: var(--font-roboto);
}
```

---

## 🎬 Animações Padrão

### Todas as animações usam 500ms de duração:

```tsx
// Entrada com fade + Y
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>

// Hover com scale
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.5 }}
>

// Carrossel com fade + scale
<motion.div
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.5 }}
>

// Stagger nos cards
transition={{ duration: 0.5, delay: index * 0.1 }}
```

---

## 📱 Responsividade

### Breakpoints Tailwind
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (sm-lg)
- **Desktop:** > 1024px (lg+)

### Grid Responsivo Padrão
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
```

### Navbar
- Mobile: NavbarMenuToggle + menu lateral
- Desktop: Links horizontais visíveis

### Cards de Produtos
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 4 colunas

### Footer
- Mobile: 1 coluna (empilhado)
- Tablet: 2 colunas
- Desktop: 5 colunas

---

## ✅ Checklist de Validação

Ao criar uma página marketplace, valide:

### Interface
- [ ] Navbar transparente funcionando
- [ ] Carrossel transicionando automaticamente
- [ ] Cards com efeito glass visíveis
- [ ] Todas as 3 seções personalizadas renderizadas
- [ ] Footer com todos os links
- [ ] Fonte Roboto aplicada em todos os textos
- [ ] Gradientes visíveis nos backgrounds

### Funcionalidade
- [ ] Theme switch funcionando (light/dark)
- [ ] Botões de navegação do carrossel funcionais
- [ ] Dots do carrossel sincronizados
- [ ] Botões "Comprar" clicáveis
- [ ] Form de newsletter funcional
- [ ] Menu mobile abrindo/fechando

### Responsividade
- [ ] Layout mobile (375px) funcionando
- [ ] Layout tablet (768px) funcionando
- [ ] Layout desktop (1920px) funcionando
- [ ] Imagens responsivas
- [ ] Textos legíveis em todos os tamanhos

### Performance
- [ ] Sem erros no console
- [ ] Animações fluidas (60fps)
- [ ] Imagens carregando com lazy loading
- [ ] Tempo de compilação < 5s
- [ ] Transições suaves de 500ms

### Integração com Tema
- [ ] Cores do projeto aplicadas
- [ ] Dark mode aplicado em todos os componentes
- [ ] Variáveis CSS do tema sendo usadas
- [ ] Gradientes consistentes

---

## 🔧 Troubleshooting

### Problema: Carrossel não transiciona
**Solução:** Verificar se `framer-motion` está instalado e importado

### Problema: Efeito glass não visível
**Solução:** Verificar classes `backdrop-blur-md` e `bg-white/10`

### Problema: Fonte Roboto não aplicada
**Solução:** 
1. Verificar instalação: `npm install @fontsource/roboto`
2. Verificar configuração no layout.tsx
3. Verificar variável CSS no globals.css
4. Verificar className `font-roboto` nos componentes

### Problema: Dark mode não muda cores
**Solução:** Usar prefixo `dark:` nas classes Tailwind

### Problema: Animações lentas/travando
**Solução:** Reduzir `duration` ou usar `will-change-transform`

---

## 📊 Métricas de Performance

### Esperado (Dev Mode)
- Compilação inicial: ~1-2s
- Hot reload: <1s
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### Otimizações Aplicadas
- ✅ Server Components por padrão
- ✅ Client Components apenas onde necessário
- ✅ Lazy loading de imagens
- ✅ Framer Motion com `viewport={{ once: true }}`
- ✅ CSS-in-JS minimizado
- ✅ Animações em GPU (transform/opacity)

---

## 🎨 Customização

### Trocar Cores do Gradiente
```css
/* De pink-purple-indigo para red-orange-yellow */
bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
```

### Adicionar Mais Produtos
```tsx
const products = [
  ...existingProducts,
  {
    id: 9,
    title: "Novo Produto",
    price: "R$ 999,90",
    category: "Categoria",
    image: "url-da-imagem",
  },
];
```

### Adicionar Slide no Carrossel
```tsx
const heroSlides = [
  ...existingSlides,
  {
    id: 4,
    title: "Novo Slide",
    subtitle: "Subtítulo",
    image: "url-wallpaper",
    gradient: "from-color-500/20 via-color-500/20 to-transparent",
  },
];
```

### Trocar Fonte
```tsx
// Em layout.tsx
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Substituir "font-roboto" por "font-montserrat" nos componentes
```

---

## 📚 Referências

- **Next.js 16:** https://nextjs.org/docs
- **HeroUI 2.8.5:** https://www.heroui.com/docs
- **Tailwind CSS V4:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Google Fonts:** https://fonts.google.com/specimen/Roboto
- **Unsplash:** https://unsplash.com/ (imagens de alta qualidade)

---

## 🎯 Próximos Passos

Após criar a página marketplace, considere:

1. **Adicionar mais páginas:**
   - `/marketplace/produto/[id]` - Página de detalhes
   - `/marketplace/categoria/[slug]` - Listagem por categoria
   - `/marketplace/carrinho` - Carrinho de compras
   - `/marketplace/checkout` - Finalização de compra

2. **Integrar Backend:**
   - API routes para produtos
   - Banco de dados (Supabase/Firebase)
   - Autenticação de usuários
   - Sistema de pagamentos

3. **Melhorias de SEO:**
   - Metadata dinâmica
   - Open Graph tags
   - Sitemap
   - Structured data (JSON-LD)

4. **Analytics:**
   - Google Analytics
   - Hotjar/Microsoft Clarity
   - Event tracking

5. **Testes:**
   - Unit tests (Jest)
   - E2E tests (Playwright)
   - Performance tests (Lighthouse CI)

---

## 📝 Notas Finais

Este template foi desenvolvido seguindo as melhores práticas de:
- ✅ Clean Code
- ✅ Component Composition
- ✅ Mobile-First Design
- ✅ Accessibility (WCAG AA)
- ✅ Performance Optimization
- ✅ Modern UI/UX

**Versão:** 1.0.0  
**Última Atualização:** 2025-11-02  
**Testado em:** Next.js 16.0.1, HeroUI 2.8.5, Tailwind CSS V4  
**Compatibilidade:** Chrome, Firefox, Safari, Edge (últimas 2 versões)

---

**Criado com ❤️ por Cascade AI**
