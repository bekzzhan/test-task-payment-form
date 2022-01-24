import {PRODUCT_PAID} from "../actionTypes";

const initialState = {
  id: 1,
  title: 'Пылесос Dyson V8 Absolute (SV10)',
  price: 214990,
  quantity: 1,
  status: 'waiting for payment'
}

const purchaseReducer = (state = initialState, action) => {
  switch(action.type){
    case PRODUCT_PAID: return {
      ...state,
      status: action.payload,
    }
    
    default: return state
  }
}

export default purchaseReducer;