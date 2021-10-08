import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import actions from '../Stor/action'
import firebase from "../firebase/Firebase";
import { Link} from "react-router-dom";
// import { logDOM } from "@testing-library/react";


const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: (user) => dispatch(actions.saveUser(user)),
        saveUser: (user) => dispatch(actions.addNewUser(user)),
        buyingSummaryDisplay: (buying) => dispatch(actions.addBuyingSummary(buying)),
    }
}
export default compose(
    withRouter, connect(null,mapDispatchToProps))(function SignUp(props) {

        const [userName, setUserName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const { history, saveUser,buyingSummaryDisplay,removeUser } = props
        useEffect(() => {
            if(email==="" && password===""&& userName===""){
          // firebase.auth().signOut();
          localStorage.clear()
          removeUser({})
          buyingSummaryDisplay([]);
            }
          })

        const handlerSubmit = (e) => {
            e.preventDefault();
            let newUser = {
                userName: userName,
                email: email,
                password: password,
                buyingSummaries:[]

            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    saveUser(newUser)
               } )
                .catch((err) => {
                    firebase.auth().signOut();
                    // localStorage.clear()
                    // saveUser({})
                    history.push('/sign-in')
                    alert(err)
                });
        }
        return (
            <form onSubmit={handlerSubmit} className="container col-4 mt-5" >
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="User Name" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-5 mb-5">Sign Up</button>
                <div>Already have an account? <Link to={"/login"}>Sign in.</Link></div>
            </form>
        );
    }
    )

