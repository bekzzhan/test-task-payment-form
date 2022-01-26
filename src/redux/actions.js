import {BASKET_SUM, MAKE_PAYMENT} from './actionTypes';
import {PRODUCT_PAID} from "./actionTypes";

export const makePayment = (cardNo,name,expDate,code,amount) => {
  return {
    type: MAKE_PAYMENT,
    payload: {
      cardNo: cardNo,
      name: name,
      expDate: expDate,
      code: code,
      amount: amount
    }
  }
}

export const changePurchaseStatus = (id, status) => {
  return {
    type: PRODUCT_PAID,
    payload: {id, status},
  }
}

export const addBasketSum = (quantity, sum) => {
  return {
    type: BASKET_SUM,
    payload: {quantity, sum},
  }
}