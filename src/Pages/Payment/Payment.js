import React from 'react';
import './Payment.css';
import { useParams, Navigate } from "react-router-dom";

// stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

// paymentForm
import PaymentForm from '../../components/PaymentForm/PaymentForm';

const stripePromise = loadStripe("pk_test_51McMuxSJyvIt4d2EgkoEwMfktyh6WzQLJMKZuOeXHOxxNFtjOok2GtteJE9KLTcye9YgA2iRPo4OXowmLDzUzfzC00uZIw4Ms0");


const Payment = () => {
  const { id } = useParams();

  const options = {
    clientSecret: id,
    appearance: {
      theme: "stripe",
    },
  };

  if (!id) {
    return <Navigate to="/" />;
  }

  return <div className='payment'>
      <Elements options={options} stripe={stripePromise}>
        <PaymentForm secretKey={id} />
      </Elements>
    </div>;
  
}

export default Payment
