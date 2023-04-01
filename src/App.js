import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Home         from './Pages/Home/Home';
import Login        from './Pages/Login/Login';
import Verify       from './Pages/Verify/Verify';
import Checkout     from './Pages/Checkout/Checkout';
import Payment      from './Pages/Payment/Payment';
import Orders       from './Pages/Orders/Orders';
import Signup       from './Pages/Signup/Signup';
import AddProduct   from './Pages/AddProduct/AddProduct';
import UpdateProduct  from './Pages/EditProduct/updateProduct';
import ViewProduct  from './Pages/ViewProduct/ViewProduct';

import Header       from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute';


const App = ()=>{

  return (
    <Router>
      <Routes>
         <Route path='/' element={
         <>
            <Header/>
            <Home/>
         </>
        } />
         <Route path='/viewproduct/:viewid' element={
         <>
            <Header/>
            <ViewProduct/>
         </>
        } />

         <Route path='/updateProduct/:updateid' element={
          <>
            <Header />
            <UpdateProduct />
          </>
         } />

         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='user/verify/:token' element={<Verify />} />

         <Route element={<PrivateRoute/>}>

            <Route path='/checkout' element={
              <>
                <Header/>
                <Checkout/>
              </>
            } />

          <Route path='/addProduct' element={
            <>
              <Header/>
              <AddProduct />
            </>
          } />

            <Route path='/pay/:id' element={
              <>
                <Header/>
                <Payment/>
              </>
            } />

            <Route path='/orders' element={
              <>
                <Header/>
                <Orders/>
              </>
            } />
         </Route>

      </Routes>
    </Router>
  )
}

export default App;
