import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Coupons from './pages/Coupons'
import CreateCoupon from './pages/CreateCoupon'
import EditCoupon from './pages/EditCoupon'
import Stores from './pages/Stores'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="coupons/new" element={<CreateCoupon />} />
        <Route path="coupons/:id/edit" element={<EditCoupon />} />
        <Route path="stores" element={<Stores />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
