import AuthReducer from "../Redux/Auth/AuthReducer"

import {combineReducers} from 'redux'
import productReducer from "./Products/ProductsReducer";
import cartReducer from "./Cart/CartReducer";

var RootReducer=combineReducers(
    {
        auth: AuthReducer,
        products: productReducer,
        cart:cartReducer
    }
)

export default RootReducer;