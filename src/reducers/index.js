import {
  combineReducers
} from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  user: userReducer,
})