import React from 'react';
import { useAuth } from './useAuth';
import {Outlet, Navigate , useLocation  } from 'react-router-dom'


const RequireAuth = () => {
    const {auth , user } = useAuth();
    console.log(user);
    const location = useLocation();

    return (
        user ? <Outlet /> : <Navigate to='/admin-login' state={{ from : location}} replace />
    )
}

export default RequireAuth