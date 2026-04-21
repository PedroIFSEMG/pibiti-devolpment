import { Link } from 'react-router-dom'

const stats = [
  { label: 'Cupons Ativos', value: '1,234', change: '+12%', color: '#3483fa', icon: '🎫' },
  { label: 'Lojas Parceiras', value: '89', change: '+5%', color: '#00a650', icon: '🏪' },
  { label: 'Redeções Hoje', value: '456', change: '+23%', color: '#ffe600', icon: '💰' },
  { label: 'Usuários Ativos', value: '2,345', change: '+18%', color: '#dd344c', icon: '👥' },
]

const recentCoupons = [
  { id: 1, title: '20% OFF em Eletrônicos', store: 'TechStore', code: 'TECH20', uses: 234, status: 'active' },
  { id: 2, title: 'Frete Grátis', store: 'FashionBR', code: 'FRETEGRATIS', uses: 567, status: 'active' },
  { id: 3, title: 'R$50 OFF na primeira compra', store: 'CasaDecor', code: 'CASA50', uses: 123, status: 'active' },
  { id: 4, title: '30% OFF em Livros', store: 'BookWorld', code: 'BOOK30', uses: 89, status: 'expiring' },
  { id: 5, title: 'Buy One Get One', store: 'ShoesPlus', code: 'BOGO2024', uses: 445, status: 'active' },
]

const styles = {
  pageHeader: {
    marginBottom: '24px',
  },
  pageTitle: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: '700',
    color: 'var(--color-gray-700)',
    marginBottom: '8px',
  },
  pageSubtitle: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-gray-500)',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginBottom: '32px',
  },
  statCard: (color) => ({
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--radius-lg)',
    padding: '24px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-gray-100)',
    position: 'relative',
    overflow: 'hidden',
  }),
  statIcon: (color) => ({
    width: '48px',
    height: '48px',
    borderRadius: 'var(--radius-md)',
    backgroundColor: `${color}15`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '16px',
  }),
  statValue: {
    fontSize: 'var(--font-size-3xl)',
    fontWeight: '700',
    color: 'var(--color-gray-700)',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-gray-500)',
    marginBottom: '8px',
  },
  statChange: (change) => ({
    fontSize: 'var(--font-size-sm)',
    color: change.startsWith('+') ? 'var(--color-success)' : 'var(--color-error)',
    fontWeight: '600',
  }),
  sectionCard: {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--radius-lg)',
    padding: '24px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-gray-100)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: 'var(--font-size-xl)',
    fontWeight: '600',
    color: 'var(--color-gray-700)',
  },
  viewAllLink: {
    color: 'var(--color-secondary)',
    fontWeight: '600',
    fontSize: 'var(--font-size-sm)',
    textDecoration: 'none',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '12px 16px',
    borderBottom: '2px solid var(--color-gray-100)',
    color: 'var(--color-gray-500)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: '600',
  },
  td: {
    padding: '16px',
    borderBottom: '1px solid var(--color-gray-100)',
    color: 'var(--color-gray-600)',
  },
  statusBadge: (status) => ({
    padding: '4px 12px',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: '600',
    backgroundColor: status === 'active' ? '#00a65015' : '#ff9a0015',
    color: status === 'active' ? 'var(--color-success)' : 'var(--color-warning)',
  }),
  codeBox: {
    fontFamily: 'monospace',
    backgroundColor: 'var(--color-gray-100)',
    padding: '6px 12px',
    borderRadius: 'var(--radius-sm)',
    fontWeight: '600',
    color: 'var(--color-secondary)',
  },
  btnPrimary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)',
    padding: '12px 24px',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color var(--transition-fast)',
  },
}

function Dashboard() {
  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Dashboard</h1>
        <p style={styles.pageSubtitle}>Visão geral da sua plataforma de cupons</p>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard(stat.color)}>
            <div style={styles.statIcon(stat.color)}>{stat.icon}</div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
            <div style={styles.statChange(stat.change)}>{stat.change} este mês</div>
          </div>
        ))}
      </div>

      {/* Recent Coupons Table */}
      <div style={styles.sectionCard}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Cupons Recentes</h2>
          <Link to="/coupons" style={styles.viewAllLink}>Ver todos →</Link>
        </div>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Cupom</th>
              <th style={styles.th}>Loja</th>
              <th style={styles.th}>Código</th>
              <th style={styles.th}>Usos</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentCoupons.map((coupon) => (
              <tr key={coupon.id}>
                <td style={{ ...styles.td, fontWeight: '600', color: 'var(--color-gray-700)' }}>
                  {coupon.title}
                </td>
                <td style={styles.td}>{coupon.store}</td>
                <td style={styles.td}>
                  <span style={styles.codeBox}>{coupon.code}</span>
                </td>
                <td style={styles.td}>{coupon.uses}</td>
                <td style={styles.td}>
                  <span style={styles.statusBadge(coupon.status)}>
                    {coupon.status === 'active' ? 'Ativo' : 'Expirando'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
