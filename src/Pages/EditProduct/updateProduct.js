import React,{useEffect,useState} from 'react';
import "./updateProduct.css";

import { Link, useParams ,useNavigate } from 'react-router-dom';
import axios from "../../axios";

const EditProduct = () => {
  const navigate = useNavigate();
  const  [product_name, setProduct_name] = useState("")
  const  [product_image, setProduct_image] = useState("")
  const  [product_cost, setProduct_cost] = useState("")
  const  [product_category, setProduct_category] = useState("")
  const  [product_details, setProduct_details] = useState("") 
  const  [product_rating, setProduct_rating] = useState("")

    // get parameter data
    let {updateid} = useParams();

    useEffect( ()=>{
      getProductsDetails()
      },[])

    const getProductsDetails = async ()=>{
      let ResultsResponce = await axios.get(`/product/getsingleproduct/${updateid}`);
      const Results = ResultsResponce.data;
      setProduct_name(Results.product_name);  
      setProduct_image(Results.product_image) ;   
      setProduct_cost(Results.product_cost);    
      setProduct_details(Results.product_details) ;   
      setProduct_category(Results.product_category) ;   
      setProduct_rating(Results.product_rating)  ;  
    }

  const updateProduct= async()=>{
    try {
      const UpdateProduct = await axios.put(`/product/updateproduct`,{
        product_id       : updateid,
        product_name     : product_name,
        product_image    : product_image,
        product_cost     : product_cost,
        product_category : product_category,
        product_details  : product_details,
        product_rating   : product_rating,
      });
      // console.log(UpdateProduct);
      navigate('/addProduct')
    } catch (error) {
      console.log(error);
    }     
  }
 
 

  return (
    <div className='editformbody'>

        <div className='editform_one'>
          <img src={product_image} alt='img' />
        </div>

      <form>
        <div className='editForm_two'>
          <lable htmlFor="product_name">product_name</lable>
          <input
            type='text'
            name='product_name'
            value={product_name}
            onChange={(e)=>setProduct_name(e.target.value)}
          />

          <lable htmlFor="product_image">product_image</lable>
          <input
            type='text'
            name='product_image'
            value={product_image}
            onChange={(e)=>setProduct_image(e.target.value)}
          />

          <lable htmlFor="product_cost">product_cost</lable>
          <input
            type='text'
            name='product_cost'
            value={product_cost}
            onChange={(e)=>setProduct_cost(e.target.value)}
          />

          <lable htmlFor="product_category">product_category</lable>
          <input
            type='text'
            name='product_category'
            value={product_category}
            onChange={(e)=>setProduct_category(e.target.value)}
          />

          <lable htmlFor="product_rating">product_rating</lable>
          <input
            type='text'
            name='product_rating'
            value={product_rating}
            onChange={(e)=>setProduct_rating(e.target.value)}
          />

          <lable htmlFor="product_details">product_details</lable>

          <textarea
            type='text'
            name='product_details'
            className='product_details'
            rows="5" cols="33"
            value={product_details}>
            onChange={(e)=>setProduct_details(e.target.value)}
          </textarea>
        </div>
      </form>

        <div className='btn_groups'>
            <button onClick={updateProduct}> Submit </button>
            <Link className='Link' to="/"> Back </Link>
        </div>
    </div>
  )
}

export default EditProduct;
