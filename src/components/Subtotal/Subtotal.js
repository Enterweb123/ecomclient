import React, { useEffect, useState } from 'react';
import './Subtotal.css';
import * as CurrencyFormate from "react-currency-format";

import { useSelector } from 'react-redux';
import { getBasket } from '../../slices/basketSlice';
import { useNavigate } from "react-router-dom";

// import own axios
import axios from "../../axios";

const Subtotal = () => {
    const basket = useSelector(getBasket);

    const [basketTotal,setBasketTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
     const getBasketTotal = ()=>{
        setBasketTotal(basket.reduce((amount,item)=> item.price+ amount,0 ));
     };
     getBasketTotal();
    },[basket]);

    const handleCheckout = async() => {

      const PaymentIntentResponce = await axios.post(
         "/checkout/create-payment-intent",
         {
            items:basket,
            total:basketTotal
         },
         {
            headers:{
               Authorization:localStorage.getItem("token"),
            },
         }
      );
      navigate(`/pay/${PaymentIntentResponce.data.clientSecret}`);
    };

  return ( <div className='subtotal'> 

    <CurrencyFormate
         renderText={(value)=>{
            return (
                  <>
                  <p> Subtotal ({basket.length} item):<strong>{ `${value}` }</strong> </p>
                  <small>
                     <input type='checkbox'/>
                     This order contains a gift
                  </small>
                  </>
               )
         }}
         decimalScale={2}
         value={basketTotal}
         displayType='text'
         thousandSeparator={true}
         prefix={"₹"}
    />

    <button onClick={handleCheckout}> Proceed to checkout </button>
    </div>

    ) 
};

export default Subtotal;
