import { useState } from 'react'

const storesData = [
  { id: 1, name: 'TechStore', logo: '🔌', coupons: 23, category: 'Eletrônicos', status: 'active' },
  { id: 2, name: 'FashionBR', logo: '👗', coupons: 45, category: 'Moda', status: 'active' },
  { id: 3, name: 'CasaDecor', logo: '🏠', coupons: 18, category: 'Casa', status: 'active' },
  { id: 4, name: 'BookWorld', logo: '📚', coupons: 12, category: 'Livros', status: 'inactive' },
  { id: 5, name: 'ShoesPlus', logo: '👟', coupons: 31, category: 'Calçados', status: 'active' },
  { id: 6, name: 'BeautyShop', logo: '💄', coupons: 27, category: 'Beleza', status: 'active' },
]

const styles = {
  pageHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' },
  pageTitle: { fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-gray-700)' },
  btnPrimary: { backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)', padding: '12px 24px', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer' },
  searchInput: { padding: '10px 16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-base)', width: '300px', marginBottom: '20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' },
  storeCard: { backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-gray-100)', textAlign: 'center' },
  storeLogo: { fontSize: '48px', marginBottom: '16px' },
  storeName: { fontSize: 'var(--font-size-xl)', fontWeight: '700', color: 'var(--color-gray-700)', marginBottom: '8px' },
  storeCategory: { fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginBottom: '16px' },
  statsRow: { display: 'flex', justifyContent: 'center', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-gray-100)' },
  statValue: { fontSize: 'var(--font-size-lg)', fontWeight: '700', color: 'var(--color-gray-700)' },
  statLabel: { fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' },
  statusBadge: (status) => ({ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: 'var(--font-size-xs)', fontWeight: '600', backgroundColor: status === 'active' ? '#00a65015' : '#dd344c15', color: status === 'active' ? 'var(--color-success)' : 'var(--color-error)' }),
}

function Stores() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredStores = storesData.filter(store => store.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Lojas Parceiras</h1>
        <button style={styles.btnPrimary}>+ Nova Loja</button>
      </div>
      <input type="text" placeholder="Buscar lojas..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={styles.searchInput} />
      <div style={styles.grid}>
        {filteredStores.map((store) => (
          <div key={store.id} style={styles.storeCard}>
            <div style={styles.storeLogo}>{store.logo}</div>
            <h3 style={styles.storeName}>{store.name}</h3>
            <p style={styles.storeCategory}>{store.category}</p>
            <span style={styles.statusBadge(store.status)}>{store.status === 'active' ? 'Ativa' : 'Inativa'}</span>
            <div style={styles.statsRow}>
              <div>
                <div style={styles.statValue}>{store.coupons}</div>
                <div style={styles.statLabel}>Cupons</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stores
