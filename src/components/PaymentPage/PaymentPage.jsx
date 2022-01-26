import React from 'react';
import Basket from "./Basket/Basket";
import PaymentForm from "./PaymentForm/PaymentForm";
import './PaymentPage.css'

const PaymentPage = () => {
  return (
    <div className='page-wrapper'>
      <Basket />
      <div className="page-payment-form">
        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentPage;