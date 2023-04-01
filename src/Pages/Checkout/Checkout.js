import React from 'react';
import './Checkout.css';

import { useSelector } from 'react-redux';

import { getBasket } from '../../slices/basketSlice';
import Addbanner from '../../img/ad.gif';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';


const Checkout = () => {
  // const basket = useSelector((state)=>state.basketItem.basket);
     const basket = useSelector(getBasket);

  return (
    <div className='checkout'>
      
       <div className='checkout__left'>
          <img
           className='checkout__ad'
           src={Addbanner}
           alt='banner'
          />

          {
            basket.length === 0 ?(
             <div className=''>
                <h2> Your Shopping Baset is empty </h2>
                <p>
                  Your have no items in your basket. TO buy or add more items , click "Add to baasket" nect to the item.
                </p>
             </div>
             ):(
             <div>
               <h2 className='checkout__title'>
                Your Shopping basket
               </h2>

               {
                basket.map((items,index)=>(
                  <CheckoutProduct
                   key={index}
                   id={items.id}
                   title={items.title}
                   image={items.image}
                   price={items.price}
                   rating={items.rating}
                  />
                ))}
             </div>
            )}
       </div>

       { basket.length > 0 && (
            <div className='checkout__right'>
              <Subtotal />
            </div>
         )}
    </div>
  );
};

export default Checkout
