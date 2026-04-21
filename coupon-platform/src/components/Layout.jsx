import { Outlet, Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import '../styles/global.css'

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: 'var(--color-gray-50)',
  },
  sidebar: {
    width: '260px',
    backgroundColor: 'var(--color-white)',
    borderRight: '1px solid var(--color-gray-100)',
    position: 'fixed',
    height: '100vh',
    overflowY: 'auto',
    zIndex: 100,
  },
  main: {
    flex: 1,
    marginLeft: '260px',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: '24px',
  },
}

function Layout() {
  return (
    <div style={styles.layout}>
      <div style={styles.sidebar}>
        <Sidebar />
      </div>
      <div style={styles.main}>
        <Header />
        <main style={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
