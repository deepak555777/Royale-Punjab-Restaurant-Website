import React from 'react'

const Categories = ({ categories, filterItems, activeCategory}) => {
 
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
       
         function handleClick() {
          return filterItems(category)
        }
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={handleClick}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
