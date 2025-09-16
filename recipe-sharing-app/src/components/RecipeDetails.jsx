 import { useRecipeStore } from './recipeStore';
 import EditRecipeForm from './EditRecipeForm';
 import DeleteRecipeButton from './DeleteRecipeButton';
 import { useParams } from 'react-router-dom';

  const RecipeDetails = () => {
    const params = useParams()
    const recipeId = Number(params.recipeId)
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );
       

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipeId={recipeId} />
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    );
  };

  export default RecipeDetails;