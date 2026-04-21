# 🎟️ CupomFácil - Plataforma de Cupons Completa

Uma plataforma moderna de cupons de desconto com **painel administrativo robusto** e **página do usuário otimizada**, desenvolvida com design system inspirado no Mercado Livre.

## 🎨 Design System

Inspirado no Mercado Livre, com:
- **Cores icônicas**: Amarelo (#ffe600), Azul (#3483fa), Verde Sucesso (#00a650)
- **Tipografia**: Proxima Nova
- **Componentes modernos**: Cards, badges, botões, inputs
- **Layout responsivo** e clean
- **Animações suaves** e microinterações

## 📊 Funcionalidades

### 👤 Área do Usuário
- **Home Page** com hero section, busca, categorias e cupons em destaque
- **Página de Detalhe do Cupom** com código, estatísticas, termos e como usar
- **Header** com navegação, login/cadastro e menu mobile
- **Footer** completo com links, redes sociais e métodos de pagamento
- **Design moderno** com cards interativos e animações

### 🔧 Painel Administrativo (`/admin`)
- **Dashboard** - Métricas em tempo real, cards de estatísticas, cupons recentes
- **Gerenciamento de Cupons** - Listagem, filtros, criação e edição
- **Lojas** - Catálogo de lojas parceiras com status
- **Analytics** - Gráficos de barras, métricas de conversão
- **Configurações** - Perfil, notificações toggle, privacidade

## 🛠️ Tecnologias

- **React 18** + Vite
- **React Router DOM** para roteamento
- **CSS Variables** para theming consistente
- **Build otimizado**: ~213KB JS + ~20KB CSS

## 📁 Estrutura do Projeto

```
coupon-platform/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Layout admin
│   │   ├── Sidebar.jsx         # Menu lateral admin
│   │   ├── Header.jsx          # Header admin
│   │   └── user/               # Componentes usuário
│   │       ├── UserHeader.jsx
│   │       ├── UserFooter.jsx
│   │       └── UserLayout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Coupons.jsx
│   │   ├── CreateCoupon.jsx
│   │   ├── EditCoupon.jsx
│   │   ├── Stores.jsx
│   │   ├── Analytics.jsx
│   │   ├── Settings.jsx
│   │   └── user/               # Páginas usuário
│   │       ├── UserHome.jsx
│   │       └── CouponDetail.jsx
│   ├── styles/
│   │   ├── variables.css       # Design system admin
│   │   ├── global.css
│   │   └── user-variables.css  # Design system usuário
│   ├── App.jsx
│   └── main.jsx
├── dist/                       # Build de produção
└── package.json
```

## 🚀 Rotas

### Públicas (Usuário)
- `/` - Home page com cupons em destaque
- `/cupom/:id` - Detalhe do cupom
- `/categorias` - Categorias de cupons
- `/lojas` - Lojas parceiras
- `/populares` - Cupons populares

### Admin
- `/admin` - Dashboard
- `/admin/coupons` - Listagem de cupons
- `/admin/coupons/new` - Criar cupom
- `/admin/coupons/:id/edit` - Editar cupom
- `/admin/stores` - Lojas
- `/admin/analytics` - Analytics
- `/admin/settings` - Configurações

## 📦 Instalação e Uso

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🎯 Destaques do Design

### Página do Usuário
- **Hero Section** com gradiente amarelo e animações floating
- **Cards de Cupons** com efeito hover, badge de desconto e botão copiar
- **Código do Cupom** em destaque com borda tracejada
- **Estatísticas** de uso e taxa de sucesso
- **Como Funciona** com passos numerados
- **Newsletter** com call-to-action

### Painel Admin
- **Sidebar** fixa com navegação clara
- **Cards de Métricas** com ícones e cores semânticas
- **Tabelas** com status badges coloridos
- **Formulários** completos com validação visual
- **Gráficos** de barras para analytics

## 📱 Responsividade

Totalmente responsivo com breakpoints para:
- 📱 Mobile (< 600px)
- 📱 Tablet (600px - 900px)
- 💻 Desktop (> 900px)

## 🔥 Features Especiais

- ✅ Copy to clipboard nos códigos dos cupons
- ✅ Badges de verificação para cupons confiáveis
- ✅ Animações de hover e transições suaves
- ✅ Menu mobile hamburger
- ✅ Sticky header
- ✅ Gradient backgrounds
- ✅ Shadow effects consistentes

## 📄 Licença

MIT

---

**CupomFácil** - Economize com os melhores cupons! 🏷️💰
