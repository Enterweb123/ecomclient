import React, { useState, useEffect } from 'react';
import './ViewProduct.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';
import { Link,useParams } from 'react-router-dom';
import axios from '../../axios';

const Product = () => {
    const {viewid} = useParams();
    console.log(viewid);
    const [id, Setid] = useState("641e6aae4ee0693d93243910");
    const [title, Settitle] = useState("");
    const [image, Setimage] = useState("");
    const [price, Setprice] = useState("");
    const [rating, Setrating] = useState("");
    const [details, Setdetails] = useState("");

    const getproducts = async () => {
        const responcedata = await axios.get('/product/getsingleproduct/641e6aae4ee0693d93243910');
        Setid(responcedata.data.product_id)
        //   console.log(responcedata.data)
        Settitle(responcedata.data.product_name)
        Setimage(responcedata.data.product_image)
        Setprice(responcedata.data.product_cost)
        Setrating(responcedata.data.product_rating)
        Setdetails(responcedata.data.product_details)
    }

    useEffect(() => {
        getproducts()
    }, [])

    const dispatch = useDispatch();

    const addToBas = () => {
        dispatch(
            addToBasket({
                id, title,
                image, price,
                rating,
            })
        );
    };

    return (
        <div className='view_product'>

            <div className='view'>

                <div className='view_product__info'>
                    <img className='view_product__img' src={image} alt="img" />

                    <p> {title} </p>

                    <p className='view_product__price'>
                        <small>₹</small>
                        <strong> {price} </strong>
                    </p>

                    <div className='view_product__rating'>
                        {
                            Array(rating).fill().map((_, index) => (
                                <span key={index}>⭐</span>))
                        }
                    </div>

                </div>


                <p className='view_product__price'>
                    <p> {details} </p>
                </p>

                <button className='view_addto_cart_button'
                    onClick={addToBas}>
                    Add to basket
                </button>

                <Link className='view_addto_cart_button' to="/">
                    Shop
                </Link>

            </div>
        </div>
    )
}

export default Product;
