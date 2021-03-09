import React from 'react'
import {auth} from '../../Firebase/Firebase'
import "./Home.css"

const Home = (auth) => {
    // console.log(auth)
    return (
        <div className="home">
            {/* <h1>Home page</h1> */}
            <div className="homeLeft center"><h1>Left`</h1></div>
            <div className="homeRight center"><h1>RIght</h1></div>
        </div>
    )
}

export default Home
