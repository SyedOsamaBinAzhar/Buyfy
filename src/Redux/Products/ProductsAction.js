import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"
import {v4 as uuid} from 'uuid'
import {SET_PRODUCTS} from "../Products/ProductsConstants"
import {categorizedProducts} from "../../Utility/ProductstUtil"

//admin side stuff
export var uploadProductToFirestore = (productsObj) => async() => {
try {
    // console.log(productsObj)
    // 1 - send file to storage and get download Url
    var imageRef = storage.child(`products/img-${uuid()}`) 
    //image k names same nai hone chahye kabhi

    var fileListener = imageRef.put(productsObj.coverPhoto);

    //fileListener.on takes 4 arguments
    //fileListener.on(event_type,
    //callback-fileStateoOfUploading
    //, callback-error
    //,callback-trigger after file upload)
    fileListener.on('state_changed'
    , 
    (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = parseInt(progress);
        console.log('Upload is ' + progress + '% done');
    }
    ,
    (error) => {
        console.log(error)
    }
    ,
    async()=>{
        //will trigger on completion of upload 
        //downloadUrl ab milega
        var downloadURL = await imageRef.getDownloadURL()

        //2 - modify productObj with cover photo url and created At
        productsObj.coverPhoto = downloadURL;
        productsObj.createdAt = serverTimestamp();
        productsObj.cost=parseFloat(productsObj.cost);
        productsObj.quantity=parseInt(productsObj.quantity)
        console.log(productsObj)

        //3 - create doc in firestore 
        await firestore.collection("products").add(productsObj)
    }
    )
    

} catch (error) {
    console.log(error)
}
}

//user end web stuff
export var fetchProducts = () => async(dispatch) => {
    try {
        var query = await firestore.collection("products").get();
        // var products = query.data(); returns an array so loop karna parega
        
        var products = [];
        
        query.docs.forEach(doc => {
            products.push(doc.data())
        });
        // var categories = categorizedProducts(products); //Fn fetched from ProductUtility
        // console.log(categories);
        dispatch(
            {
                type:SET_PRODUCTS,
                payload : {
                    products
                }
            }
        )

    } catch (error) {
        console.log(error)
    }
    
}

