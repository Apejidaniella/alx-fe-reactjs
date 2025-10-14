import React from 'react'
import { useState } from 'react';

function AddTodoForm({onSubmit}) {
   const [form, setForm] = useState({
    title: '',
    description: ''
   });

   const handleSubmit = (event) => {
    event.preventDefault() 
    onSubmit({...form})
   }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={form.title} onChange={(event) => setForm({...form, title: event.target.value})} />
        <textarea rows={3} value={form.description} onChange={(event) => setForm({...form, description: event.target.value})}></textarea>
        <button type='submit'>Save</button>
    </form>
  )
}

export default AddTodoForm;