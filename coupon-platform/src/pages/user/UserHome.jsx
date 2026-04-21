import './UserHome.css';

const UserHome = () => {
  const featuredCoupons = [
    { id: 1, store: 'Amazon', title: '20% OFF em Eletrônicos', code: 'TECH20', discount: '20%', category: 'Eletrônicos', logo: '🛒' },
    { id: 2, store: 'Nike', title: 'Frete Grátis + 15% OFF', code: 'NIKE15', discount: '15%', category: 'Moda', logo: '👟' },
    { id: 3, store: 'iFood', title: 'R$ 25 OFF no primeiro pedido', code: 'FOOD25', discount: 'R$25', category: 'Alimentação', logo: '🍔' },
    { id: 4, store: 'Booking', title: '10% OFF em hotéis', code: 'TRAVEL10', discount: '10%', category: 'Viagem', logo: '✈️' },
  ];

  const categories = [
    { name: 'Eletrônicos', icon: '📱', count: 234 },
    { name: 'Moda', icon: '👕', count: 189 },
    { name: 'Alimentação', icon: '🍕', count: 156 },
    { name: 'Viagem', icon: '🏨', count: 98 },
    { name: 'Beleza', icon: '💄', count: 145 },
    { name: 'Casa', icon: '🏠', count: 112 },
  ];

  return (
    <div className="user-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Economize com os melhores cupons</h1>
          <p>Milhares de cupons de desconto das suas lojas favoritas</p>
          <div className="search-box">
            <input type="text" placeholder="Busque por loja ou categoria..." />
            <button className="btn-search">🔍</button>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="floating-coupon coupon-1">💰</div>
          <div className="floating-coupon coupon-2">🎁</div>
          <div className="floating-coupon coupon-3">🏷️</div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>Categorias Populares</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.name} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.name}</h3>
              <p>{cat.count} cupons</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Coupons */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Cupons em Destaque</h2>
          <a href="#" className="view-all">Ver todos →</a>
        </div>
        <div className="coupons-grid">
          {featuredCoupons.map((coupon) => (
            <div key={coupon.id} className="coupon-card">
              <div className="coupon-header">
                <div className="store-logo">{coupon.logo}</div>
                <span className="discount-badge">{coupon.discount}</span>
              </div>
              <div className="coupon-body">
                <h3>{coupon.title}</h3>
                <p className="store-name">{coupon.store}</p>
                <div className="coupon-code-container">
                  <code className="coupon-code">{coupon.code}</code>
                  <button className="btn-copy">Copiar</button>
                </div>
              </div>
              <div className="coupon-footer">
                <span className="category-tag">{coupon.category}</span>
                <button className="btn-use">Usar Cupom</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <h2>Como Funciona</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Escolha seu cupom</h3>
            <p>Navegue pelas categorias e encontre o melhor desconto</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Copie o código</h3>
            <p>Clique em copiar e guarde o código do cupom</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Economize!</h3>
            <p>Cole o código na hora de pagar e aproveite o desconto</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Receba cupons exclusivos</h2>
          <p>Cadastre-se e receba os melhores descontos no seu email</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu melhor email" />
            <button type="submit" className="btn-subscribe">Inscrever-se</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserHome;
