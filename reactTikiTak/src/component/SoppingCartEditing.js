import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import actions from '../Stor/action'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


function mapStateToProps(state) {
    return { shoppingCart: state.shoppingCart.shoppingCart, 
    sum:state.sum.sum,
    user:state.user.user
    }
}

const mapDispatchToProps=(dispatch)=>(
    { removeProduct: (product) => dispatch(actions.removeProduct(product)),
      plus: (plusProduct) => dispatch(actions.plus(plusProduct)), 
      minus: (minusProduct) => dispatch(actions.minus(minusProduct)), 
      
     
    })
    function YesOrNo(){
        return(
            <>
            <button className="btn-secondary  mx-2"> 
            <Link to="/paymentPage" className="text-light">YES</Link></button>
            <button  className="btn-secondary  mx-2">
                <Link to="/shoppingCartDisplay" className="text-light">NO</Link></button>
            </>
        )
    }
    function Question(props){
        const{setYesOrNo}=props
        setYesOrNo(false)
        useEffect(function () {
            alert("האם ברצונך לעבור לדף התשלום?")
      
        },[]);
        return(
           <YesOrNo></YesOrNo>
          
        )
           
    }
    

export default   withRouter (connect(mapStateToProps,mapDispatchToProps)(function ShoppingCartDisplay(props) {
    const[ok,setOk]=useState(false)
    const[yesOrNo,setYesOrNo]=useState(true)
    const { shoppingCart,removeProduct,plus,minus,sum,user,history } = props
function changeUser(){
console.log(user);
if (Object.keys(user).length === 0) {
    alert("You are not logged in yet. Log in!")
    history.push("/login")
}
    else{
        setOk(true)
    }
}
    return (
        <div>
            <div className="container-fluid mt-5" style={{minHeight:"60vh"}}>
           {shoppingCart.map((item) => (
               <div key={item.id}  >
               <div className="row border-top" >
               <div className="col-2"><h5 className="card-title mt-5" >$ {item.price} </h5></div> 
               <div className="col-5"><h5 className="card-title mt-5">{item.name}</h5></div> 
               <div className="col-5"><img className="mt-2" src={item.image} style={{height:"17vh"}} alt=""/></div> 
               </div>
               <div className="row">
               <div className="col-2 border-bottom">
                   <button className="btn-secondary"onClick={(e)=>removeProduct(item)}>remove</button></div> 
               <div className="col-5"><button className="btn-secondary" onClick={(e)=>plus(item)}>+</button>
                             <button className="btn-secondary">{item.amount}</button>
                             <button className="btn-secondary" onClick={(e)=>minus(item)}>-</button></div> 
               <div className="col-5"></div> 
               </div> 
                </div> 
                    ))}
                      <div className="row"><h1 className="text-center  mt-5 mb-5">Total payment:  $ {sum} </h1></div>
                     {yesOrNo&& <button className="btn-secondary mb-4" onClick={(e)=>changeUser()}>  Do you want to go to the payment page?</button>}
          </div> 
          {ok&&<Question yesOrNo={yesOrNo} setYesOrNo={setYesOrNo}></Question>} 
       </div>
    

    )
}))