import React from 'react';
import { useAuth } from './useAuth';
import {Outlet, Navigate , useLocation  } from 'react-router-dom'


const RequireAuth = () => {
    const {auth } = useAuth();
    
    const location = useLocation();

    return (
        auth ?.user
                ? <Outlet />
                : <Navigate to='/' state={{ from : location}} replace />
    )
}

export default RequireAuth;