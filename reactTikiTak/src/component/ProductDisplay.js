import React, { useState } from 'react'
import { connect } from 'react-redux';
import actions from '../Stor/action';
import MainModal from './MainModal';



const mapDispatchToProps = {

    add:(item)=>actions.addProduct(
          { name: item.name, _id: item._id, price: item.price, amount: item.amount, image: item.image }),
    actionAxios:(products)=>actions.getAllProducts(products)
}
function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart.shoppingCart
  }
}

export default (connect(mapStateToProps,mapDispatchToProps)(function ProductDisplay(props) {
  const { add, arrCollection,actionAxios} = props
  const [modalItem, setModalItem] = useState({});
  const [show, setShow] = useState(false);

  function openModal(item) {
    

    setModalItem(item)
    setShow(true)
    console.log(item);
  }
  if (arrCollection.length === 0) {
    console.log("null");
    actionAxios()

        
  } 
  return (
   <div className="d-flex flex-row flex-wrap justifity-content-around card-group container mt-5  mx-auto " >
      {arrCollection.map((item) => (
                        <div key={item._id}
                        onClick={() => openModal(item)} className="container col-sm-12 col-md-6 col-lg-3 mt-5 mb-5 " >
                        <div className="card " style={{width:"18rem"}}>
                          <img className="card-img-top" src={item.image} alt=""/>
                          <div className="card-body">
                          <h4 className="card-title"> {item.name}</h4>
                            <h5 className="card-title"> $ {item.price}</h5>
                            <button
              onClick={(e)=> {e.stopPropagation(); add(item)}} className="btn-secondary">Add to the basket</button>
                          </div>
                        </div></div>
                      
                    ))}
      <MainModal modalItem={modalItem} setShow={setShow} show={show} add={add}></MainModal>
    </div>
  ) }
) 
) 

