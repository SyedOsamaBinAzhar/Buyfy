import {auth} from "../../Firebase/Firebase"


//thunk setup karlia hai toh aysnc action pass akra skta hn
export var signup = ({email,password})=> async (dispatch)=>{
    try {
        // console.log(cred)
        var user = auth.createUserWithEmailAndPassword(email,password);
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}