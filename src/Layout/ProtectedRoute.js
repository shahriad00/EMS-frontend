import React from 'react'
import { Navigate } from 'react-router-dom'
const Protected = ({ isSignedIn, role, children }) => {
  if (isSignedIn && role === 'admin') {
    return children
  }
  return <Navigate to="/login" replace />
}
export default Protected