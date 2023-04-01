import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUser,handleLogin} from "../slices/userSlice";

// private route
import { Navigate,Outlet } from 'react-router-dom';

const PrivateRoute = ()=>{
 const user = useSelector(getUser);
 const [loading,setLoading] = useState(true);
 const dispatch = useDispatch();

 useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token && !user){
        dispatch(handleLogin(token));
    }
    setTimeout(()=>{
        setLoading(false)
    },600);

 },[])

 if(loading) {
    return <h1> Loading... </h1>;
 }

 if(!user){
    return <Navigate to="/login" />
 }

  return <Outlet />;
}

export default PrivateRoute;
