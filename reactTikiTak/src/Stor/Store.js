import{createStore,combineReducers,applyMiddleware} from 'redux';
import boys from './Reducers/CollectionBoys';
import babies from './Reducers/CollectionBabies';
import childhood from './Reducers/CollectionChildhood';
import shoppingCart from './Reducers/ShoppingCart'
import sum from './Reducers/ShoppingCart'
import counter from './Reducers/ShoppingCart'
import user from './Reducers/user'
import buyingSummary from './Reducers/buyingSummaries'
import {composeWithDevTools } from 'redux-devtools-extension';
import {getAllProducts,saveNewUser,saveBuyingSummary,BuyingSummaries} from './middleware/crud';

 const reducer=combineReducers({childhood,boys,babies,shoppingCart,sum,user,counter,buyingSummary});
 const store=createStore(
     reducer
     ,composeWithDevTools( applyMiddleware(getAllProducts,saveNewUser,saveBuyingSummary,BuyingSummaries)),
    
     );
 window.store=store;
 export default store;