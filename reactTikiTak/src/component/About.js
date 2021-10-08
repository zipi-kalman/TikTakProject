import React, { useState } from 'react';

export function About(props) {
const [currentChild,setCurrentChild]=useState(0);
const numberOfPages =React.Children.count(props.children);
    
function pageComponent(indexOfPage){
    // const allProps={currentChild,setCurrentChild}
    const child = React.Children.toArray(props.children)[indexOfPage];
        return React.cloneElement(child);
}

    return(
    <div className="mt-5 md-5">
        <button disabled={currentChild===0}
        onClick={()=>setCurrentChild(v=>v-1)}
         style={{fontFamily: "'Libre Baskerville', serif"}} className="btn-secndory">
Previous Page &lt;
        </button>
        <button disabled={currentChild>=numberOfPages-1}
        onClick={()=>setCurrentChild(v=>v+1)}
         style={{fontFamily: "'Libre Baskerville', serif"}} className="btn-secndory">
More about us &gt;
        </button>
        {pageComponent(currentChild)}
    </div>)
}



export function History(props){
    return(<>
    <div className="mt-5 mb-5 " style={{fontFamily: "'Libre Baskerville', serif",fontSize:"25px"}}>
    <h3 className="mb-3" style={{fontWeight:"bold",textShadow:"2px 2px red" }}>History</h3>
    <p>A small family business</p>
    <p> in a tiny store in Bnei Brak,</p> 
    <p>a small and sympathetic family</p>
    <p> of clients,</p>
    <p>satisfied with the products,</p>
    <p> and waiting for more  </p>
    <p>Products from our creator.</p>
    </div>
   </> )
}
export function Reasons(props){
    return(<>
    <div className="mt-5 mb-5 " style={{fontFamily: "'Libre Baskerville', serif",fontSize:"25px"}}>
    <h3 className="mb-3"style={{fontWeight:"bold",textShadow:"2px 2px red" }}>The reasons that opened the store</h3>
    <p>"TipTop" fashion was established</p>
    <p> in 2011 when our stunning</p> 
    <p> uncles and Itzik were two and </p>
    <p> a half years old and four,</p>
    <p>we went out to look for clothes</p>
    <p> for them and found that in </p>
    <p>all the children's clothing </p>
    <p> stores we were looking</p>
    <p> for a selection of clothes </p> 
    <p>for boys small and not varied. </p>
    <p> We decided to pick up the glove,</p>
    <p>and created a children’s clothing</p>
    <p> to boys only. </p>
    <p>An entire store dedicated </p>
    <p> solely to our princes. Later, </p>
    <p>  when our princess Yaeli was born, </p>
    <p> we added the "Sister" collection</p> 
    <p> with a corner for the princes' </p>
    <p>sisters with selected and </p>
    <p> compatible models.</p>
    </div>
       </> )
    
}
export function StoreConditionNow(props){
    return(<>
     <div className="mt-5 mb-5 " style={{fontFamily: "'Libre Baskerville', serif",fontSize:"25px"}}>
    <h3  className="mb-3"style={{fontWeight:"bold",textShadow:"2px 2px red" }}>StoreConditionNow</h3>
    <p>From a small family business</p>
    <p> in a tiny store in Bnei Brak,</p> 
    <p> we have within a few years become</p>
    <p> a business that remains family </p>
    <p>  but with many branches around</p>
    <p>  the country and the world, </p>
    <p> and with a family of loyal  </p>
    <p> customers who do not give</p>
    <p>up the "TipTop"  collection. </p>
    <p>New and diverse. </p> 
    </div>
   
       </> )
    
}
