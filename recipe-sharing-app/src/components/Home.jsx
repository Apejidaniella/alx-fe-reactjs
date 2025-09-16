import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

function Home() {
  return (
    <div>
      <h1>My Recipe App</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  )
}

export default Home;