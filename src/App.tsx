import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Index from './pages/Index'
import GiftList from './pages/GiftList'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lista" element={<GiftList />} />
          <Route path="/sucesso" element={<Success />} />
          <Route path="/cancelado" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
