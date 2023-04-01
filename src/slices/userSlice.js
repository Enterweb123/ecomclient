import {createSlice} from "@reduxjs/toolkit";
import axios from "../axios";

const initialState = {
    user:null,
};

export const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{ 
        setUser:(state,action)=>{
            state.user = action.payload;   
        },
        logout :(state)=>{
            localStorage.removeItem("token");
            state.user = null;
        },
    },
});

// it go to app component for global state managements
export const { setUser, logout } = userSlice.actions;

export const getUser =(state)=>state.userInfo.user;

// it go to store area
export default userSlice.reducer;

// handle login - middlware reducer
export const handleLogin = (token)=>{

    return async(dispatch)=>{
        const responce = await axios.get("/user/data",{
            headers:{
                Authorization:token
            },
        });
        dispatch(setUser(responce.data));
    };
};
