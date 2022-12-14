import './App.css';
import Card from './components/Card';
import Search from './components/Search';
import React, { useState, useEffect } from "react";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }
  
  return (
    <div className="container">
      <h2>Our Food Recipes</h2>
      <Search
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <Card
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
  );
}

export default App;
