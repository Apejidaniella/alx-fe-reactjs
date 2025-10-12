import React from 'react'
import { useState } from 'react';

function RegistrationForm() {
    
    const initialFormData = {
    username: "",
    email: "",
    password: "",
    };
   
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


   const [formData, setFormData] = useState(initialFormData);
   const [errors, setErrors] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);

   function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
   }

   function handleSubmit(event) {
    event.preventDefault();

    if (!username) {
       setErrors("Username cannot be empty");
       setIsSubmitted(false);
       return
    }
    if (!email) {
       setErrors("Email cannot be empty");
       setIsSubmitted(false);
       return
    }
    if (!password) {
       setErrors("Password cannot be empty");
       setIsSubmitted(false);
       return
    }

       setErrors('');
       setIsSubmitted(true);
       setUsername(""); 
       setPassword(""); 
       setEmail(""); 
    };
   
  return (
    <form className='space-y-4 sm:w-[400px] md:w-[500px] rounded shadow-xl'onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor="username">Username</label>
            <input id='username' type="text" value={username} name='username' className='border' required  onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor="email">Email</label>
            <input id='email' type="email" value={email} name='email' className='border' required onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor="password">Password</label>
            <input id='password' type="password" value={password} name='password' className='border' required onChange={(event) => setPassword(event.target.value)}/>
        </div>

        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        {isSubmitted && <p style={{ color: 'green' }}>Registration successful!</p>}
        <div>
            <button type='submit' className='block bg-cyan-700 text-white w-full py-2 px-4 cursor-pointer hover:opacity-80'>Submit</button>
        </div>
    </form>
  )
}

export default RegistrationForm;