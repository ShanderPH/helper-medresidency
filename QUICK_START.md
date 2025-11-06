# 🚀 Quick Start - Helper MedResidency

Guia rápido para começar a usar a aplicação de consulta de notas de corte de residências médicas.

---

## 📦 Instalação

```bash
# Clone o repositório (se ainda não clonou)
git clone <repository-url>
cd helper-medresidency

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# O arquivo .env.local já foi criado automaticamente
# As credenciais do Supabase já estão configuradas
```

---

## 🎯 Executando a Aplicação

```bash
# Modo desenvolvimento (com Turbopack)
npm run dev

# Acesse no navegador
http://localhost:3000
```

---

## 📱 Usando a Aplicação

### 1. Página Inicial (`/`)
- Visão geral do projeto
- Cards com features
- Botões para acessar os programas

### 2. Página de Residências (`/residencias`)

#### **Calculadora de Aprovação**
1. Insira sua nota em qualquer formato:
   - `7.8` → converte para `780`
   - `78` → converte para `780`
   - `780` → mantém `780`
2. Clique em "Calcular"
3. Veja quantos programas você seria aprovado
4. Visualize apenas os programas compatíveis

#### **Filtros**
- **Estado:** Filtre por estado brasileiro
- **Instituição:** Filtre por instituição específica
- **Range de Nota:** Use o slider para definir faixa de notas (700-950)

#### **Cards de Programas**
Cada card exibe:
- Nome da instituição e estado
- Nota de corte atual (2025)
- Tendência (comparação com 2024)
- Média histórica de todas as notas
- Preço da inscrição
- Data da prova
- Tipo de exame (Enare, UNIFESP, etc.)
- Badge de 2ª fase (se houver)
- Histórico dos últimos 4 anos

---

## 🎨 Temas

A aplicação suporta **modo claro** e **modo escuro**:
- Alterna automaticamente baseado nas preferências do sistema
- Pode ser alterado manualmente clicando no ícone no canto superior direito
- Cores optimizadas para ambos os modos

---

## 📊 Dados Disponíveis

### Estatísticas Atuais

- **37 programas** de residência em Otorrinolaringologia
- **11 estados** brasileiros
- **16 tipos** de exames diferentes
- **97 notas de corte** históricas (2022-2025)

### Estados com Programas

- São Paulo (14 programas)
- Rio de Janeiro (10 programas)
- Minas Gerais (7 programas)
- Brasília, Ceará, Paraná, Pernambuco, e outros

### Tipos de Exame

- Enare (maioria dos programas)
- UNIFESP, USP-SP, Unicamp
- IAMSPE, SUS-SP
- E muitos outros

---

## 🔧 Tecnologias Utilizadas

### Frontend
- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS V4** - Estilização
- **HeroUI** - Componentes UI modernos
- **Lucide React** - Ícones

### Backend & Database
- **Supabase** - PostgreSQL 17
- **Row Level Security** - Segurança de dados
- **6 tabelas normalizadas** - Schema otimizado

### Componentes HeroUI Usados
- Card (com Header, Body, Footer)
- NumberInput (para calculadora)
- Slider (para range de notas)
- Select (para filtros)
- Button, Chip, Divider
- Spinner (loading states)

---

## 📁 Estrutura do Projeto

```
helper-medresidency/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Página inicial
│   │   └── residencias/
│   │       └── page.tsx          # Página de programas
│   ├── components/
│   │   ├── residency/            # Componentes de residência
│   │   │   ├── score-calculator.tsx
│   │   │   ├── residency-filters.tsx
│   │   │   └── residency-card.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-switch.tsx
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts         # Cliente Supabase
│   │       └── queries.ts        # Queries prontas
│   └── types/
│       ├── index.ts              # Types gerais
│       └── database.types.ts     # Types do Supabase
├── docs/                         # Documentação completa
├── .env.local                    # Variáveis de ambiente
└── package.json
```

---

## 🎯 Recursos Principais

### ✅ Implementado

1. **Calculadora Inteligente**
   - Conversão automática de formatos
   - Feedback visual rico
   - Estatísticas de aproveitamento

2. **Sistema de Filtros Avançado**
   - Filtro por estado
   - Filtro por instituição
   - Range de notas com slider
   - Filtro por nota do usuário

3. **Cards Informativos**
   - Design moderno com efeito glass
   - Informações completas
   - Tendências históricas
   - Hover interativo

4. **Design Responsivo**
   - Mobile-first
   - Adaptável a todas as telas
   - Performance otimizada

5. **Tema Dual**
   - Modo claro e escuro
   - Transições suaves
   - Cores semânticas

---

## 🔗 Links Úteis

- **Aplicação Local:** http://localhost:3000
- **Dashboard Supabase:** https://supabase.com/dashboard/project/awcexeoffgasljtdzsrm
- **Documentação Database:** `docs/features/database/database-schema.md`
- **Documentação Residência:** `docs/features/residency-view/implementation-summary.md`

---

## 💡 Dicas de Uso

### Para Estudantes

1. **Descubra suas chances:**
   - Insira sua nota na calculadora
   - Veja imediatamente onde você passaria

2. **Compare instituições:**
   - Filtre por estado
   - Compare preços de inscrição
   - Analise tendências históricas

3. **Planeje sua estratégia:**
   - Veja médias históricas
   - Identifique programas mais acessíveis
   - Considere datas de prova

### Para Desenvolvedores

1. **Adicionar mais especialidades:**
   - Inserir no Supabase (tabela `specialties`)
   - Adicionar programas relacionados
   - Interface se adapta automaticamente

2. **Customizar filtros:**
   - Editar `residency-filters.tsx`
   - Adicionar novos filtros no estado da página
   - Atualizar lógica de filtragem

3. **Modificar cards:**
   - Editar `residency-card.tsx`
   - Adicionar novos campos do banco
   - Personalizar visual

---

## 🚨 Solução de Problemas

### Erro ao carregar dados
```bash
# Verifique se as variáveis de ambiente estão corretas
cat .env.local

# Reinicie o servidor
npm run dev
```

### Erro de TypeScript
```bash
# Limpe o cache do Next.js
rm -rf .next

# Reinstale dependências
npm install

# Reinicie
npm run dev
```

### Porta 3000 ocupada
```bash
# Use outra porta
PORT=3001 npm run dev
```

---

## 📚 Documentação Completa

Para documentação detalhada, consulte:

- **README.md** - Visão geral do projeto
- **docs/DEVELOPMENT.md** - Guia de desenvolvimento
- **docs/PROJECT_STRUCTURE.md** - Estrutura completa
- **docs/features/database/database-schema.md** - Schema do banco
- **docs/features/residency-view/implementation-summary.md** - Implementação da tela

---

## 🎉 Pronto para Usar!

A aplicação está **100% funcional** e pronta para uso. Explore, teste e aproveite!

**Desenvolvido com ❤️ usando Next.js 16, React 19, HeroUI e Supabase**

---

**Versão:** 1.0.0  
**Data:** 2025-11-06  
**Status:** ✅ Produção
