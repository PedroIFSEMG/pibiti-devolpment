import { useState } from 'react'

const styles = {
  header: {
    backgroundColor: 'var(--color-white)',
    padding: '16px 24px',
    borderBottom: '1px solid var(--color-gray-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
    maxWidth: '600px',
  },
  searchInput: {
    flex: 1,
    padding: '10px 16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-base)',
    backgroundColor: 'var(--color-gray-50)',
    transition: 'all var(--transition-fast)',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  notificationBtn: {
    position: 'relative',
    padding: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    fontSize: '20px',
  },
  notificationBadge: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--color-error)',
    borderRadius: 'var(--radius-full)',
    border: '2px solid var(--color-white)',
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 12px',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'background-color var(--transition-fast)',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: 'var(--radius-full)',
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: 'var(--font-size-sm)',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: '600',
    color: 'var(--color-gray-700)',
  },
  userRole: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-gray-400)',
  },
}

function Header() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <header style={styles.header}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar cupons, lojas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>
      
      <div style={styles.userSection}>
        <button style={styles.notificationBtn}>
          🔔
          <span style={styles.notificationBadge}></span>
        </button>
        
        <div style={styles.userMenu}>
          <div style={styles.avatar}>A</div>
          <div style={styles.userInfo}>
            <span style={styles.userName}>Admin</span>
            <span style={styles.userRole}>Administrador</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
