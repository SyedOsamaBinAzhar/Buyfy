import { productAdditionInCart, productRemovalFromCart } from "../../Utility/ProductstUtil";
import { deleteProductFromCart } from "./CartActions";
import { ADD_PRODUCT_TO_CART , DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART } from "./CartConstants";

var initialState = [];

var cartReducer = (state = initialState,actions) => {
    var {type,payload} = actions;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return productAdditionInCart(state,payload.product); break;
        case REMOVE_PRODUCT_FROM_CART:
            return productRemovalFromCart(state,payload.productId); break;
        case DELETE_PRODUCT_FROM_CART:
            return state.filter((product) => product.id !== payload.productId)
        default: return state;
            break;
    }
}

export default cartReducer;