import React from 'react'
import { Link } from 'react-router-dom'
import son1 from '../image/son1.jpg'
import childhood1 from '../image/childhood1.jpg'
import baby1 from '../image/baby1.jpg'
import main from '../image/main.jpg'
import main2 from '../image/main2.jpg'



export default function MainPage(props){
 
    return(
        <>
       
 
 <div className="d-flex flex-row flex-wrap   container mt-5">
             <div className="col-sm-12 col-md-8 col-lg-4 mx-auto mt-5 mb-5 ">
                 <img src={main} style={{"width":"100%" , "height":" 80vh" }} alt=""/>
             </div>
             <div className=" kol col-sm-12 col-md-8 col-lg-4 mx-auto mt-5 mb-5 "><h1 id="e" className="mt-5 text-light">2021</h1>
             <h2 className="mt-5 text-light">NEW COLLECTION</h2><h2 className="mt-5">Spring / Summer</h2></div>
                 <div className="col-sm-12 col-md-8 col-lg-4 mx-auto mt-5 mb-5 ">
                 <img src={main2} style={{"width":"100%" , "height":" 80vh" }} alt=""/>
             </div>
               </div>
               <div className="d-flex flex-row flex-wrap   container mt-5  ">

<div className="col-sm-12 col-md-8 col-lg-4 mx-auto mt-5 mb-5 " >
<div className="card " style={{"width":"25rem"}}>
<img className="card-img-top" src={son1} alt=""/>
<div className="card-body">
  <h5 className="card-title">Boys collection</h5>
  <Link to="/collectionBoys" className="nav-link  text-center" href="#">CollectionBoys</Link>
</div>
</div></div>
<div className="col-sm-12 col-md-8 col-lg-4  mt-5 mb-5 " >
<div className="card " style={{"width":"25rem"}}>
<img className="card-img-top" src={childhood1} alt=""/>
<div className="card-body">
  <h5 className="card-title">Girls' collection</h5>
  <Link to="/collectionChildhood" className="nav-link text-center" href="#">CollectionChildhood</Link>
</div>
</div></div>
<div className="col-sm-12 col-md-8 col-lg-4 mx-auto mt-5 mb-5 " >
<div className="card " style={{"width":"25rem"}}>
<img className="card-img-top" src={baby1} alt=""/>
<div className="card-body">
  <h5 className="card-title">Baby collection</h5>
  <Link to="/collectionBabies" className="nav-link  text-center" href="#">CollectionBabies</Link>
</div>
</div></div>


</div>


 
 
        </>
    )
}
               
   