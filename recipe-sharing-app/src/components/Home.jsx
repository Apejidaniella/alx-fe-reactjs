import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import FavoritesList from './FavoritesList';  
import RecommendationsList from './RecommendationsList';

function Home() {
  return (
    <div>
      <h1>My Recipe App</h1>
      <RecipeList />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />
    </div>
  )
}

export default Home;