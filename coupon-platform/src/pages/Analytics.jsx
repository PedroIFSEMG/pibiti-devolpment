const styles = {
  pageHeader: { marginBottom: '24px' },
  pageTitle: { fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-gray-700)' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' },
  statCard: { backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-gray-100)' },
  statValue: { fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'var(--color-gray-700)' },
  statLabel: { fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginTop: '8px' },
  chartCard: { backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-gray-100)', marginBottom: '20px' },
  sectionTitle: { fontSize: 'var(--font-size-xl)', fontWeight: '600', color: 'var(--color-gray-700)', marginBottom: '20px' },
  barChart: { display: 'flex', alignItems: 'flex-end', gap: '12px', height: '200px', paddingTop: '20px' },
  bar: (height, color) => ({ flex: 1, height: `${height}%`, backgroundColor: color, borderRadius: 'var(--radius-md) var(--radius-md) 0 0', transition: 'height var(--transition-base)' }),
  barLabel: { textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)', marginTop: '8px' },
}

const chartData = [
  { day: 'Seg', value: 65 },
  { day: 'Ter', value: 45 },
  { day: 'Qua', value: 78 },
  { day: 'Qui', value: 52 },
  { day: 'Sex', value: 89 },
  { day: 'Sab', value: 95 },
  { day: 'Dom', value: 70 },
]

function Analytics() {
  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Analytics</h1>
      </div>
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statValue}>12,456</div>
          <div style={styles.statLabel}>Total de Visualizações</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>3,234</div>
          <div style={styles.statLabel}>Cupons Copiados</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>1,567</div>
          <div style={styles.statLabel}>Conversões</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>48%</div>
          <div style={styles.statLabel}>Taxa de Conversão</div>
        </div>
      </div>
      <div style={styles.chartCard}>
        <h2 style={styles.sectionTitle}>Redeções por Dia</h2>
        <div style={styles.barChart}>
          {chartData.map((item, index) => (
            <div key={index} style={{ flex: 1, textAlign: 'center' }}>
              <div style={styles.bar(item.value, index % 2 === 0 ? '#3483fa' : '#ffe600')}></div>
              <div style={styles.barLabel}>{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analytics
