 import { useRecipeStore } from './recipeStore';
 import { Link } from "react-router-dom";
 import SearchBar from './SearchBar';
import { useEffect } from 'react';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
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
          <Link key={recipe.id} to={`/details/${recipe.id}`}>
            <h3 className="recipe-card">{recipe.title}</h3>
            <p className="no-results">{recipe.description}</p>
          </Link>
        ))}
      </div>
    );
  };

export default RecipeList;
