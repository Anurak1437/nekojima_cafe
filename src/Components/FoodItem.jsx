import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { LanguageContext } from '../Context/LanguageContext'
import { translations } from '../locales/translations'
import './FoodItem.css'

function FoodItem({ id, name, description, price, image }) {
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext)
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const cartItem = cartItems.find(item => item.id === id)
  const quantity = cartItem?.quantity || 0

  const handleIncrement = () => {
    if (quantity === 0) {
      addToCart({ id, name, description, price, image })
    } else {
      updateQuantity(id, quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1)
    }
  }

  return (
    <div className="food-item">
      <div className="food-image">
        <img src={image} alt={name} />
      </div>
      <div className="food-info">
        <h3 className="food-name">{name}</h3>
        <p className="food-description">{description}</p>
        <div className="food-footer">
          <span className="food-price">{price} {t.checkout.baht}</span>
          <div className="food-actions">
            <button
              className="decrement-btn"
              onClick={handleDecrement}
              disabled={quantity === 0}
              title="ลบสินค้า"
            >
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="increment-btn" onClick={handleIncrement} title="เพิ่มสินค้า">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
