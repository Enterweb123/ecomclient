// import React, { useState } from 'react';
// import "./EditProduct.css";

// import { useSelector, useDispatch } from "react-redux";
// import { getEditProductData, removeEditProducts } from '../../slices/editproductSlice';

// const EditProduct = () => {

//   const EditProduct = useSelector(getEditProductData);

//   const [formData, setFormData] = useState({
//     product_name: "",
//     product_image: "",
//     product_cost: "",
//     product_category: "",
//     product_details: "",
//     product_rating: ""
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: [e.target.value]
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   }


//   if (EditProduct) {
//     console.log(EditProduct);
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <lable htmlFor="product_name">product_name</lable>
//         <input
//           type='text'
//           name='product_name'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <lable htmlFor="product_image">product_image</lable>
//         <input
//           type='text'
//           name='product_image'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <lable htmlFor="product_cost">product_cost</lable>
//         <input
//           type='text'
//           name='product_cost'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <lable htmlFor="product_category">product_category</lable>
//         <input
//           type='text'
//           name='product_category'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <lable htmlFor="product_details">product_details</lable>
//         <input
//           type='text'
//           name='product_details'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <lable htmlFor="product_rating">product_rating</lable>
//         <input
//           type='text'
//           name='product_rating'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <button type='submit'> Submit form </button>
//       </form>
//     </div>
//   )
// }

// export default EditProduct
