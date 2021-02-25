import React, {useEffect} from 'react'


import {Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux'

import Home from './Pages/Home/Home'
import Authentication from './Pages/Authentication/Authentication'
import Category from './Pages/Category/Category'
import Checkout from './Pages/Checkout/Checkout'
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts'

import {firebaseAuthListener} from "../src/Redux/Auth/AuthActions"



const App = ({firebaseAuthListener}) => {
  useEffect(()=>{
    //CDM
    //firebase Auth listener Listened when componenet mounted
    firebaseAuthListener()
  },[])

  
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/authentication" component={Authentication} />
        <Route path="/categories" component={Category}/>
        <Route path="/category-products" component={CategoryProducts}/>
        <Route path="/checkout" component={Checkout}/>
      </Switch>
    </div>
  )
}

var actions = {
  firebaseAuthListener
}

export default connect(null,actions)(App)
