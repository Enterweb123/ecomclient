import React, { useState } from 'react';
import "./Order.css";

import Carticon from '../../img/carticon.png'
const Order = ({ id, items, total, createdAt })=>{
    const [showProducts,setShowProducts] = useState(false);
 
  return (
    <div className='order'>
      
      <img className='order__image'
      src={Carticon}
      alt="" />

      <div className='order__info'>
           <h2 className='order__title'>Order Id {id}</h2>
           <p className='order_price'>
              <small>₹</small>
              <strong>{total}</strong>
           </p>

           <div className='order__showProducts'>  
            <p> Number of product orders: {items.length} </p>
            <button onClick={()=>setShowProducts((cur)=>!cur)}> 
              { showProducts ? "Hide All" : "Show All" }
            </button>
           </div>
          <p> 
          Order At:{" "}
          <strong> {new Date(createdAt).toString().slice(0,25)} </strong>  
          </p>

          {
            showProducts && (
              <div className='order__products'> 
              {
                items.map((item,index)=>{
                  return(
                    <div key={index} className='order__product'>
                        <img src={item.image} alt="product_image"/>

                        <div className='order__productTop'>
                           <h4>{item.title}</h4>

                           <p>
                            <small>₹</small>
                            <strong>{item.price}</strong>
                           </p>

                           <div className='order__rating'>

                              {Array(item.rating).fill().map( (_,index)=>( 
                                    <span key={index} role='img' area-label='rating'> 
                                      ⭐ 
                                    </span>
                              ))}

                           </div>
                        </div>
                        
                    </div>
                  )
                })
              }
               </div>
            )
          }
      </div>

    </div>
  )
}

export default Order;
