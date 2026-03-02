import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './Header.css'

function Header() {
  const { getTotalItems } = useContext(CartContext)

  return (
    <div className="header">
      {/* ใส่รูป background ที่นี่ */}
      <img src="/Nekojima.jpg" alt="Header Background" className="header-bg" />
      
      <div className="header-overlay">
        <div className="header-content">
          <Link to="/" className="header-logo-link p-3">
            <img src="/LogoNekojima.png" alt="Nekojima Cafe" className="header-logo" />
          </Link>

          <div className="header-actions">
            <Link to="/settings" className="action-button settings-btn" title="Settings">
              <span className="action-icon">⚙️</span>
            </Link>
            <Link to="/cart" className="action-button cart-btn">
              <span className="action-icon">🛒</span>
              {getTotalItems() > 0 && (
                <span className="action-badge">{getTotalItems()}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
