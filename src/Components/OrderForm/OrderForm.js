import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";

const OrderForm = ({user}) => {
    var [fullName,setFullname] = useState("");
    var [email,setEmail] = useState("");
    var [phone,setPhone] = useState("");
    var [address,setAddress] = useState("");
    // console.log(user)
    useEffect(() => {
        //CDM
        var {fullName,email,phone,address} = user;
        setFullname(fullName ? fullName : "")
        setEmail(email ? email : "")
        setPhone(phone ? phone : "")
        setAddress(address ? address : "")


    },[])
    //reciever's full name
    // ..email
    //..phone
    //..reciever's address
  


    var handleSubmit =(e) =>{
        e.preventDefault();
        var shippingInfo = {
            fullName,
            email,
            phone,
            address
        } 
        console.log(shippingInfo)
    }
    

    return (
        <div>
            <h1>Order FOrm</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recievers full name" value={fullName} onChange={(e)=>{setFullname(e.target.value)}}/>
            <input type="text" placeholder="Recievers full email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="text" placeholder="Recievers full phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <input type="text" placeholder="Recievers full address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
            <button type="submit">PAY</button>
            </form>
        </div>
    )
}

var mapState = (state) => ({
    user: state.auth
})

export default connect(mapState)(OrderForm)
