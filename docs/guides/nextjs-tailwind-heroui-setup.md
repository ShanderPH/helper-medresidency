# Guia de Configuração: Next.js 16 + Tailwind CSS V4 + HeroUI 2.8.5

Este guia fornece um template padrão para iniciar novos projetos com Next.js 16, Tailwind CSS V4 e HeroUI 2.8.5.

## 📋 Pré-requisitos

- Node.js 20.9 ou superior
- npm, pnpm, yarn ou bun

## 🚀 Passo 1: Criar Projeto Next.js 16

Execute o comando para criar um novo projeto Next.js:

```bash
npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --turbopack --no-git --skip-install
```

**Opções importantes:**
- `--typescript`: Habilita TypeScript
- `--eslint`: Configura ESLint
- `--tailwind`: Instala Tailwind CSS V4
- `--app`: Usa App Router
- `--src-dir`: Estrutura de pastas com `src/`
- `--turbopack`: Usa Turbopack para desenvolvimento
- `--no-git`: Não inicializa repositório git (opcional)
- `--skip-install`: Pula instalação de dependências

Durante a instalação, responda:
- React Compiler: **No** (ou Yes se desejar)
- Customize import alias: **No** (ou Yes para customizar)
- Import alias: **@/*** (padrão)

## 📦 Passo 2: Instalar Dependências

```bash
npm install
```

## 🎨 Passo 3: Instalar HeroUI e next-themes

```bash
npm install @heroui/react@2.8.5 next-themes framer-motion
```

**Dependências:**
- `@heroui/react@2.8.5`: Biblioteca de componentes HeroUI
- `next-themes`: Gerenciamento de temas (light/dark mode)
- `framer-motion`: Animações (requerido pelo HeroUI)

## ⚙️ Passo 4: Configurar HeroUI Plugin

### 4.1 Criar arquivo `hero.js` na raiz do projeto

**Importante:** Use `.js` (não `.ts`) para compatibilidade com o sistema de plugins do Tailwind CSS V4.

```javascript
const { heroui } = require("@heroui/react");

module.exports = heroui({
  themes: {
    light: {
      colors: {
        background: "#FFFFFF",
        foreground: "#11181C",
        primary: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
          DEFAULT: "#006FEE",
          foreground: "#ffffff",
        },
        // ... outras cores (secondary, success, warning, danger)
      },
    },
    dark: {
      colors: {
        background: "#000000",
        foreground: "#ECEDEE",
        // ... cores invertidas para dark mode
      },
    },
  },
  layout: {
    fontSize: {
      tiny: "0.75rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.125rem",
    },
    lineHeight: {
      tiny: "1rem",
      small: "1.25rem",
      medium: "1.5rem",
      large: "1.75rem",
    },
    radius: {
      small: "8px",
      medium: "12px",
      large: "14px",
    },
    borderWidth: {
      small: "1px",
      medium: "2px",
      large: "3px",
    },
  },
});
```

### 4.2 Atualizar `src/app/globals.css`

```css
@import "tailwindcss";
@plugin "../../hero.js";

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
}
```

**Importante:**
- `@import "tailwindcss"`: Importa Tailwind CSS V4
- `@plugin "../../hero.js"`: Importa o plugin HeroUI com CSS-first approach
- Caminho relativo para `hero.js` desde `src/app/`

## 🌓 Passo 5: Configurar Theme Provider

### 5.1 Criar `src/components/providers.tsx`

```typescript
"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function Providers({ children, ...themeProps }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...themeProps}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
}
```

### 5.2 Criar `src/components/theme-switch.tsx`

```typescript
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        isIconOnly
        variant="light"
        aria-label="Loading theme"
        className="w-10 h-10"
      >
        <span className="sr-only">Loading</span>
      </Button>
    );
  }

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10"
    >
      {theme === "light" ? (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </Button>
  );
}
```

## 📄 Passo 6: Atualizar Root Layout

Editar `src/app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

**Importante:**
- `suppressHydrationWarning`: Evita warnings de hydration com dark mode
- `attribute="class"`: next-themes adiciona classe no `<html>`
- `defaultTheme="system"`: Usa preferência do sistema
- `enableSystem`: Detecta tema do SO

## 🎯 Passo 7: Criar Página Inicial de Exemplo

Editar `src/app/page.tsx` com exemplo básico:

**Importante:** Adicione `"use client"` no topo porque HeroUI usa React Context.

```typescript
"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-foreground">
              Your App Name
            </h1>
            <ThemeSwitch />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Welcome!</h2>
          </CardHeader>
          <CardBody>
            <Button color="primary">Get Started</Button>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
```

## 🏃 Passo 8: Executar o Projeto

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 📦 Estrutura Final do Projeto

```
.
├── docs/
│   └── guides/
│       └── nextjs-tailwind-heroui-setup.md
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── providers.tsx
│       └── theme-switch.tsx
├── hero.js
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🔧 Configurações Importantes

### PostCSS Configuration (`postcss.config.mjs`)

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

## 🎨 Usando Componentes HeroUI

### Importação Individual

```typescript
import { Button, Card, Input } from "@heroui/react";
```

### Classes de Tema

HeroUI fornece classes de cores semânticas:
- `bg-background` / `bg-foreground`
- `text-foreground` / `text-foreground-500` / `text-foreground-600`
- `border-divider`
- Cores: `primary`, `secondary`, `success`, `warning`, `danger`

### Exemplo de Card Completo

```typescript
<Card className="max-w-md">
  <CardHeader className="flex gap-3">
    <div className="flex flex-col">
      <p className="text-md">Card Title</p>
      <p className="text-small text-default-500">Subtitle</p>
    </div>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    <Button color="primary">Action</Button>
  </CardFooter>
</Card>
```

## 📚 Componentes HeroUI Disponíveis

O HeroUI fornece 47+ componentes. Principais:

- **Layout**: Card, Divider, Spacer, ScrollShadow
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, Slider
- **Navigation**: Button, Link, Navbar, Tabs, Breadcrumbs, Pagination
- **Data Display**: Avatar, Badge, Chip, Code, Image, Table, User
- **Feedback**: Alert, Progress, Spinner, Skeleton, Toast
- **Overlay**: Modal, Drawer, Popover, Tooltip, Dropdown
- **Date & Time**: Calendar, DatePicker, DateInput, TimeInput

Para instalar componentes específicos via CLI:

```bash
npx heroui-cli add button card input
```

## 🔍 Solução de Problemas

### Warnings CSS no VSCode

Os warnings `Unknown at rule @plugin` e `Unknown at rule @theme` são **esperados** e **podem ser ignorados**. São diretivas específicas do Tailwind CSS V4 que o linter CSS padrão não reconhece.

### Erro: "createContext only works in Client Components"

Se aparecer este erro ao usar componentes HeroUI:
- Adicione `"use client"` no topo do arquivo que importa componentes HeroUI
- Componentes do HeroUI precisam de Context API (client-side)
- Exemplo: `src/app/page.tsx` deve começar com `"use client"`

### Hydration Warnings

Se aparecerem warnings de hydration:
- Certifique-se de ter `suppressHydrationWarning` no `<html>`
- Use `disableTransitionOnChange` no ThemeProvider

### Componentes não Estilizados

Se os componentes HeroUI não aparecerem estilizados:
1. Verifique se `hero.js` está na raiz do projeto (não `.ts`)
2. Confirme o caminho correto `@plugin "../../hero.js"` no `globals.css`
3. Reinicie o servidor de desenvolvimento com `npm run dev`
4. Se necessário, mate todos os processos Node.js e reinicie

## 🚀 Próximos Passos

1. **Adicionar mais componentes**: Instale conforme necessário
2. **Customizar tema**: Edite `hero.js` com suas cores
3. **Criar componentes personalizados**: Extend HeroUI components
4. **Configurar ESLint/Prettier**: Para melhores práticas
5. **Adicionar testes**: Jest + Testing Library

## 📖 Referências

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS V4 Docs](https://tailwindcss.com/docs)
- [HeroUI Docs](https://www.heroui.com/docs)
- [next-themes Docs](https://github.com/pacocoursey/next-themes)

## ✅ Checklist de Configuração

- [ ] Projeto Next.js 16 criado com TypeScript e App Router
- [ ] Dependências instaladas (HeroUI, next-themes, framer-motion)
- [ ] Arquivo `hero.js` criado na raiz (usar .js, não .ts)
- [ ] `globals.css` atualizado com @plugin "../../hero.js"
- [ ] Providers criado (`providers.tsx`)
- [ ] ThemeSwitch criado (`theme-switch.tsx`)
- [ ] Layout atualizado com Providers e suppressHydrationWarning
- [ ] Página inicial testada
- [ ] Dark mode funcionando corretamente
- [ ] Servidor de desenvolvimento rodando sem erros

---

**Versões Testadas:**
- Next.js: 16.0.1
- React: 19.2.0
- Tailwind CSS: 4.1.x
- HeroUI: 2.8.5
- Node.js: 20.9+

**Data de Criação:** 2025-10-31  
**Última Atualização:** 2025-10-31
