import { productAdditionInCart, productRemovalFromCart } from "../../Utility/ProductstUtil";
import { ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_FROM_CART } from "./CartConstants";

var initialState = [];

var cartReducer = (state = initialState,actions) => {
    var {type,payload} = actions;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return productAdditionInCart(state,payload.product)
        case REMOVE_PRODUCT_FROM_CART:
            return productRemovalFromCart(state,payload.productId)
        default: return state;
            break;
    }
}

export default cartReducer;