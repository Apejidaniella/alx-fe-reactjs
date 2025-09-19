import { create } from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  favorites: [],
  // add a new recipe to favorite list
  addFavorite: (recipe) => set(state => ({ favorites: [...state.favorites, recipe] })),
  // remove favorite recipe from the favorite list
  removeFavorite: (recipeId) => set(state => ({
  favorites: state.favorites.filter(recipe => recipe.id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? {...updatedRecipe} : recipe) })),
  setRecipes: (recipes) => set({ recipes })
}));