import {combineReducers} from "redux";
import paymentReducer from "./reducers/paymentReducer";
import purchaseReducer from "./reducers/purchaseReducer";

const rootreducer = combineReducers({
  payment: paymentReducer,
  purchases: purchaseReducer,
})

export default rootreducer;