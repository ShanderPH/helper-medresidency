# Helper MedResidency 🏥

Plataforma web para consulta de notas de corte de residências médicas no Brasil.

## 🚀 Tecnologias

Este projeto utiliza as tecnologias mais modernas e melhores práticas:

- **[Next.js 16](https://nextjs.org)** - Framework React com App Router e Turbopack
- **[React 19](https://react.dev)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript com tipagem estática
- **[Tailwind CSS V4](https://tailwindcss.com)** - Framework CSS utility-first
- **[HeroUI 2.8.5](https://www.heroui.com)** - Biblioteca de componentes UI
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[Framer Motion](https://www.framer.com/motion/)** - Animações

## 📋 Pré-requisitos

- Node.js 20.9 ou superior
- npm, yarn, pnpm ou bun

## 🛠️ Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd helper-medresidency

# Instale as dependências
npm install
```

## 🚀 Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

O projeto utiliza Turbopack para hot reload extremamente rápido.

## 📦 Scripts

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 📁 Estrutura do Projeto

```
helper-medresidency/
├── docs/                    # Documentação do projeto
│   ├── features/           # Documentação de features
│   └── guides/             # Guias de setup e desenvolvimento
├── public/                 # Assets estáticos
├── src/
│   ├── app/               # App Router (rotas e layouts)
│   │   ├── globals.css   # Estilos globais
│   │   ├── layout.tsx    # Layout raiz
│   │   └── page.tsx      # Página inicial
│   └── components/        # Componentes reutilizáveis
│       ├── providers.tsx
│       └── theme-switch.tsx
└── hero.js                # Configuração de tema HeroUI
```

## 🎨 Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Modo escuro/claro (automático baseado no SO)
- ✅ Interface otimizada com HeroUI
- ✅ TypeScript para type-safety
- ✅ Tailwind CSS V4 com CSS-first approach
- ✅ **Banco de dados completo no Supabase** (199 registros)
  - 37 instituições médicas
  - 97 notas de corte históricas (2022-2025)
  - Schema normalizado com RLS
- 🔄 Sistema de busca de notas de corte (em desenvolvimento)
- 🔄 Dashboard de usuário (em desenvolvimento)
- 🔄 Visualizações e filtros dinâmicos (próxima fase)

## 📚 Documentação

- [Guia de Setup](./docs/guides/nextjs-tailwind-heroui-setup.md) - Configuração completa do projeto
- [Resumo de Setup](./docs/features/project-setup/setup-summary.md) - Resumo da configuração inicial
- [Database Schema](./docs/features/database/database-schema.md) - Estrutura completa do banco de dados
- [Database Setup](./docs/features/database/setup-summary.md) - Resumo do setup do Supabase

## 💾 Banco de Dados

O projeto utiliza **Supabase** (PostgreSQL 17) com:

- **6 tabelas normalizadas:** states, exam_types, specialties, institutions, residency_programs, cutoff_scores
- **199 registros totais** de dados reais de residências médicas
- **Row Level Security (RLS)** habilitado para segurança
- **TypeScript types auto-gerados** para type-safety completa
- **Queries prontas** em `src/lib/supabase/queries.ts`

Para começar a usar:
```bash
# Copiar e configurar variáveis de ambiente
cp .env.example .env.local

# As credenciais do Supabase já estão em .env.example
# Projeto: awcexeoffgasljtdzsrm
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Febrate** - Desenvolvimento inicial

## 🙏 Agradecimentos

- Next.js team pela framework incrível
- HeroUI team pelos componentes elegantes
- Comunidade open source

---

**Status:** 🚧 Em Desenvolvimento

**Versão:** 0.1.0
