import { storage } from "../../Firebase/Firebase"
import {v4 as uuid} from 'uuid'
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
        // console.log(downloadURL)

    }
    )
    
    //2 - modify productObj with cover photo url and created At

    //3 - create doc in firestore 
} catch (error) {
    console.log(error)
}
}