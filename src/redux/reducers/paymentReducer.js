import {MAKE_PAYMENT} from "../actionTypes";

const initialState = {
  cardNo: '',
  name: '',
  date: '',
  code: '',
  amount: ''
}

const paymentReducer = (state = initialState, action) => {
  switch(action.type){
    case MAKE_PAYMENT: return {
      ...state,
      cardNo: action.payload.cardNo,
      name: action.payload.name,
      date: action.payload.date,
      code: action.payload.code,
      amount: action.payload.amount
      
    }
    
    default: return state
  }
}

export default paymentReducer;