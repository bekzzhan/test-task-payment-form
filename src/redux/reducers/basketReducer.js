import {BASKET_SUM} from "../actionTypes";

const initialState = {
  quantity: 0,
  sum: 0,
}

const basketReducer = (state = initialState, action) => {
  switch(action.type){
    case BASKET_SUM: return {
      quantity: action.payload.quantity,
      sum: action.payload.sum,
    }
    
    default: return state
  }
}

export default basketReducer;