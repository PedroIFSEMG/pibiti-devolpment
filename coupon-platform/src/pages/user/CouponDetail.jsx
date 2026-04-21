import { useState } from 'react';
import './CouponDetail.css';

const CouponDetail = () => {
  const [copied, setCopied] = useState(false);

  const coupon = {
    id: 1,
    store: 'Amazon',
    logo: '🛒',
    title: '20% OFF em Eletrônicos',
    description: 'Aproveite este cupom exclusivo para economizar 20% em todos os produtos da categoria de eletrônicos. Válido para compras acima de R$ 100.',
    code: 'TECH20',
    discount: '20%',
    category: 'Eletrônicos',
    minPurchase: 'R$ 100',
    maxDiscount: 'R$ 500',
    validUntil: '31/12/2025',
    terms: [
      'Válido apenas para a categoria de Eletrônicos',
      'Compra mínima de R$ 100',
      'Desconto máximo de R$ 500',
      'Não acumulável com outras promoções',
      'Válido por tempo limitado'
    ],
    stats: {
      uses: 1234,
      success: 98,
      verified: true
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="coupon-detail">
      <div className="coupon-detail-container">
        {/* Header */}
        <div className="detail-header">
          <div className="store-info">
            <span className="store-logo-large">{coupon.logo}</span>
            <div className="store-details">
              <h1>{coupon.store}</h1>
              {coupon.stats.verified && (
                <span className="verified-badge">✓ Verificado</span>
              )}
            </div>
          </div>
          <div className="discount-display">
            <span className="discount-value">{coupon.discount}</span>
            <span className="discount-label">DE DESCONTO</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="detail-content">
          <div className="detail-main">
            <h2>{coupon.title}</h2>
            <p className="description">{coupon.description}</p>

            {/* Code Box */}
            <div className="code-box">
              <div className="code-display">
                <code>{coupon.code}</code>
              </div>
              <button 
                className={`btn-copy-large ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? '✓ Copiado!' : 'Copiar Código'}
              </button>
            </div>

            {/* Stats */}
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-value">{coupon.stats.uses}</span>
                <span className="stat-label">vezes usado</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{coupon.stats.success}%</span>
                <span className="stat-label">taxa de sucesso</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">★ 4.8</span>
                <span className="stat-label">avaliação</span>
              </div>
            </div>

            {/* Terms */}
            <div className="terms-section">
              <h3>Termos e Condições</h3>
              <ul className="terms-list">
                {coupon.terms.map((term, index) => (
                  <li key={index}>• {term}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar">
            <div className="info-card">
              <h3>Informações</h3>
              <div className="info-row">
                <span>Categoria:</span>
                <strong>{coupon.category}</strong>
              </div>
              <div className="info-row">
                <span>Compra mínima:</span>
                <strong>{coupon.minPurchase}</strong>
              </div>
              <div className="info-row">
                <span>Desconto máximo:</span>
                <strong>{coupon.maxDiscount}</strong>
              </div>
              <div className="info-row">
                <span>Válido até:</span>
                <strong>{coupon.validUntil}</strong>
              </div>
            </div>

            <div className="action-card">
              <h3>Como usar?</h3>
              <ol className="steps-list">
                <li>Copie o código do cupom</li>
                <li>Clique em "Ir para loja"</li>
                <li>Faça suas compras normalmente</li>
                <li>Cole o código no checkout</li>
              </ol>
              <button className="btn-go-store">
                Ir para {coupon.store} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponDetail;
