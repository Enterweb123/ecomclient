import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../../components/Product/Product';
import Banner1 from "../../img/banner3.jpg"
import axios from "../../axios";


const Home = ()=>{

  const [allproduct, setAllProducts] = useState([]);

  const getproducts = async()=>{
    const responcedata = await axios.get('/product/allproduct');
    setAllProducts(responcedata.data)
  }
  
  useEffect(()=>{
    getproducts()
  },[])

  return (
    <div className='home'>
      <img
        className='home__imge'
        src={Banner1}
        alt='img'
      />

      <div className='home__row'>
          {
            allproduct.map((data,index)=>
              <Product key={index}
              id={data._id}
              title={data.product_name}
              image={data.product_image}
              price={data.product_cost}
              rating={data.product_rating}
            />
            )
          }
      </div>


    </div>
  )
}

export default Home;