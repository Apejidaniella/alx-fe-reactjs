import React from 'react'
import { Navigate, Route } from 'react-router-dom';

function Protected() {
  const user = null;
  if (!user) {
    return <Navigate to={"/"} /> 
  }

  return (
    <>
     <Route path="/profile" element={<Profile />} />
    </>
  )
}

export default Protected;