import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket:[],
  };

export const basketSlice = createSlice({
    name:"basket",
    initialState ,
    reducers:{
        addToBasket:(state,action)=> {
            state.basket = [...state.basket, action.payload];
        },

        removeFromBasket:(state,action)=> {
        let newBasket = state.basket.filter((item)=>item.id !== action.payload);
        state.basket = newBasket;
        }
      },
  });


export const {addToBasket,removeFromBasket} = basketSlice.actions;

export const getBasket = (state)=>state.basketItem.basket;

// itha file la 1st ah call export agurathu, default;
export default basketSlice.reducer;