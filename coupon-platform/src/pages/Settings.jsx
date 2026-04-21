import { useState } from 'react'

const styles = {
  pageHeader: { marginBottom: '24px' },
  pageTitle: { fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-gray-700)' },
  settingsCard: { backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-gray-100)', maxWidth: '800px' },
  section: { marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid var(--color-gray-100)' },
  sectionTitle: { fontSize: 'var(--font-size-xl)', fontWeight: '600', color: 'var(--color-gray-700)', marginBottom: '16px' },
  formGroup: { marginBottom: '20px' },
  label: { display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-gray-700)', marginBottom: '8px' },
  input: { width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-base)' },
  toggle: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--color-gray-50)' },
  toggleLabel: { fontSize: 'var(--font-size-base)', fontWeight: '500', color: 'var(--color-gray-700)' },
  toggleDesc: { fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginTop: '4px' },
  switch: (checked) => ({ width: '44px', height: '24px', backgroundColor: checked ? 'var(--color-secondary)' : 'var(--color-gray-300)', borderRadius: 'var(--radius-full)', position: 'relative', cursor: 'pointer', transition: 'background-color var(--transition-fast)' }),
  switchKnob: (checked) => ({ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: 'var(--radius-full)', position: 'absolute', top: '2px', left: checked ? '22px' : '2px', transition: 'left var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }),
  btnPrimary: { backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)', padding: '14px 32px', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: 'var(--font-size-base)' },
}

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    publicProfile: true,
    twoFactorAuth: false,
  })

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Configurações</h1>
      </div>
      <div style={styles.settingsCard}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Perfil</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nome</label>
            <input type="text" defaultValue="Admin" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" defaultValue="admin@cupomfacil.com" style={styles.input} />
          </div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Notificações</h2>
          <div style={styles.toggle}>
            <div>
              <div style={styles.toggleLabel}>Notificações por Email</div>
              <div style={styles.toggleDesc}>Receba atualizações sobre seus cupons</div>
            </div>
            <div style={styles.switch(settings.emailNotifications)} onClick={() => toggleSetting('emailNotifications')}>
              <div style={styles.switchKnob(settings.emailNotifications)}></div>
            </div>
          </div>
          <div style={styles.toggle}>
            <div>
              <div style={styles.toggleLabel}>Notificações Push</div>
              <div style={styles.toggleDesc}>Alertas em tempo real no navegador</div>
            </div>
            <div style={styles.switch(settings.pushNotifications)} onClick={() => toggleSetting('pushNotifications')}>
              <div style={styles.switchKnob(settings.pushNotifications)}></div>
            </div>
          </div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Privacidade</h2>
          <div style={styles.toggle}>
            <div>
              <div style={styles.toggleLabel}>Perfil Público</div>
              <div style={styles.toggleDesc}>Permitir que outros vejam seu perfil</div>
            </div>
            <div style={styles.switch(settings.publicProfile)} onClick={() => toggleSetting('publicProfile')}>
              <div style={styles.switchKnob(settings.publicProfile)}></div>
            </div>
          </div>
          <div style={styles.toggle}>
            <div>
              <div style={styles.toggleLabel}>Autenticação em Duas Etapas</div>
              <div style={styles.toggleDesc}>Adicione uma camada extra de segurança</div>
            </div>
            <div style={styles.switch(settings.twoFactorAuth)} onClick={() => toggleSetting('twoFactorAuth')}>
              <div style={styles.switchKnob(settings.twoFactorAuth)}></div>
            </div>
          </div>
        </div>
        <button style={styles.btnPrimary}>Salvar Configurações</button>
      </div>
    </div>
  )
}

export default Settings
