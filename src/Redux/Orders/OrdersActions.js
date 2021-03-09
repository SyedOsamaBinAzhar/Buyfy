import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"


export var generateOrder = (orderInfo) => async (dispatch,getState) => {
    try {
        // console.log(orderInfo)
        var {auth,cart: products} = getState();
        // console.log(auth,cart)
        var orderInfo = {
            ...auth,
            products,
            createdAt: serverTimestamp(),
            orderStatus: "pending"
        } 
        console.log(orderInfo)
    } catch (error) {
        console.log(error)
    }
}