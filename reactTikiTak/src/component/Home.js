import React from 'react';
import '../project.css';
import store from '../Stor/Store';
import { Provider } from 'react-redux'
import { About, History, Reasons, StoreConditionNow } from './About'
import ShoppingCartDisplay from './SoppingCartEditing'
import SummaryAndPaymen from './PaymentPage'
import Payment from './NavBar'
import MainPage from './MainPage';
import Babies from './Babies';
import Boys from './Boys';
import Childhood from './Childhood';
import NavBar from './NavBar';
import Footer from './Footer';
import  Login from './login'
import SignUp from './signUp'
import MyBuyingSummary from './myBuyingSummary'
import SignOut from './signOut'
import {
  BrowserRouter as
    Router,
  Switch,
  Route
} from "react-router-dom"



export default function PageHome() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/about">
                <About>
                  <History />
                  <Reasons />
                  <StoreConditionNow />
                </About>
              </Route>
              <Route path="/collectionBoys">
                <Boys />
              </Route>
              <Route path="/collectionBabies">
                <Babies />
              </Route>
              <Route path="/collectionChildhood">
                <Childhood />
              </Route>
              <Route path="/paymentPage">
                <SummaryAndPaymen />
              </Route>
              <Route path="/shoppingCartDisplay">
                <ShoppingCartDisplay />
              </Route>
              <Route path="/finalPayment">
                <Payment />
              </Route>
              <Route path= "/login">
                <Login/>
              </Route>
              <Route path= "/myBuyingSummary">
                <MyBuyingSummary/>
              </Route>
              <Route path= "/sign-in">
                <SignUp/>
              </Route>
              <Route path= "/signOut">
                <SignOut/>
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    </div>)
}
