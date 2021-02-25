import {auth, serverTimestamp} from "../../Firebase/Firebase"
import {firestore} from "../../Firebase/Firebase"


//thunk setup karlia hai toh aysnc action pass akra skta hn
export var signup = ({email,password,fullName})=> async (dispatch)=>{
    try {
        // creating user on firebase auth section
        var {user: {uid}} = await auth.createUserWithEmailAndPassword(email,password);

        //set user data in firestore
        var userInfo={
            fullName:fullName,
            email:email,
            //flag return hoga aur flag dekh k server time se replace kardega
            createdAt: serverTimestamp()
            //createdAt:  new Date() nai karenge cos local computer ka time ghalat hosakta hai we will use server ka time
        }
        var userData=await firestore.collection("users").doc(uid).set(userInfo)

    } catch (error) {
        console.log(error)
    }
}