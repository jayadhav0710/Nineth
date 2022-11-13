import React from 'react'

function Card({recipe}) {
  const {
    idMeal,
    strMeal,
    strCategory,
    strMealThumb,
} = recipe;

  return (
    <div className="card">
    <img
        src={strMealThumb}
        alt={strMeal}
        className="card-image"
    />
    <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/"  + idMeal} target="_blank" rel="noreferrer">Instructions</a>
    </div>
</div>
  )
}

export default Card