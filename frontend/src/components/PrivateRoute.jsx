import {Navigate, Outlet} from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from './Spinner';
import React from 'react'

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()

    if(checkingStatus) {
        return <Spinner />
    } else {

    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute