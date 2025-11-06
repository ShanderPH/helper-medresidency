# Guia de Padrões UI/UX - Next.js 16 + Tailwind CSS V4 + HeroUI 2.8.5

Este guia documenta os padrões de design, boas práticas de UI/UX e decisões arquiteturais aplicadas no projeto Helper Fashion Store.

## 📋 Índice

1. [Design Tokens e Constantes](#design-tokens-e-constantes)
2. [Sistema de Gradientes](#sistema-de-gradientes)
3. [Espaçamento Responsivo](#espaçamento-responsivo)
4. [Componentes e Layout](#componentes-e-layout)
5. [Problemas Comuns e Soluções](#problemas-comuns-e-soluções)
6. [Boas Práticas](#boas-práticas)

---

## 🎨 Design Tokens e Constantes

### Arquivo: `src/lib/constants/design.ts`

Centralize todos os valores reutilizáveis de design em um único arquivo para manter consistência.

```typescript
/**
 * Gradientes do tema
 * Use bg-linear-to-* para Tailwind CSS V4 (não bg-gradient-to-*)
 */
export const GRADIENTS = {
  primary: 'bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500',
  primaryText: 'bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent',
  secondary: 'bg-linear-to-r from-pink-500 to-purple-500',
  tertiary: 'bg-linear-to-r from-purple-500 to-indigo-500',
  background: 'bg-linear-to-br from-purple-500 via-pink-500 to-indigo-500',
  subtleLight: 'bg-linear-to-br from-purple-50/30 via-pink-50/20 to-indigo-50/30',
  subtleDark: 'bg-linear-to-br from-purple-950/20 via-pink-950/10 to-indigo-950/20',
} as const;

/**
 * Durações de animação
 */
export const ANIMATIONS = {
  duration: {
    fast: 300,
    normal: 500,
    slow: 700,
  },
  transition: 'transition-all duration-500',
  transitionFast: 'transition-all duration-300',
  transitionSlow: 'transition-all duration-700',
} as const;

/**
 * Espaçamentos de seção
 * Use valores responsivos (mobile-first)
 */
export const SECTION_SPACING = {
  small: 'py-8 md:py-12',
  medium: 'py-12 md:py-16',
  large: 'py-16 md:py-20',
  xl: 'py-20 md:py-24',
} as const;

/**
 * Tamanhos de container
 */
export const CONTAINER = {
  sm: 'max-w-4xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
} as const;

/**
 * Magic numbers transformados em constantes
 */
export const TIMING = {
  carouselInterval: 5000, // ms
  successMessageDuration: 5000, // ms
  loadingSimulation: 1000, // ms
} as const;
```

### ✅ Benefícios:

- **Consistência**: Todos os componentes usam os mesmos valores
- **Manutenibilidade**: Altere em um único lugar
- **Type Safety**: TypeScript autocompleta e valida os valores
- **DRY**: Não repita valores mágicos no código

---

## 🌈 Sistema de Gradientes

### ⚠️ IMPORTANTE: Tailwind CSS V4 - Nova Sintaxe

No Tailwind CSS V4, a sintaxe de gradientes mudou:

```typescript
// ❌ ERRADO (Tailwind V3)
bg-gradient-to-r from-pink-500 to-purple-500

// ✅ CORRETO (Tailwind V4)
bg-linear-to-r from-pink-500 to-purple-500
```

### Padrões de Uso

```typescript
// Gradiente de texto (títulos)
<h1 className={`${GRADIENTS.primaryText}`}>
  Título com Gradiente
</h1>

// Gradiente de fundo (botões, seções)
<button className={`${GRADIENTS.secondary} text-white`}>
  Botão com Gradiente
</button>

// Gradiente sutil de fundo (seções)
<section className={`${SECTION_SPACING.large} bg-linear-to-br from-purple-50/50 via-pink-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900`}>
  {/* Conteúdo */}
</section>
```

### ❌ Problema Comum: Fundos Escuros

**NUNCA** use gradientes muito opacos que possam esconder conteúdo:

```typescript
// ❌ ERRADO - Esconde conteúdo
<main className="bg-linear-to-br from-background via-purple-900 to-background">
  {/* Produtos invisíveis no dark mode */}
</main>

// ✅ CORRETO - Fundo neutro
<main className="bg-background">
  {/* Produtos visíveis em qualquer tema */}
</main>
```

---

## 📐 Espaçamento Responsivo

### Mobile-First Approach

Sempre use valores responsivos que escalem do mobile para desktop:

```typescript
// ❌ ERRADO - Espaçamento fixo muito grande
<section className="py-20 px-8">

// ✅ CORRETO - Espaçamento responsivo
<section className={`${SECTION_SPACING.large} px-4 sm:px-6 lg:px-8`}>
```

### Grid Responsivo

```typescript
// ❌ ERRADO - Grid fixo
<div className="grid grid-cols-4 gap-6">

// ✅ CORRETO - Grid responsivo
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
```

### Tipografia Responsiva

```typescript
// ❌ ERRADO - Fonte muito grande em mobile
<h1 className="text-7xl font-bold">

// ✅ CORRETO - Fonte escalável
<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
```

---

## 🧩 Componentes e Layout

### 1. Navbar

**Boas Práticas:**

```typescript
<Navbar
  maxWidth="full"
  className="bg-transparent backdrop-blur-md border-b border-white/10"
>
  <NavbarContent>
    {/* Logo e menu mobile */}
  </NavbarContent>
  
  <NavbarContent className="hidden sm:flex gap-8" justify="center">
    {/* Links de navegação */}
  </NavbarContent>
  
  <NavbarContent justify="end">
    {/* Theme switch e botões */}
    <Button color="primary" variant="light">Entrar</Button>
    <Button color="primary">Cadastrar</Button>
  </NavbarContent>
</Navbar>
```

**❌ Evite:**
- Aplicar gradientes diretamente nos botões da navbar (use cores do HeroUI)
- Classes CSS inline muito longas

**✅ Faça:**
- Use props `color` e `variant` do HeroUI
- Mantenha navbar simples e legível

### 2. Hero Carousel

**Altura Adequada:**

```typescript
// ❌ ERRADO - Ocupa tela inteira
<div className="h-[calc(100vh-64px)]">

// ✅ CORRETO - Altura responsiva controlada
<div className="h-[500px] md:h-[600px] lg:h-[700px]">
```

**Botões Responsivos:**

```typescript
<div className="flex flex-col sm:flex-row gap-3 md:gap-4">
  <Button
    size="lg"
    className="w-full sm:w-auto"
  >
    Ação Principal
  </Button>
</div>
```

### 3. Product Cards

**Altura de Imagem:**

```typescript
// Altura responsiva para imagens de produtos
<div className="relative w-full h-[350px] md:h-[400px]">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    priority={index < 4} // Priorize primeiras imagens
  />
</div>
```

**Footer do Card:**

```typescript
<CardFooter className="justify-between before:bg-white/10 dark:before:bg-black/10 border-white/20 border-1 py-2 md:py-3 backdrop-blur-md">
  <div className="flex flex-col gap-1">
    <p className="text-tiny text-white/80 uppercase">{category}</p>
    <p className="text-base text-white font-semibold">{title}</p>
  </div>
  <div className="flex flex-col items-end gap-1">
    <p className="text-lg text-white font-bold">{price}</p>
    <Button size="sm" variant="flat">Comprar</Button>
  </div>
</CardFooter>
```

### 4. Newsletter Section

**Formulário Responsivo:**

```typescript
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
  <Input
    type="email"
    placeholder="Seu melhor e-mail"
    className="flex-1"
    size="lg"
    classNames={{
      inputWrapper: "bg-white/20 backdrop-blur-md border-white/30"
    }}
  />
  <Button
    type="submit"
    size="lg"
    className="w-full sm:w-auto"
  >
    Inscrever-se
  </Button>
</form>
```

### 5. Footer

**Grid Responsivo:**

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
  <div className="lg:col-span-2">
    {/* Brand section */}
  </div>
  {/* Outras colunas */}
</div>
```

---

## ⚠️ Problemas Comuns e Soluções

### Problema 1: Seção de Produtos Invisível

**Causa:** Gradiente escuro aplicado ao fundo

```typescript
// ❌ PROBLEMA
<main className={`${GRADIENTS.subtle}`}>
  {/* Produtos invisíveis */}
</main>

// ✅ SOLUÇÃO
<main className="bg-background">
  {/* Produtos visíveis */}
</main>
```

### Problema 2: Hero Carousel Muito Alto

**Causa:** Altura `calc(100vh-64px)` ocupa tela inteira

```typescript
// ❌ PROBLEMA
<div className="h-[calc(100vh-64px)]">

// ✅ SOLUÇÃO
<div className="h-[500px] md:h-[600px] lg:h-[700px]">
```

### Problema 3: Botões com Gradientes Mal Aplicados

**Causa:** Aplicar classes de gradiente diretamente nos botões do HeroUI

```typescript
// ❌ PROBLEMA
<Button className={`${GRADIENTS.secondary} text-white`}>
  Botão
</Button>

// ✅ SOLUÇÃO
<Button color="secondary">
  Botão
</Button>
```

### Problema 4: Erro de Hidratação

**Causa:** Atributos do servidor não batem com o cliente (theme switching)

```typescript
// ✅ SOLUÇÃO
// No layout.tsx
<html lang="pt-BR" suppressHydrationWarning>

// No ThemeSwitch
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <LoadingButton />;
```

### Problema 5: Espaçamentos Excessivos

**Causa:** Usar `py-20` ou `py-24` sem responsividade

```typescript
// ❌ PROBLEMA
<section className="py-20">

// ✅ SOLUÇÃO
<section className={`${SECTION_SPACING.large}`}>
// Que se expande para: py-16 md:py-20
```

---

## ✅ Boas Práticas

### 1. Cores e Temas

- **Use cores semânticas do HeroUI:** `primary`, `secondary`, `success`, `warning`, `danger`
- **Use tokens de cor:** `bg-background`, `text-foreground`, `border-divider`
- **Suporte dark mode:** Sempre teste em ambos os temas

```typescript
// ✅ BOM
<div className="bg-content1 text-foreground border-divider">

// ❌ RUIM
<div className="bg-white text-black border-gray-200">
```

### 2. Responsividade

- **Mobile-first:** Comece com mobile e escale para desktop
- **Breakpoints:** `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Teste em múltiplos tamanhos:** 375px (mobile), 768px (tablet), 1920px (desktop)

```typescript
// ✅ BOM
<div className="text-sm md:text-base lg:text-lg">

// ❌ RUIM
<div className="text-lg">
```

### 3. Imagens

- **Use Next.js Image:** Sempre use `<Image>` do Next.js
- **Defina sizes:** Otimize para diferentes resoluções
- **Priority:** Use `priority` para imagens above the fold
- **Alt text:** Sempre forneça descrições acessíveis

```typescript
<Image
  src={image}
  alt="Descrição detalhada"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  priority={index < 4}
/>
```

### 4. Acessibilidade

- **ARIA labels:** Use em todos os botões e formulários
- **Keyboard navigation:** Teste navegação por teclado
- **Semantic HTML:** Use tags apropriadas (`<nav>`, `<main>`, `<section>`)
- **Focus visible:** Garanta que elementos focados sejam visíveis

```typescript
<Button
  aria-label="Adicionar ao carrinho"
  onClick={handleAddToCart}
>
  <ShoppingCartIcon />
</Button>
```

### 5. Performance

- **Code splitting:** Use `"use client"` apenas quando necessário
- **Lazy loading:** Carregue componentes pesados sob demanda
- **Image optimization:** Configure formatos AVIF e WebP
- **Minimize bundle:** Importe apenas o que você usa

```typescript
// ✅ BOM - Importação específica
import { Button, Card } from "@heroui/react";

// ❌ RUIM - Importação completa
import * as HeroUI from "@heroui/react";
```

### 6. Animações

- **Use framer-motion:** Para animações complexas
- **Transições CSS:** Para efeitos simples
- **Reduza motion:** Respeite preferência do usuário
- **Performance:** Use `transform` e `opacity` (não `width`/`height`)

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>
```

---

## 📊 Checklist de UI/UX

Antes de fazer commit ou deploy:

- [ ] Testado em mobile (375px)
- [ ] Testado em tablet (768px)
- [ ] Testado em desktop (1920px)
- [ ] Dark mode funcionando corretamente
- [ ] Light mode funcionando corretamente
- [ ] Sem erros de console
- [ ] Sem warnings de hidratação
- [ ] Imagens otimizadas (formatos corretos, sizes definidos)
- [ ] Gradientes usando sintaxe V4 (`bg-linear-to-*`)
- [ ] Espaçamentos responsivos
- [ ] Botões usando cores do HeroUI (não gradientes inline)
- [ ] Acessibilidade (ARIA labels, alt text)
- [ ] Performance (< 3s LCP, < 100ms FID)
- [ ] SEO (meta tags, structured data)

---

## 🔗 Referências

- [Tailwind CSS V4 Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [HeroUI Components](https://www.heroui.com/docs/components)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Framer Motion](https://www.framer.com/motion/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Data de Criação:** 2025-11-02  
**Última Atualização:** 2025-11-02  
**Versão:** 1.0.0
