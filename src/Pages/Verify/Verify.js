import React, { useEffect, useState } from 'react';
import './Verify.css';

import axios from "../../axios";
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import tickgit from "../../img/check-mark-verified.gif";
import {Link} from "react-router-dom";

const Verify = () => {
  const {token} = useParams();
  const [success,setSuccess] = useState(false);
  const [loading,setLoading] = useState(true);

  const verifyUser = async()=>{
      try {
        const responce = await axios.get(`/user/verify/${token}`);
        // alert(responce.data.msg);
        setSuccess(responce.data.success)
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
  }
  useEffect(()=>{
    if(token){
      verifyUser();
    }
  },[token]);

  if(loading){
    return (
      <div className='verify__loading'>
       <ClipLoader
        color={"red"}
        loading={loading}
        cssOverride={""}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
    )
  }

  return(
    <div className='verify'>
        <h1> verified successfully </h1>
        <img width="200px" src={tickgit} alt="gifimge"/>
        <Link to="/login">
          <button className='verify_button'>Login</button>
        </Link>
    </div>
  )
}

export default Verify;
