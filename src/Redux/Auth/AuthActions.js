import {auth, serverTimestamp, googleAuthProvider} from "../../Firebase/Firebase"
import {firestore} from "../../Firebase/Firebase"
import { REMOVE_USER, SET_USER } from "./AuthConstants";

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

var removeUser = (user) =>  ({
    type: REMOVE_USER
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


export var signout = () => async (dispatch) => {
    try {
        //signout user from firebase auth
        await auth.signOut();

        //set auth state to null 

        dispatch(removeUser())

         
    } catch (error) {
        console.log(error)
    }
}

export var googleSignin = () => async (dispatch) => {
    try {
        //signin in firebase google auth
        var {user: {displayName, email, uid}, additionalUserInfo: {isNewUser}} = await auth.signInWithPopup(googleAuthProvider);

        //if new user
        if(isNewUser){
          
        //set user data in firestore
        var userInfo={
            fullName:displayName,
            email:email,
            //flag return hoga aur flag dekh k server time se replace kardega
            createdAt: serverTimestamp()
            //createdAt:  new Date() nai karenge cos local computer ka time ghalat hosakta hai we will use server ka time
        }
        await firestore.collection("users").doc(uid).set(userInfo)
        }
        
            //setting up redux auth state
            var userDataForState={
                fullName: displayName,
                email,uid
            }
            //action is not a simple function call it using dispatch otherwise state wont change
            dispatch(setUser(userDataForState))
        


    } catch (error) {
        console.log(error)
    }
} 