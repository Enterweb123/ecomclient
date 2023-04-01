import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Search, ShoppingBasket} from "@mui/icons-material";
import './Header.css';
import {useSelector,useDispatch} from "react-redux";

import {getUser, handleLogin, logout} from '../../slices/userSlice';

import HeadLogo from '../../img/amazonlogo.png';
import {getBasket} from '../../slices/basketSlice';

const Header = ()=> {
  // incoming ------
  // const user = useSelector((state)=>state.userInfo.user);
  const user = useSelector(getUser);
  const basket = useSelector(getBasket);
  
  // outgoing
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  useEffect( ()=> {
    let token = localStorage.getItem("token");
    if(token && !user) {
      dispatch(handleLogin(token));
    }
  },[] )

  const login = ()=>{
    if(user){
      dispatch(logout());
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className='Header'>

      <Link to="/">
        <img className='header_logo' alt='header_logo' src={HeadLogo} />
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <Search className='header__searchIcocn' />
      </div>

      <div className='header__nav'>

        <Link to={!user && "/login"} className='header__link'>

          <div className='header__option' onClick={login}>
              { user &&
                <span className='header__optionLineOne'>
                  Hello {user?.name}
                </span>
              }
            <span className='header__optionLineTwo'>
              {user ? ("Sign Out") : ("Sign In")}
            </span>
          </div>

        </Link>

        <Link to="/orders" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'> Return </span>
            <span className='header__optionLineTwo'> & Orders </span>
          </div>
        </Link>

        <Link to="/addProduct" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'> Add </span>
            <span className='header__optionLineTwo'> Product </span>
          </div>
        </Link>

        <Link to="/" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'> Your </span>
            <span className='header__optionLineTwo'> Prime </span>
          </div>
        </Link>

        <Link to="/checkout" className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineOne header__basketCount'> {basket.length} </span>
          </div>
        </Link>

      </div>

    </nav>
  )

}

export default Header;
