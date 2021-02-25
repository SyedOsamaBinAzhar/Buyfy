import {auth, serverTimestamp} from "../../Firebase/Firebase"
import {firestore} from "../../Firebase/Firebase"
import { SET_USER } from "./AuthConstants";

//simple functions can also be called even when thunk is used.

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
        await firestore.collection("users").doc(uid).set(userInfo)

        
        //setting up redux state
        var userDataForState={
            fullName,email,uid
        }
        //action is not a simple function call it using dispatch otherwise state wont change
        dispatch(setUser(userDataForState))


    } catch (error) {
        console.log(error)
    }
}

//sepaarate function for setting user in redux state.
var setUser = (user) =>  ({
    type: SET_USER,
    payload: {
    user
 }

})
//SIGNUP DONE

//SIGN IN FUNCTION 

export var signin = ({email,password}) => async (dispatch) =>{
    try {

        var {user: {uid}} = await auth.signInWithEmailAndPassword(email,password);

        //fetch user data from firestore
        var userData = await firestore.collection("users").doc(uid).get();
        var {fullName, email : userEmail} = userData.data();

        var userDataForState = {
            fullName,
            email : userEmail,
            uid
        }

        dispatch(setUser(userDataForState))

        //set user data to auth/redux state
    } catch (error) {
        console.log(error)
    }
}
