import AuthReducer from "../Redux/Auth/AuthReducer"

import {combineReducers} from 'redux'

var RootReducer=combineReducers(
    {
        auth: AuthReducer
    }
)

export default RootReducer;