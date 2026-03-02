import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../Context/LanguageContext'
import { translations } from '../locales/translations'
import './Settings.css'

function Settings() {
  const nav = useNavigate()
  const { language, setLanguage } = useContext(LanguageContext)
  const t = translations[language]

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className="settings-container">
      <div className="settings-content">
        <h1>{t.settings.title}</h1>
        
        <div className="settings-section">
          <div className="settings-item">
            <label className="settings-label">{t.settings.language}</label>
            <div className="language-options">
              <button
                className={`language-btn ${language === 'th' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('th')}
              >
                TH {t.settings.thai}
              </button>
              <button
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                ENG {t.settings.english}
              </button>
            </div>
          </div>

          <div className="settings-info">
            <p><strong>{t.settings.currentLanguage}:</strong> {language === 'th' ? t.settings.thai : t.settings.english}</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => nav('/')}>
          ← {language === 'th' ? 'กลับไปหน้าแรก' : 'Back to Home'}
        </button>
      </div>
    </div>
  )
}

export default Settings
