import actions from '../action';
import axios from "axios";
import firebase from "../../firebase/Firebase";


export  const getAllProducts=({dispatch,getState})=>next=>action=>{
if (action.type==="GET_ALL_PRODUCTS") {
    fetch("http://localhost:5000/getProducts")
    .then(response=>response.json())
    .then(data=>{
        dispatch(actions.setProducts(data))
    })
}
return next(action)
}

export  const saveNewUser=({dispatch,getState})=>next=>action=>{
    let newUser=action.payload
if (action.type==="ADD_NEW_USER") {
    console.log(action.payload);
    axios.post("http://localhost:5000/register", newUser)
                        .then(respons => {
                            localStorage.setItem("token", respons.data.token)
                            dispatch(actions.addUser(respons.data.user))
                        })
                        .catch(err => {
                            firebase.auth().signOut();
                            localStorage.clear()
                            // saveUser({})
                            // history.push('/sign-in')
                        })
    }
    return next(action)
}

export  const saveBuyingSummary=({dispatch,getState})=>next=>action=>{
    let buyingSummary=action.payload
if (action.type==="ADD_NEW_CART") {
    console.log(action.payload);
    axios.post("http://localhost:5000/createBuyingSummary", buyingSummary)
                        .then(respons => {
                            console.log(respons.data.user.buyingSummaries);
                            // dispatch(actions.addBuyingSummary(respons.data.user.buyingSummaries))
                        })
                        .catch(err => {
                            // alert("buyingSummary failed")
                        })
    }
    return next(action)
}
export  const BuyingSummaries=({dispatch,getState})=>next=>action=>{
    let userId=action.payload
if (action.type==="SUMMARY_DISPLAY") {
    console.log(action.payload);
    axios.get(`http://localhost:5000/BuyingSummariesDisplay/${userId}`, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`
        }})
                        .then(respons => {
                            console.log(respons.data);
                            if (respons.data.length === 0) {
                                console.log("trhhhh");
                                return
                            } else {
                                dispatch(actions.addBuyingSummary(respons.data))
                            }
                            
                        })
                        
                        .catch(err => {
                            alert("buyingSummaryDispay failed")
                        })
    }
    return next(action)
}






