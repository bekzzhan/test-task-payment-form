import { MAKE_PAYMENT } from './actionTypes';
import {PRODUCT_PAID} from "./actionTypes";

export const makePayment = (cardNo,name,date,code,amount) => {
  return {
    type: MAKE_PAYMENT,
    payload: {
      cardNo: cardNo,
      name: name,
      date: date,
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