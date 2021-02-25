import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';


var middleware=[thunk]


const store = createStore(RootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store 