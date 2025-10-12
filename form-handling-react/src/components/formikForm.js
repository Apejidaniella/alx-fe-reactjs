import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 


const validationSchema = Yup.object({
  username: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters'),
  
  email: Yup.string()
    .required('Required')
    .email('Invalid email address')
    .min(3, 'Must be at least 3 characters'),
  
  password: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters'),
});


function FormikForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

 
  const onSubmit = (values, { setSubmitting, resetForm }) => {
   
    console.log('Formik Form Data Submitted:', values);
    
   
    setIsSubmitted(true);
    resetForm(); 
    setSubmitting(false);
  };

  return (
    <div className='sm:w-[400px] md:w-[500px] mx-auto'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='space-y-4 rounded shadow-xl p-6'>
          <h2 className='text-xl font-bold mb-4'>User Registration (Formik)</h2>

        
          <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor="username">Username</label>
            <Field id='username' type="text" name='username' className='border p-2' />
            <ErrorMessage name="username" component="div" className='text-red-500 text-sm' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor="email">Email</label>
            <Field id='email' type="email" name='email' className='border p-2' />
            <ErrorMessage name="email" component="div" className='text-red-500 text-sm' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor="password">Password</label>
            <Field id='password' type="password" name='password' className='border p-2' />
            <ErrorMessage name="password" component="div" className='text-red-500 text-sm' />
          </div>

          {isSubmitted && <p className='text-green-600 font-medium'>Registration successful! (Formik)</p>}
          
          <div>
            <button 
              type='submit' 
              className='block bg-cyan-700 text-white w-full py-2 px-4 cursor-pointer hover:opacity-80'
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;