import React from 'react'
import { Link } from 'react-router-dom';

function RecipeCard({recipe}) {
  return (
    <Link to={`/recipe/${recipe.id}`} className='bg-slate-100 rounded-xl w-[250px] hover:bg-slate-200'>
        <img src={recipe.image} alt={recipe.title} className='rounded-xl h-[180px] w-full' />
        <div className='p-4'>
           <h3 className='mb-2 text-lg font-bold text-slate-900'>{recipe.title}</h3>
           <p className='font-normal text-gray-700'>{recipe.summary.slice(0, 50) + '...'}</p>
        </div>
    </Link>
  )
}

export default RecipeCard;