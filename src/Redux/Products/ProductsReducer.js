import React from 'react'
import {SET_PRODUCTS} from "../Products/ProductsConstants"


var initialState = [];

var productReducer = (state = initialState , action) => {

    var{type,payload} = action;

    switch (type) {
        case SET_PRODUCTS:
            return [...payload.products]; 
        default : return state
    }
}

export default productReducer;