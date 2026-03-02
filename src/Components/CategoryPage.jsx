import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import FoodList from './FoodList'
import menuData from '../data/menu.json'
import { LanguageContext } from '../Context/LanguageContext'
import { translations } from '../locales/translations'

function CategoryPage({ category: propCategory }) {
  const { category: routeCategory } = useParams()
  const category = propCategory || routeCategory
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  const lookupKey =
    category && category.toLowerCase() === 'promotion'
      ? 'Promotion'
      : category
  const items = menuData[lookupKey] || []

  let title = t.navbar.menu
  switch (category) {
    case 'specialmenus':
      title = t.navbar.menu
      break
    case 'dessertmenu':
      title = t.navbar.dessert
      break
    case 'drinks':
      title = t.navbar.drink
      break
    case 'maindishes':
      title = t.navbar.savory
      break
    case 'snack':
      title = t.navbar.snack
      break
    case 'Promotion':
    case 'promotion':
      title = t.navbar.promotion
      break
    default:
      title = t.home.title
  }

  if (!items || items.length === 0) {
    return (
      <section className="food-list">
        <div className="food-list-container">
          <h2 className="section-title">{title}</h2>
          <p>{t.home.noResults}</p>
        </div>
      </section>
    )
  }

  return <FoodList foodItems={items} pageTitle={title} />
}

export default CategoryPage
