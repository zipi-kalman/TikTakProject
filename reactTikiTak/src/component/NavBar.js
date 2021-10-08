import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { BsBag, BsHeart, BsPersonPlus } from "react-icons/bs";

function mapStateToProps(state) {
  return {
    sum: state.sum.sum,
    userName:state.user.user.userName
    
  }
}
export default (connect(mapStateToProps)(function NavBar(props) {
  const { sum,userName } = props;
  
  return (
    <>
      <div className="row  bg-dark
       p-2 border-bottom border-light text-light mx-0">
        <h6>Secure Website | Free shipping on purchases over NIS 300</h6>
        </div>
      <div className="row bg-dark
       p-3 border-bottom border-light mx-0">
        <div className="col-3">
        <div className="col-2">
        <span className="text-light" style={{ fontSize: "1em" }}>
            <Link to="/shoppingCartDisplay" className=" text-center" href="#">
              <BsBag className="text-light lg" style={{ fontSize: "2em" }}></BsBag></Link>${sum} </span>
        </div>
        <div className="col-1 text-light lg">
        </div>
         
              </div>
        <div className="col-6"><h1 className="text-light p-2" 
        style={{ fontFamily:" 'Krona One', sans-serif ",textShadow:"2px 2px red" }}>TikTak</h1>
        </div>
        <div className="col-3 text-light">
        <Link to="/myBuyingSummary" className=" text-center text-light">myBuyingSummary<BsHeart style={{ fontSize: "1.5em",margin:"5px" }}>
        </BsHeart ></Link>
          <Link to="/login" className=" text-center text-light" href="#">
         login
          <BsPersonPlus style={{ fontSize: "1.5em",margin:"5px" }} ></BsPersonPlus></Link><h3>{userName}</h3>
          <Link to="/signOut" className=" text-center text-light" href="#"><h6>sign out</h6>
          </Link>
        </div>
        </div>
       
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active text-light" href="#">Home</Link>
            <Link to="/about" className="nav-item nav-link active text-light" href="#">About</Link>
           <Link to="/collectionBabies" className="nav-item nav-link active text-light" href="#">Collection babies</Link>
           <Link to="/collectionBoys" className="nav-item nav-link active text-light" href="#">Collection boys</Link>
           <Link to="/collectionChildhood" className="nav-item nav-link active text-light" href="#">Collection childhood</Link>
          
           <Link to="/shoppingCartDisplay" className="nav-item nav-link active text-light" href="#">Shooping cart and payment</Link>
          </div>
        </div>
      </nav>
   
    </>
  )
}))


