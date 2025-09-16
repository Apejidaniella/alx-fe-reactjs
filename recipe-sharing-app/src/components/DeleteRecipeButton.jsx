import { use } from 'react';
import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ recipeId }) {
    const navigate = useNavigate()

  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const handleDelete = () => {
     deleteRecipe(recipeId)
     navigate('/')
  }
  return (
    <button onClick={() => handleDelete()}>Delete Recipe</button>
  )
}

export default DeleteRecipeButton