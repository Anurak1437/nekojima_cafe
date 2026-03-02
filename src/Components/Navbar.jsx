import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LanguageContext } from '../Context/LanguageContext'
import { SearchContext } from '../Context/SearchContext'
import { translations } from '../locales/translations'
import './Navbar.css'

function Navbar() {
  const { language } = useContext(LanguageContext)
  const { searchTerm, setSearchTerm } = useContext(SearchContext)
  const t = translations[language]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t.navbar.menu}
          </NavLink>
          <NavLink
            to="/category/dessertmenu"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t.navbar.dessert}
          </NavLink>
          <NavLink
            to="/category/drinks"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t.navbar.drink}
          </NavLink>
          <NavLink
            to="/category/maindishes"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t.navbar.savory}
          </NavLink>
          <NavLink
            to="/category/snack"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t.navbar.snack}
          </NavLink>
          <NavLink
            to="/category/promotion"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t.navbar.promotion}
          </NavLink>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder={t.navbar.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
