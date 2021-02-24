import React from 'react'


import {Route, Switch} from 'react-router-dom';

import Home from './Pages/Home/Home'
import Authentication from './Pages/Authentication/Authentication'
import Category from './Pages/Category/Category'
import Checkout from './Pages/Checkout/Checkout'
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts'




const App = () => {
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



export default App
