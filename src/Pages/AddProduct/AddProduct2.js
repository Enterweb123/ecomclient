import React, { useState ,useEffect} from 'react';
import './AddProduct.css';
// import {useNavigate} from 'react-router-dom';
import axios from '../../axios';

const AddProduct = () => {
    const [ProductName,SetProductName] =useState();
    const [ProductImage,SetProductImage] =useState();
    const [ProductCost,SetProductCost] =useState();
    const [ProductDetails,SetProductDetails] =useState();
    const [ProductCategory,SetProductCategory] =useState();
    const [ProductRating,SetProductRating] =useState();

    const [addresponceData,SetAddesponceData] =useState();
    const [deleteResponce,setDeleteResponce] =useState();

    const [allproduct, setAllProducts] = useState([]);
    // const navigate = useNavigate();

    const AddProductFun = async()=>{
        try {
          const responce = await axios.post("/product/addproduct",{
            name:ProductName,
            image:ProductImage,
            cost:ProductCost,
            category:ProductCategory,
            details:ProductDetails,
            rating:ProductRating
          })

          if(responce){
            SetAddesponceData(responce)
            SetProductName("")
            SetProductImage("")
            SetProductCost("")
            SetProductDetails("")
            SetProductCategory("")
            SetProductRating("")
          }

        } catch (error) {
          console.log(error);
        }
    }


    const getproducts = async()=>{
      const responcedata = await axios.get('/product/allproduct');
      console.log(responcedata.data);
      setAllProducts(responcedata.data)
    }

    const DeleteProduct = async(ids)=>{
     const deleteRespoce = await axios.delete(`/product/deleteproduct/${ids}`);
     setDeleteResponce(deleteRespoce);
    }

    useEffect(()=>{
      getproducts()
    },[addresponceData,deleteResponce])
  return (
    <>

      <div className='Productlist'>

      <table> 
        <thead>

        <tr> 
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Details</th>
            <th>Category</th>
            <th>action</th>
          </tr>

          <tr> 
            <th>Id</th>
           <th>  
              <input type='text'
              placeholder='ProductName'
              value={ProductName}
              onChange={(e)=>SetProductName(e.target.value)} /> 
           </th>

            <th>
                <input type='text'
                placeholder='ProductImage'
                value={ProductImage}
                onChange={(e)=>SetProductImage(e.target.value)}
                />
            </th>

            <th>
                <input type='Number'
                placeholder='ProductCost'
                value={ProductCost}
                onChange={(e)=>SetProductCost(e.target.value)}
                />
            </th>
            
            <th>
                <input type='Number'
                placeholder='ProductRating'
                value={ProductRating}
                onChange={(e)=>SetProductRating(e.target.value)}
                />
            </th>
            
            <th>
                <input type='text'
                placeholder='ProductDetails'
                value={ProductDetails}
                onChange={(e)=>SetProductDetails(e.target.value)}
                />
            </th>

            <th>
              <input type='text'
              placeholder='ProductCategory'
              value={ProductCategory}
              onChange={(e)=>SetProductCategory(e.target.value)}
              />
            </th>

            <th>
              <button onClick={AddProductFun}> Add Product</button>
            </th>
          </tr>

        </thead>

        <tbody>
          { allproduct.map((data,index)=>
              <tr key={index}>
                <td>{data._id}             </td>
                <td>{data.product_name}    </td>
                <td>{data.product_image}   </td>
                <td>{data.product_cost}    </td>
                <td>{data.product_rating}  </td>
                <td>{data.product_category}</td>
                <td>{data.product_details} </td>
                <td>
                  <button>edit</button>
                  <button onClick={()=>DeleteProduct(data._id)}>delete</button>
                  </td>
              </tr>
            )
          }

        </tbody>

      </table>
      </div>

    </>
  )
}

export default AddProduct
