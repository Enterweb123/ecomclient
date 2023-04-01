import React from 'react';
import "./CheckoutProduct.css";

import { useDispatch } from 'react-redux';
import {removeFromBasket} from '../../slices/basketSlice';

const CheckoutProduct = ({id,title,image,price,rating})=>{

  const dispatch = useDispatch();

  const remove =() => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className='checkoutProduct'>

      <img src={image} alt=""  className='checkoutProduct__image'/>

        <div className='checkoutProduct__info'>
         <p className='checkoutProduct__title'>{title}</p>
         <p className='checkoutProduct__price'>
            <small>₹</small>
            <strong> {price} </strong>
         </p>
         <div className='checkoutProduct__rating'>
           {
             Array(rating).fill().map( (_,index)=>(
                <span key={index}>⭐</span>))
           }
         </div>   
            <button className='removecart' onClick={remove}> Remove from Basket </button>
       </div>
       
    </div>
  );
};

export default CheckoutProduct;
