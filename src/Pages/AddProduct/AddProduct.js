import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddProduct.css';
// import {useNavigate} from 'react-router-dom';
import axios from '../../axios';


// get global state

const AddProduct = () => {
  const [ProductName, SetProductName] = useState();
  const [ProductImage, SetProductImage] = useState();
  const [ProductCost, SetProductCost] = useState();
  const [ProductDetails, SetProductDetails] = useState();
  const [ProductCategory, SetProductCategory] = useState();
  const [ProductRating, SetProductRating] = useState();

  const [addresponceData, SetAddesponceData] = useState();
  const [deleteResponce, setDeleteResponce] = useState();

  const [allproduct, setAllProducts] = useState([]);

  const AddProductFun = async () => {
    try {
      const responce = await axios.post("/product/addproduct", {
        name: ProductName,
        image: ProductImage,
        cost: ProductCost,
        category: ProductCategory,
        details: ProductDetails,
        rating: ProductRating
      })

      if (responce) {
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


  const getproducts = async () => {
    const responcedata = await axios.get('/product/allproduct');
    // console.log(responcedata.data);
    setAllProducts(responcedata.data)
  }

  const DeleteProduct = async (ids) => {
    const deleteRespoce = await axios.delete(`/product/deleteproduct/${ids}`);
    setDeleteResponce(deleteRespoce);
  }

  useEffect(() => {
    getproducts()
  }, [addresponceData, deleteResponce])

  return (
    <>

      <div className='Productlist'>

        <table class="content-table">
          <thead>

            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Details</th>
              <th>Category</th>
              <th>edit</th>
              <th>delete</th>
            </tr>

            <tr>
              <th>
                <input type='text'
                  placeholder='ProductName'
                  value={ProductName}
                  onChange={(e) => SetProductName(e.target.value)} />
              </th>

              <th>
                <input type='text'
                  placeholder='ProductImage'
                  value={ProductImage}
                  onChange={(e) => SetProductImage(e.target.value)}
                />
              </th>

              <th>
                <input type='Number'
                  placeholder='ProductCost'
                  value={ProductCost}
                  onChange={(e) => SetProductCost(e.target.value)}
                />
              </th>

              <th>
                <input type='Number'
                  placeholder='ProductRating'
                  value={ProductRating}
                  onChange={(e) => SetProductRating(e.target.value)}
                />
              </th>

              <th>
                <input type='text'
                  placeholder='ProductDetails'
                  value={ProductDetails}
                  onChange={(e) => SetProductDetails(e.target.value)}
                />
              </th>

              <th>
                <input type='text'
                  placeholder='ProductCategory'
                  value={ProductCategory}
                  onChange={(e) => SetProductCategory(e.target.value)}
                />
              </th>

              <th colspan="2">
                <button className='add-product' onClick={AddProductFun}> Add Product</button>
              </th>
            </tr>

          </thead>

          <tbody>
            {allproduct.map((data, index) =>
              <tr key={index}>
                <td>{(data.product_name).slice(0, 30)}    </td>
                <td>{(data.product_image).slice(0, 30)}   </td>
                <td>{data.product_cost}    </td>
                <td>{data.product_rating}  </td>
                <td>{(data.product_details).slice(0, 30)} </td>
                <td>{data.product_category}</td>

                <td>
                  <Link className='edit-button' to={"/updateProduct/"+data._id}> update </Link>
                </td>

                <td>
                  <button className='delete-button' onClick={() => DeleteProduct(data._id)}>delete</button>
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

export default AddProduct;
