import './UserFooter.css';

const UserFooter = () => {
  return (
    <footer className="user-footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🏷️</span>
              <h2>Cupom<span>Fácil</span></h2>
            </div>
            <p>Economize com os melhores cupons de desconto das suas lojas favoritas.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Categorias</h3>
            <ul>
              <li><a href="#">Eletrônicos</a></li>
              <li><a href="#">Moda</a></li>
              <li><a href="#">Alimentação</a></li>
              <li><a href="#">Viagem</a></li>
              <li><a href="#">Beleza</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Lojas Populares</h3>
            <ul>
              <li><a href="#">Amazon</a></li>
              <li><a href="#">Magazine Luiza</a></li>
              <li><a href="#">Nike</a></li>
              <li><a href="#">iFood</a></li>
              <li><a href="#">Booking</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sobre</h3>
            <ul>
              <li><a href="#">Como funciona</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>&copy; 2025 CupomFácil. Todos os direitos reservados.</p>
          <div className="payment-methods">
            <span>💳</span>
            <span>🏦</span>
            <span>📱</span>
            <span>💰</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
