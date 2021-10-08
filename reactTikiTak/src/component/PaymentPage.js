import React from 'react';
import {connect} from 'react-redux'
import actions from '../Stor/action';

const mapDispatchToProps=(dispatch)=>(
    { addBuyingSummary: (buyingSummary) => dispatch(actions.addNewCart(buyingSummary)),
      
    })
function mapStateToProps(state){
    return {
shoppingCart:state.shoppingCart.shoppingCart,
sum:state.sum.sum,
user:state.user.user._id,
counter:state.counter.counter

}

}


export default connect(mapStateToProps,mapDispatchToProps)(function SummaryAndPayment(props) {

const{shoppingCart,sum,addBuyingSummary,counter,user}=props;
function addBuying(){
    let date=new Date()
    let newBuyingSummary={
        date: date,
        PurchaseAmount:sum,
        amountOfProducts:
            counter,
        userId: user
    }
    
    console.log(newBuyingSummary);
    addBuyingSummary(newBuyingSummary)
}
    return (
    <>
    <div className="container-fluid mt-5" style={{minHeight:"60vh"}}>
                {shoppingCart.map((item) =>(
                <div key={item.id}  >
                <div className="row border-top" >
                    <div className="col-1"></div>
                <div className="col-2"><h5 className="card-title mt-5" >$ {item.price} </h5></div> 
                <div className="col-2"><h5 className="card-title mt-5">{item.name}</h5></div> 
                <div className="col-2 mt-5 card-title">product code: {item.id}</div>
                <div className="col-2 mt-5 card-title">amount: {item.amount}</div>
                <div className="col-2"><img className="mt-2" src={item.image} style={{height:"10vh"}} alt=""/></div> 
                <div className="col-1"></div>
                </div> </div>
                 ))}
<div className="row"><h1 className="text-center  mt-5">Total to payment:  $ {sum} </h1></div>
<button className="btn-secondary mt-3" onClick={(e)=>addBuying()}>To be paid by credit card click</button>
</div>
        </>

)
})

  

  