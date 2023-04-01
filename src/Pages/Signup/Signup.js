import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Signup.css';
import LogoImage from '../../img/amazonlogodark.png';
import axios from "../../axios";

const Signup = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const register = async(e)=>{
    e.preventDefault();
   try{
    const responce = await axios.post("/user/signup",{
      name,
      email,
      password
    });
    // console.log(responce);
    alert(responce?.data?.msg)
    navigate("/");
   }catch(err){
     console.log(err);
   }
  }


  return (
    <div className='login'>
      <Link to="/">
         <img 
           className='login__logo'
           src={LogoImage}
         />
      </Link>

      <div className='login__container'>
          <h1>Sign in</h1>

          <form>
            <h5>Name</h5>
            <input 
             type='text'
             value={name}
             onChange={(e)=>setName(e.target.value)}
             required

            />
            <h5>E-mail</h5>
            <input 
             type='email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             required

            />

            <h5>Password</h5>
            <input 
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required

            />
          
          </form>

          <p>
          By signing-in you agree to Amazon's Con ditions of Use & Sale. Please
          see our Privacy Notofication, our Cookies Notice and our Internet-Based Ads Notice
          </p>

          <button onClick={register} className='login__registerButton'>
              Create your Amazon Account
          </button>

          <Link to="/login">
          <button className='login__registerButton'>
             Back to login
          </button>
          </Link>

          <Link to="/">
          <button className='login__registerButton'>
             Back to Home
          </button>
          </Link>
      </div>
    </div>
  )
}

export default Signup;
