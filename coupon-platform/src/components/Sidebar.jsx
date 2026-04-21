import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/coupons', label: 'Cupons', icon: '🎫' },
  { path: '/stores', label: 'Lojas', icon: '🏪' },
  { path: '/analytics', label: 'Analytics', icon: '📈' },
  { path: '/settings', label: 'Configurações', icon: '⚙️' },
]

const styles = {
  sidebar: {
    padding: '20px 0',
  },
  logo: {
    padding: '0 24px 24px',
    borderBottom: '1px solid var(--color-gray-100)',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--color-secondary)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  nav: {
    padding: '16px 0',
  },
  menuItem: (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 24px',
    color: isActive ? 'var(--color-secondary)' : 'var(--color-gray-600)',
    backgroundColor: isActive ? 'rgba(52, 131, 250, 0.08)' : 'transparent',
    borderRight: isActive ? '3px solid var(--color-secondary)' : '3px solid transparent',
    textDecoration: 'none',
    fontWeight: isActive ? '600' : '400',
    transition: 'all var(--transition-fast)',
    cursor: 'pointer',
  }),
}

function Sidebar() {
  const location = useLocation()

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={styles.logoText}>
            <span>🎟️</span>
            CupomFácil
          </div>
        </Link>
      </div>
      
      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path))
          
          return (
            <Link
              key={item.path}
              to={item.path}
              style={styles.menuItem(isActive)}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
