import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Coupons from './pages/Coupons'
import CreateCoupon from './pages/CreateCoupon'
import EditCoupon from './pages/EditCoupon'
import Stores from './pages/Stores'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import UserLayout from './components/user/UserLayout'
import UserHome from './pages/user/UserHome'
import CouponDetail from './pages/user/CouponDetail'

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="coupons/new" element={<CreateCoupon />} />
        <Route path="coupons/:id/edit" element={<EditCoupon />} />
        <Route path="stores" element={<Stores />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      {/* User Routes */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserHome />} />
        <Route path="cupom/:id" element={<CouponDetail />} />
        <Route path="categorias" element={<UserHome />} />
        <Route path="lojas" element={<UserHome />} />
        <Route path="populares" element={<UserHome />} />
      </Route>
    </Routes>
  )
}

export default App
