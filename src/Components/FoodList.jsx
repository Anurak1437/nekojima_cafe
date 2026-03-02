import { useContext } from 'react'
import FoodItem from './FoodItem'
import { LanguageContext } from '../Context/LanguageContext'
import { SearchContext } from '../Context/SearchContext'
import { translations } from '../locales/translations'
import './FoodList.css'

function FoodList({ foodItems = [], pageTitle }) {
  const { language } = useContext(LanguageContext)
  const { searchTerm } = useContext(SearchContext)
  const t = translations[language]
  
  // If no items passed down, we'll display nothing (or could show all items if desired)
  // Items already contain image paths coming from the menu JSON.

  const filteredItems = foodItems.filter((item) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower)
    )
  })

  return (
    <section className="food-list">
      <div className="food-list-container">
        <h2 className="section-title">
          {searchTerm
            ? `${t.home.searchResults} "${searchTerm}"`
            : pageTitle || t.home.title}
        </h2>
        {filteredItems.length === 0 && searchTerm ? (
          <div className="no-results">
            <p>{t.home.noResults} "{searchTerm}"</p>
            <p className="no-results-desc">{t.home.noResultsDesc}</p>
          </div>
        ) : (
          <div className="food-grid">
            {filteredItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FoodList
