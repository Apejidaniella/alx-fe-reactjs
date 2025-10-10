import React from 'react'
import { useState } from 'react';

function AddRecipeForm() {
   const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: "",
    instructions: "",
   });

   const [validation, setValidation] = useState(true)

   const [errorMessage, setErrorMessage] = useState("")

   function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
   }

   function handleSubmit(event) {
    event.preventDefault();
    if (formData.title.length < 3 || formData.summary.length < 3 || formData.instructions.length < 3 || formData.ingredients.length < 3) {
       setValidation(false)
       setErrorMessage("input fields must be greater than 3 characters")
       return
    }

    if (formData.ingredients.split(", ").length < 3) {
        setValidation(false)
        setErrorMessage("you must have more than 2 Ingredients")
        return
    }
    setValidation(true)
    setErrorMessage("")
   }

  return (
    <form className='space-y-4 sm:w-[500px]' onSubmit={handleSubmit}>
        <p className='text-red-500'>{!validation && errorMessage}</p>
        <div className='flex flex-col gap-2'>
            <label htmlFor="title">Title</label>
            <input type="text" value={formData.title} id='title' name='title' className='border' required onChange={handleChange} /> 
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="summary">Summary</label>
            <input type="text" value={formData.summary} id='summary' name='summary' className='border' required onChange={handleChange} /> 
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="ingredients">Ingredients</label>
           <textarea value={formData.ingredients} name="ingredients" className='border' id="ingredients" rows={5} required onChange={handleChange}></textarea>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="instructions">Instructions</label>
           <textarea value={formData.instructions} name="instructions" className='border' id="instructions" rows={5} required onChange={handleChange} ></textarea>
        </div>
        <div>
            <button type='submit' className='block bg-blue-500 text-white w-full py-2 px-4 cursor-pointer hover:opacity-90'>Submit</button>
        </div>
    </form>
  )
}

export default AddRecipeForm;