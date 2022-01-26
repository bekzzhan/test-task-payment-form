import {combineReducers} from "redux";
import paymentReducer from "./reducers/paymentReducer";
import purchaseReducer from "./reducers/purchaseReducer";
import basketReducer from "./reducers/basketReducer";

const rootreducer = combineReducers({
  payment: paymentReducer,
  purchases: purchaseReducer,
  basket: basketReducer,
})

export default rootreducer;