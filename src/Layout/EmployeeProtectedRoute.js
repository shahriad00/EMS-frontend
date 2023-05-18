import React from 'react'
import { Navigate } from 'react-router-dom'
const EmployeeProtected = ({ isSignedIn, role, children }) => {
  if (isSignedIn && role === 'employee') {
    return children
  }
  return <Navigate to="/login" replace />
}
export default EmployeeProtected