import React, { useEffect, useState } from 'react'
import data from '../data.json';
import RecipeCard from './RecipeCard';

function  HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data)
  }, [data]);
  return (
    <div className='p-4 flex-wrap'>
        <div className='flex items-center gap-4'>
            {recipes.length > 0 && recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
        ))}

        </div>
        
    </div>
  )
}

export default HomePage;