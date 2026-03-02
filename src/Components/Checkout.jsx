import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { LanguageContext } from '../Context/LanguageContext'
import { translations } from '../locales/translations'
import './Checkout.css'

function Checkout() {
  const nav = useNavigate()
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext)
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const [formData, setFormData] = useState({
    paymentMethod: 'credit-card'
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>{t.checkout.emptyCart}</h2>
          <p>{t.checkout.emptyCartDesc}</p>
          <button onClick={() => nav('/')}>
            {t.checkout.backToMenu}
          </button>
        </div>
      </div>
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cartItems.length === 0) {
      alert(t.checkout.emptyCartDesc)
      return
    }
    setOrderPlaced(true)
  }

  const getPaymentMethodLabel = () => {
    return t.checkout.paymentMethods[formData.paymentMethod]
  }

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <div className="success-icon">✅</div>
          <h1>{t.checkout.success}</h1>
          <p>{t.checkout.successMessage}</p>
          <p>{t.checkout.willDeliver}</p>
          
          <div className="order-details">
            <h3>{t.checkout.orderDetails}</h3>
            <p><strong>{t.checkout.paymentMethod}</strong> {getPaymentMethodLabel()}</p>
            
            <div className="order-items">
              <h4>{t.checkout.foodList}</h4>
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                  <span>{(item.price * item.quantity).toLocaleString()} {t.checkout.baht}</span>
                </div>
              ))}
            </div>
            
            <div className="order-total">
              <strong>{t.checkout.finalTotal} {getTotalPrice().toLocaleString()} {t.checkout.baht}</strong>
            </div>
          </div>

          <button
            className="back-home-btn"
            onClick={() => {
              clearCart()
              nav('/')
            }}
          >
            {t.checkout.backHome}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h1>{t.checkout.title}</h1>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <h2>{t.checkout.selectPayment}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="payment-methods">
                <label className={`payment-option ${formData.paymentMethod === 'credit-card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-icon">💳</span>
                  <span className="payment-label">{t.checkout.paymentMethods['credit-card']}</span>
                </label>
                
                <label className={`payment-option ${formData.paymentMethod === 'debit-card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="debit-card"
                    checked={formData.paymentMethod === 'debit-card'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-icon">🏧</span>
                  <span className="payment-label">{t.checkout.paymentMethods['debit-card']}</span>
                </label>
                
                <label className={`payment-option ${formData.paymentMethod === 'cash-on-delivery' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    checked={formData.paymentMethod === 'cash-on-delivery'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-icon">💵</span>
                  <span className="payment-label">{t.checkout.paymentMethods['cash-on-delivery']}</span>
                </label>
                
                <label className={`payment-option ${formData.paymentMethod === 'bank-transfer' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-icon">🏦</span>
                  <span className="payment-label">{t.checkout.paymentMethods['bank-transfer']}</span>
                </label>
                
                <label className={`payment-option ${formData.paymentMethod === 'promptpay' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="promptpay"
                    checked={formData.paymentMethod === 'promptpay'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-icon">📱</span>
                  <span className="payment-label">{t.checkout.paymentMethods['promptpay']}</span>
                </label>
              </div>
            </div>

            <button type="submit" className="confirm-order-btn">
              {t.checkout.confirmOrder}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>{t.checkout.orderSummary}</h2>
          
          <div className="order-items-header">
            <span className="header-label">{t.checkout.foodItems}</span>
            <span className="header-total">{t.checkout.price}</span>
          </div>
          
          <div className="order-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="order-summary-item">
                <span className="item-name">{item.name}</span>
                <span className="item-qty">x{item.quantity}</span>
                <span className="item-price">{(item.price * item.quantity).toLocaleString()} {t.checkout.baht}</span>
              </div>
            ))}
          </div>
          
          <div className="cost-breakdown">
            <div className="cost-row">
              <span className="cost-label">{t.checkout.totalPrice}</span>
              <span className="cost-value">{getTotalPrice().toLocaleString()} {t.checkout.baht}</span>
            </div>
          </div>
          
          <div className="payment-info">
            <div className="payment-method-display">
              <span className="method-label">{t.checkout.paymentMethod}</span>
              <span className="method-value">{getPaymentMethodLabel()}</span>
            </div>
          </div>
          
          <div className="order-total-summary">
            <strong>{t.checkout.finalTotal} {getTotalPrice().toLocaleString()} {t.checkout.baht}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
