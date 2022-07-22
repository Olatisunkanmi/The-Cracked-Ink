import React from 'react';
import { useState } from 'react';
import { useAuth } from './useAuth';
import axios from 'axios';
import {Outlet, Navigate , useLocation  } from 'react-router-dom'
import { useEffect } from 'react';


const RequireAuth = () => {
    const { user } = useAuth();
    const location = useLocation();
    

   
    return (
        user ? <Outlet /> : <Navigate to='/admin-login' state={{ from : location}} replace />
    )
}

export default RequireAuth