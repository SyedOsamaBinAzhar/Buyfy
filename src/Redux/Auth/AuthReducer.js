import {SET_USER} from "../Auth/AuthConstants"

var initialState=null;


var AuthReducer=(state=initialState,action)=>{
var {type,payload} = action;
switch (type) {
    case SET_USER :
        return payload.user
    default:
        return state
}
}


export default AuthReducer;