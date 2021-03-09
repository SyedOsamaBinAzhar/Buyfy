import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"
import history from "../../History/History";


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
        // console.log(orderInfo)
        var order = await firestore.collection("orders").add(orderInfo);
        // console.log(order.id)
        console.log(history)

    } catch (error) {
        console.log(error)
    }
}