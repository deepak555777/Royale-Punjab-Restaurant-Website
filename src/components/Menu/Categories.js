import React from 'react'

const Categories = ({ categories, filterItems }) => {
 
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
         function handleClick() {
          return filterItems(category)
        }
        return (
          <button
            type="button"
            className="filter-btn"
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
