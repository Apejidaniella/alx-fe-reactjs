import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Protected() {
  const [user, setUser] = useAuth()
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