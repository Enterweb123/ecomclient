import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';
import { Link } from 'react-router-dom';

const Product = ({id,title,image,price,rating})=>{

  const dispatch = useDispatch();

  const addToBas = ()=>{
    dispatch(
      addToBasket({
        id, title,
        image, price,
        rating,
      })
    );
  };

  return (
    <div className='product'>

      <div className='product__info'> 
        <p> {title.slice(0,30)} </p>

        <p className='product__price'>
          <small>₹</small>
          <strong> {price} </strong>
        </p>

        <div className='product__rating'>
           {
           Array(rating).fill().map( (_,index)=>(
                <span key={index}>⭐</span>) )
           }
        </div>
      </div>

        <img className='product__img' src={image} alt="img"/>

      <div className='product_button_group'>
        <button className='addto_cart_button' 
         onClick={addToBas}> 
           Cart
        </button>

        <Link to={`/viewproduct/`+id} className='addto_cart_button'> 
           View
        </Link>
      </div>
    </div>
  )
}

export default Product;
