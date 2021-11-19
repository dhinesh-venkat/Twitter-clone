import React from 'react'
import { Navigate } from 'react-router-dom'
import auth from './auth'

export const ProtectedLogin = ({ children }) => {
    return !auth.isAuthenticated() ? children : <Navigate to='/app/tweets' />
}