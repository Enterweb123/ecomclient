import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import basketReducer from "../slices/basketSlice";
import editproductSlice from "../slices/editproductSlice";

const store = configureStore({

    reducer:{
      userInfo : userReducer,
      basketItem:basketReducer,
      editProduct:editproductSlice
    },

});

export default store;