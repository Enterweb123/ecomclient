import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editProducts:{},
};

export const editproductSlice = createSlice({
    name:"editproduct",
    initialState,
    reducers:{
        addEditProducts:(state,action)=>{
            state.editProducts = action.payload;
        },
        removeEditProducts:(state,action)=>{
            state.editProducts = [];
        },
      },
  });



export const {addEditProducts,removeEditProducts} = editproductSlice.actions;

export const getEditProductData = (state)=>state.editProduct.editProducts;
// itha file la 1st ah call export agurathu, default;

export default editproductSlice.reducer;