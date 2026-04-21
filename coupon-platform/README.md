# 🎟️ CupomFácil - Plataforma de Cupons

Uma plataforma completa de gerenciamento de cupons com painel administrativo moderno, seguindo o design system do Mercado Livre.

## ✨ Funcionalidades

### Dashboard
- Visão geral com métricas principais
- Cards de estatísticas em tempo real
- Lista de cupons recentes
- Indicadores de desempenho

### Gerenciamento de Cupons
- Listagem completa de cupons com filtros
- Criação de novos cupons
- Edição de cupons existentes
- Exclusão de cupons
- Status: Ativo, Expirando, Expirado
- Códigos promocionais com visualização destacada

### Lojas Parceiras
- Catálogo de lojas parceiras
- Status de cada loja
- Contagem de cupons por loja

### Analytics
- Gráficos de redeções
- Métricas de conversão
- Total de visualizações
- Cupons copiados

### Configurações
- Perfil do usuário
- Notificações (Email e Push)
- Privacidade
- Autenticação em duas etapas

## 🎨 Design System

Inspirado no Mercado Livre, com:

- **Cores Principais:**
  - Amarelo ML: `#ffe600`
  - Azul: `#3483fa`
  - Verde Sucesso: `#00a650`
  - Vermelho Erro: `#dd344c`

- **Tipografia:** Proxima Nova (similar ao ML)
- **Componentes:** Botões, cards, inputs, badges modernos
- **Responsividade:** Layout adaptável para diferentes telas

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
coupon-platform/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Coupons.jsx
│   │   ├── CreateCoupon.jsx
│   │   ├── EditCoupon.jsx
│   │   ├── Stores.jsx
│   │   ├── Analytics.jsx
│   │   └── Settings.jsx
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **React Router DOM** - Roteamento
- **Vite** - Build tool
- **CSS Variables** - Design system
- **Inline Styles** - Estilização

## 📱 Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Dashboard principal |
| `/coupons` | Listagem de cupons |
| `/coupons/new` | Criar novo cupom |
| `/coupons/:id/edit` | Editar cupom |
| `/stores` | Lojas parceiras |
| `/analytics` | Analytics e métricas |
| `/settings` | Configurações |

## 🎯 Próximos Passos

- [ ] Integração com backend/API
- [ ] Autenticação de usuários
- [ ] Upload de logos para lojas
- [ ] Exportação de relatórios
- [ ] Sistema de categorias avançado
- [ ] Agendamento de cupons
- [ ] API de integração para parceiros

## 📄 Licença

MIT License

---

Desenvolvido com 💛 inspirado no Mercado Livre
