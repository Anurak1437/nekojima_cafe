import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'
import { translations } from '../locales/translations'
import './WelcomePage.css'

function WelcomePage() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const navigate = useNavigate()

  const tableNumber = 3

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        {/* image tag left intentionally with empty src for later insertion */}
        <img src="/LogoNekojima.png" alt="logo placeholder" className="welcome-logo" />

        <h2 className="welcome-text">
          {t.welcome?.greeting || 'Welcome To Nekojima Cafe'}
        </h2>

        <button
          className="welcome-button"
          onClick={() => navigate('/category/specialmenus')}
        >
          {t.welcome?.startOrder || 'เริ่มสั่งเมนู'}
        </button>

        <p className="table-number">{`${t.welcome?.table || 'โต๊ะ'} ${tableNumber}`}</p>
      </div>
    </div>
  )
}

export default WelcomePage
