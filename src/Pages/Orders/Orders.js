import React, { useEffect, useState } from 'react';
import './Orders.css';
import axios from "../../axios";
import Addbanner from '../../img/ad.gif';
import Order from '../../components/Orders/Order';

const Orders = () => {
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    const getOrders = async()=>{
      const {data} = await axios.get("/checkout/orders", {
          headers:{
            Authorization:localStorage.getItem("token")
          }
      });
      setOrders(data);
    }

    getOrders();
  }, []);

  console.log(typeof(orders));

  return (
    <div className='checkout'> 
      <div className='checkout__left'>
          <img
           className='checkout__ad'
           src={Addbanner}
           alt='banner'
          />    

        {
        orders.length === 0 ? (
        <div>
          <h2> Your Oders is empty </h2>
          <p> You have not made any orders. Firest make an order. </p>
        </div>
        ) : ( 
        <div>
         <h2 className='checkout__title'>Your Oders</h2>
          {orders.map((order,index) => (
          <Order 
           key={index}
           id={order.order_id}
           items={order.items}
           total={order.total}
           createdAt={order.createdAt}
           />
          ))} 
        </div>
        )}
      </div>


      
     </div>
  )};

export default Orders;