import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((state) => state.isAuth)
    const location = useLocation()
    if (!isAuth) {
         return (
             <Navigate to="/account/login" state={{ from: location }} replace={ true} />
        )
    }

    return children
}

export default PrivateRoute