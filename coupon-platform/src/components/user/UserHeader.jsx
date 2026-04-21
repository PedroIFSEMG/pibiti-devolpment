import { useState } from 'react';
import './UserHeader.css';

const UserHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="user-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">🏷️</span>
          <h1>Cupom<span>Fácil</span></h1>
        </div>

        {/* Navigation */}
        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link active">Início</a>
          <a href="/categorias" className="nav-link">Categorias</a>
          <a href="/lojas" className="nav-link">Lojas</a>
          <a href="/populares" className="nav-link">Populares</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn-login">Entrar</button>
          <button className="btn-register">Cadastre-se</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default UserHeader;
