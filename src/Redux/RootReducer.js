import AuthReducer from "../Redux/Auth/AuthReducer"

import {combineReducers} from 'redux'
import productReducer from "./Products/ProductsReducer";

var RootReducer=combineReducers(
    {
        auth: AuthReducer,
        products: productReducer
    }
)

export default RootReducer;