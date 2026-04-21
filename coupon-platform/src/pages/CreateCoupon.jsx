import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
  formCard: {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--radius-lg)',
    padding: '32px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-gray-100)',
    maxWidth: '800px',
  },
  formGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: 'var(--font-size-sm)',
    fontWeight: '600',
    color: 'var(--color-gray-700)',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-base)',
    transition: 'border-color var(--transition-fast)',
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-base)',
    backgroundColor: 'var(--color-white)',
    cursor: 'pointer',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-base)',
    minHeight: '100px',
    resize: 'vertical',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  helpText: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-gray-500)',
    marginTop: '6px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '32px',
  },
  btnPrimary: {
    flex: 1,
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)',
    padding: '14px 24px',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'var(--font-size-base)',
    transition: 'background-color var(--transition-fast)',
  },
  btnSecondary: {
    padding: '14px 24px',
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    color: 'var(--color-gray-600',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: 'var(--font-size-base)',
    transition: 'all var(--transition-fast)',
  },
  codePreview: {
    backgroundColor: 'var(--color-primary)',
    padding: '16px',
    borderRadius: 'var(--radius-md)',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 'var(--font-size-xl)',
    fontWeight: '700',
    border: '2px dashed var(--color-gray-600)',
    marginTop: '8px',
  },
}

function CreateCoupon() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    store: '',
    code: '',
    discountType: 'percentage',
    discountValue: '',
    category: '',
    description: '',
    minPurchase: '',
    maxUses: '',
    expiryDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui iria a lógica de salvar
    navigate('/coupons')
  }

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Novo Cupom</h1>
        <p style={{ color: 'var(--color-gray-500)' }}>Crie um novo cupom de desconto</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.formCard}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Título do Cupom *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: 20% OFF em Eletrônicos"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Loja *</label>
            <input
              type="text"
              name="store"
              value={formData.store}
              onChange={handleChange}
              placeholder="Ex: TechStore"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Categoria *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Selecione...</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Moda">Moda</option>
              <option value="Casa">Casa</option>
              <option value="Livros">Livros</option>
              <option value="Calçados">Calçados</option>
              <option value="Beleza">Beleza</option>
              <option value="Esportes">Esportes</option>
              <option value="Alimentos">Alimentos</option>
            </select>
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Código do Cupom *</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Ex: TECH20"
            style={styles.input}
            required
          />
          {formData.code && (
            <div style={styles.codePreview}>{formData.code.toUpperCase()}</div>
          )}
          <p style={styles.helpText}>O código será exibido em letras maiúsculas</p>
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Tipo de Desconto *</label>
            <select
              name="discountType"
              value={formData.discountType}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="percentage">Porcentagem (%)</option>
              <option value="fixed">Valor Fixo (R$)</option>
              <option value="shipping">Frete Grátis</option>
              <option value="bogo">Compre 1 Leve 2</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Valor do Desconto *</label>
            <input
              type="text"
              name="discountValue"
              value={formData.discountValue}
              onChange={handleChange}
              placeholder={formData.discountType === 'percentage' ? 'Ex: 20' : 'Ex: 50'}
              style={styles.input}
              required
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Descrição</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descreva os termos e condições do cupom..."
            style={styles.textarea}
          />
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Compra Mínima (R$)</label>
            <input
              type="number"
              name="minPurchase"
              value={formData.minPurchase}
              onChange={handleChange}
              placeholder="Ex: 100"
              style={styles.input}
            />
            <p style={styles.helpText}>Deixe em branco para sem valor mínimo</p>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Máximo de Usos *</label>
            <input
              type="number"
              name="maxUses"
              value={formData.maxUses}
              onChange={handleChange}
              placeholder="Ex: 1000"
              style={styles.input}
              required
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Data de Validade *</label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.buttonGroup}>
          <Link to="/coupons" style={styles.btnSecondary}>Cancelar</Link>
          <button type="submit" style={styles.btnPrimary}>Criar Cupom</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCoupon
