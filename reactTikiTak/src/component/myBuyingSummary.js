import React from 'react';
import { connect } from "react-redux";
import actions from '../Stor/action'
import {withRouter} from 'react-router-dom'

function mapStateToProps(state){
  return {
    userId:state.user.user._id,
    BuyingSummaries:state.buyingSummary.buyingSummary,
    userName:state.user.user.userName
}
}
const mapDispatchToProps=(dispatch)=>(
  {
        buyingSummaryDisplay: (userId) => dispatch(actions.summaryDisplay(userId)),
        })

export default withRouter(connect( mapStateToProps,mapDispatchToProps)( function MyBuyingSummary(props){
  const {buyingSummaryDisplay,userId,BuyingSummaries,history,userName}=props;
  console.log(userId);
  
  if (userId===undefined) {
    history.push("/login")
  }
  if (BuyingSummaries.length === 0) {
   
    buyingSummaryDisplay(userId)
  }

  
    return (
      <>
     <h1>Hi {userName} Your shopping is:</h1>
    {BuyingSummaries.map((item)=><li>
      <ul>date: {item.date}</ul>
      <ul>PurchaseAmount: {item.PurchaseAmount}</ul>
      <ul>amountOfProducts: {item.amountOfProducts}</ul>
      </li>)

    }
        
     </>
      );
    }
    ))

    
