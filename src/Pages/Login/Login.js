import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import './Login.css';
import LogoImage from '../../img/amazonlogodark.png';
import axios from "../../axios";
import {useDispatch} from "react-redux";
import { handleLogin } from '../../slices/userSlice';


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  // send
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async(e)=>{
    e.preventDefault();
    const responce = await axios.post("/user/login",{
      email,
      password
    });
    localStorage.setItem("token",responce.data.token);
    // console.log(responce);
    dispatch(handleLogin(responce.data.token));
    navigate("/");
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
          
            <h5>E-mail</h5>
            <p>priya@gmail.com</p>
            <input 
             type='email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             required
            />

            <h5>Password</h5>
            <p>12345678</p>
            <input 
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
            <button onClick={login} type='submit' 
            className='login__signInButton'>
              Sign In
            </button>
          </form>

          <p>
          By signing-in you agree to Amazon's Con ditions of Use & Sale. Please
          see our Privacy Notofication, our Cookies Notice and our Internet-Based Ads Notice
          </p>
 
          <Link to="/signup">
          <button className='login__registerButton'>
              Create your Amazon Account
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

export default Login;
