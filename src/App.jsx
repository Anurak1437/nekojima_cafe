import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import { LanguageProvider } from './Context/LanguageContext'
import { SearchProvider } from './Context/SearchContext'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CategoryPage from './Components/CategoryPage'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Settings from './Components/Settings'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <SearchProvider>
          <Router>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<CategoryPage category="specialmenus" />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Router>
        </SearchProvider>
      </CartProvider>
    </LanguageProvider>
  )
}

export default App
