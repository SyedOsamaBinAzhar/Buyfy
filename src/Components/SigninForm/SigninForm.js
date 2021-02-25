import React,{useState} from 'react'

const SigninForm = () => {

    var [email,setEmail]=useState("");
    var [password,setPassword]=useState("");

    var handleFormSubmit=(e)=>{
     e.preventDefault();
     console.log(email)
     console.log(password)
    }

    return (
        <div>
            <h1>SIgnin form</h1>
            <form onSubmit={handleFormSubmit}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default SigninForm
