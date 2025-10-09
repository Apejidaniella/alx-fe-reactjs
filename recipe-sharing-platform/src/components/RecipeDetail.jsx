import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
    const { id } = useParams(); 
   const [recipe, setRecipe] = useState(null); 

    useEffect(() => {
         const foundRecipe = data.find(r => r.id.toString() === id);
        setRecipe(foundRecipe); 
    }, [id]);  

  if (!recipe) {
        return <div className='p-4 text-center'>Recipe not found.</div>;
    }


  return (
    <div className='shadow-xl'>
        <img src={recipe.image} alt={recipe.title} className='rounded-xl h-[180px] w-full' />
           <h3 className='mb-2 text-lg font-bold text-slate-900'>{recipe.title}</h3>
           <p className='font-normal text-gray-700'>{recipe.summary} </p>
           <div className='mt-4 shadow-xl'>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                ))}
            </ul>
           </div>
           <div className='mt-4'>
            <h3>Instructions</h3>
            <ul>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{`${index + 1}. ${instruction}`}</li>
                ))}
            </ul>
           </div>
    </div>
  )
}

export default RecipeDetail;