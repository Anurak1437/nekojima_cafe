import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { LanguageContext } from '../Context/LanguageContext'
import { translations } from '../locales/translations'
import './Cart.css'

function Cart() {
  const nav = useNavigate()
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useContext(CartContext)
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>{t.cart.empty}</h2>
          <p>{t.cart.emptyDesc}</p>
          <button
            className="continue-shopping-btn"
            onClick={() => nav('/')}
          >
            {t.cart.backToMenu}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1>{t.cart.title}</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">{item.price} {t.cart.baht}</p>
              </div>

              <div className="item-quantity">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="qty-btn"
                >
                -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="qty-btn"
                >
                +
                </button>
              </div>

              <div className="item-total">
                <p className="total-price">{item.price * item.quantity} {t.cart.baht}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
                title="ลบรายการ"
              >
              ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>{t.cart.orderSummary}</h2>
          <div className="summary-row">
            <span>{t.cart.quantity}</span>
            <span>{getTotalItems()} {t.cart.items}</span>
          </div>
          <div className="summary-row total">
            <span>{t.cart.subtotal}</span>
            <span className="total-amount">{getTotalPrice().toLocaleString()} {t.cart.baht}</span>
          </div>
          <button
            className="checkout-btn"
            onClick={() => nav('/checkout')}
          >
            {t.cart.checkout}
          </button>
          <button
            className="continue-btn"
            onClick={() => nav('/')}
          >
            {t.cart.selectOther}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
