 import { useRecipeStore } from './recipeStore';
 import { Link } from "react-router-dom";
 import SearchBar from './SearchBar';
import { useEffect } from 'react';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const addFavorite = useRecipeStore(state => state.addFavorite)
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
    const recipeList = filteredRecipes.length > 0 ? filteredRecipes : recipes

    useEffect(() => {
      if (searchTerm) {
        filterRecipes()
      }
    }, [searchTerm])  

    return (
      <div className="recipe-list">
        <SearchBar />
        {recipeList.map(recipe => (
          <div key={recipe.id}>
          <Link to={`/details/${recipe.id}`}>
            <h3 className="recipe-card">{recipe.title}</h3>
            <p className="no-results">{recipe.description}</p>
          </Link>
          <button onClick={() => {
            addFavorite(recipe)
            generateRecommendations()
          }}>Add Favorite</button>
          </div>
        ))}
      </div>
    );
  };

export default RecipeList;
