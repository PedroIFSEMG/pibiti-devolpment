import { useState } from 'react'
import { Link } from 'react-router-dom'

const couponsData = [
  { id: 1, title: '20% OFF em Eletrônicos', store: 'TechStore', code: 'TECH20', discount: '20%', uses: 234, maxUses: 1000, expiryDate: '2024-12-31', status: 'active', category: 'Eletrônicos' },
  { id: 2, title: 'Frete Grátis', store: 'FashionBR', code: 'FRETEGRATIS', discount: 'Frete', uses: 567, maxUses: 500, expiryDate: '2024-11-30', status: 'active', category: 'Moda' },
  { id: 3, title: 'R$50 OFF na primeira compra', store: 'CasaDecor', code: 'CASA50', discount: 'R$50', uses: 123, maxUses: 200, expiryDate: '2024-10-15', status: 'expiring', category: 'Casa' },
  { id: 4, title: '30% OFF em Livros', store: 'BookWorld', code: 'BOOK30', discount: '30%', uses: 89, maxUses: 300, expiryDate: '2024-09-20', status: 'expired', category: 'Livros' },
  { id: 5, title: 'Buy One Get One', store: 'ShoesPlus', code: 'BOGO2024', discount: 'BOGO', uses: 445, maxUses: 600, expiryDate: '2024-12-25', status: 'active', category: 'Calçados' },
  { id: 6, title: '15% OFF em Beleza', store: 'BeautyShop', code: 'BEAUTY15', discount: '15%', uses: 312, maxUses: 400, expiryDate: '2024-11-15', status: 'active', category: 'Beleza' },
]

const styles = {
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  pageTitle: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: '700',
    color: 'var(--color-gray-700)',
  },
  btnPrimary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)',
    padding: '12px 24px',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color var(--transition-fast)',
  },
  filtersCard: {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--radius-lg)',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-gray-100)',
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  filterInput: {
    padding: '10px 16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-base)',
    minWidth: '200px',
  },
  filterSelect: {
    padding: '10px 16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-base)',
    backgroundColor: 'var(--color-white)',
    cursor: 'pointer',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '20px',
  },
  couponCard: (status) => ({
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--radius-lg)',
    padding: '20px',
    boxShadow: 'var(--shadow-sm)',
    border: `2px solid ${status === 'active' ? '#00a65030' : status === 'expiring' ? '#ff9a0030' : '#dd344c30'}`,
    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
  }),
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  storeBadge: {
    backgroundColor: 'var(--color-gray-100)',
    padding: '6px 12px',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: '600',
    color: 'var(--color-gray-600)',
  },
  statusBadge: (status) => ({
    padding: '4px 12px',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: '600',
    backgroundColor: status === 'active' ? '#00a65015' : status === 'expiring' ? '#ff9a0015' : '#dd344c15',
    color: status === 'active' ? 'var(--color-success)' : status === 'expiring' ? 'var(--color-warning)' : 'var(--color-error)',
  }),
  couponTitle: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: '600',
    color: 'var(--color-gray-700)',
    marginBottom: '8px',
  },
  codeBox: {
    fontFamily: 'monospace',
    backgroundColor: 'var(--color-primary)',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    fontWeight: '700',
    color: 'var(--color-gray-700)',
    textAlign: 'center',
    margin: '16px 0',
    border: '2px dashed var(--color-gray-600)',
  },
  cardStats: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '16px',
    borderTop: '1px solid var(--color-gray-100)',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: '700',
    color: 'var(--color-gray-700)',
  },
  statLabel: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-gray-500)',
  },
  cardActions: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
  },
  btnSecondary: {
    flex: 1,
    padding: '10px',
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    color: 'var(--color-gray-600)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
  btnDanger: {
    padding: '10px 16px',
    backgroundColor: '#dd344c15',
    border: '1px solid var(--color-error)',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    color: 'var(--color-error)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
}

function Coupons() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredCoupons = couponsData.filter(coupon => {
    const matchesSearch = coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || coupon.status === statusFilter
    const matchesCategory = categoryFilter === 'all' || coupon.category === categoryFilter
    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = [...new Set(couponsData.map(c => c.category))]

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Cupons</h1>
        <Link to="/coupons/new" style={styles.btnPrimary}>
          <span>+</span> Novo Cupom
        </Link>
      </div>

      {/* Filters */}
      <div style={styles.filtersCard}>
        <input
          type="text"
          placeholder="Buscar cupons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.filterInput}
        />
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          style={styles.filterSelect}
        >
          <option value="all">Todos Status</option>
          <option value="active">Ativos</option>
          <option value="expiring">Expirando</option>
          <option value="expired">Expirados</option>
        </select>
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={styles.filterSelect}
        >
          <option value="all">Todas Categorias</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Coupons Grid */}
      <div style={styles.cardsGrid}>
        {filteredCoupons.map((coupon) => (
          <div key={coupon.id} style={styles.couponCard(coupon.status)}>
            <div style={styles.cardHeader}>
              <span style={styles.storeBadge}>{coupon.store}</span>
              <span style={styles.statusBadge(coupon.status)}>
                {coupon.status === 'active' ? 'Ativo' : coupon.status === 'expiring' ? 'Expirando' : 'Expirado'}
              </span>
            </div>
            
            <h3 style={styles.couponTitle}>{coupon.title}</h3>
            <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-sm)', marginBottom: '8px' }}>
              Categoria: {coupon.category}
            </p>
            
            <div style={styles.codeBox}>
              {coupon.code}
            </div>
            
            <div style={styles.cardStats}>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{coupon.discount}</div>
                <div style={styles.statLabel}>Desconto</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{coupon.uses}/{coupon.maxUses}</div>
                <div style={styles.statLabel}>Usos</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{new Date(coupon.expiryDate).toLocaleDateString('pt-BR')}</div>
                <div style={styles.statLabel}>Validade</div>
              </div>
            </div>
            
            <div style={styles.cardActions}>
              <Link to={`/coupons/${coupon.id}/edit`} style={{ ...styles.btnSecondary, textDecoration: 'none', textAlign: 'center' }}>
                Editar
              </Link>
              <button style={styles.btnDanger}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coupons
