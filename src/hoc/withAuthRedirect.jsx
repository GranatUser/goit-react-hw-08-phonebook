import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/user/selectors';
import { Navigate } from 'react-router-dom';


export const withAuthRedirect = (Component,redirectTo)=>{
    const ComponentWithRedirect =(props) =>
    {   const isLoggedIn = useSelector(selectIsLoggedIn);
       
       return isLoggedIn? <Component {...props}/>:<Navigate to={redirectTo}></Navigate>;
    }
   
    return ComponentWithRedirect;
}
