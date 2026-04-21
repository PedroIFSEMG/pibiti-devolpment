import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const styles = {
  pageHeader: { marginBottom: '24px' },
  pageTitle: { fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-gray-700)', marginBottom: '8px' },
  formCard: { backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-gray-100)', maxWidth: '800px' },
  formGroup: { marginBottom: '24px' },
  label: { display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-gray-700)', marginBottom: '8px' },
  input: { width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-base)' },
  select: { width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-base)', backgroundColor: 'var(--color-white)' },
  textarea: { width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-base)', minHeight: '100px', resize: 'vertical' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  buttonGroup: { display: 'flex', gap: '12px', marginTop: '32px' },
  btnPrimary: { flex: 1, backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)', padding: '14px 24px', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: 'var(--font-size-base)' },
  btnSecondary: { padding: '14px 24px', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', fontWeight: '600', color: 'var(--color-gray-600', cursor: 'pointer', textDecoration: 'none' },
}

function EditCoupon() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '20% OFF em Eletrônicos',
    store: 'TechStore',
    code: 'TECH20',
    discountType: 'percentage',
    discountValue: '20',
    category: 'Eletrônicos',
    description: 'Desconto válido para toda categoria de eletrônicos',
    minPurchase: '100',
    maxUses: '1000',
    expiryDate: '2024-12-31',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/coupons')
  }

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Editar Cupom</h1>
        <p style={{ color: 'var(--color-gray-500)' }}>Atualize as informações do cupom</p>
      </div>
      <form onSubmit={handleSubmit} style={styles.formCard}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Título do Cupom *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Loja *</label>
            <input type="text" name="store" value={formData.store} onChange={handleChange} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Categoria *</label>
            <select name="category" value={formData.category} onChange={handleChange} style={styles.select} required>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Moda">Moda</option>
              <option value="Casa">Casa</option>
            </select>
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Código do Cupom *</label>
          <input type="text" name="code" value={formData.code} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Tipo de Desconto *</label>
            <select name="discountType" value={formData.discountType} onChange={handleChange} style={styles.select} required>
              <option value="percentage">Porcentagem (%)</option>
              <option value="fixed">Valor Fixo (R$)</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Valor do Desconto *</label>
            <input type="text" name="discountValue" value={formData.discountValue} onChange={handleChange} style={styles.input} required />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Descrição</label>
          <textarea name="description" value={formData.description} onChange={handleChange} style={styles.textarea} />
        </div>
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Compra Mínima (R$)</label>
            <input type="number" name="minPurchase" value={formData.minPurchase} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Máximo de Usos *</label>
            <input type="number" name="maxUses" value={formData.maxUses} onChange={handleChange} style={styles.input} required />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Data de Validade *</label>
          <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.buttonGroup}>
          <Link to="/coupons" style={styles.btnSecondary}>Cancelar</Link>
          <button type="submit" style={styles.btnPrimary}>Salvar Alterações</button>
        </div>
      </form>
    </div>
  )
}

export default EditCoupon
