import React, { useEffect, useState } from 'react'
import data from '../data.json';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

function  HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data)
  }, [data]);
  return (
    <div className='p-4 flex-wrap '>
        <div className='flex items-center gap-4 rounded-md shadow-xl hover:bg-slate-400 text-wrap grid grid-cols-1  grid-cols-2 grid-cols-3 sm '>
            {recipes.length > 0 && recipes.map((recipe, index) => (
            <Link key={index} to={`/recipe/${recipe.id}`}> <RecipeCard  recipe={recipe} /></Link>
        ))}

        </div>
        
    </div>
  )
}

export default HomePage;