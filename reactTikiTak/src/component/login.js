
import React, { useState,useEffect } from 'react';
import * as Yup from 'yup';
// import firebase from '../firebase/Firebase'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import actions from '../Stor/action'
import { compose } from "redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import IconButton from "@material-ui/core/IconButton"; 
import Visibility from "@material-ui/icons/Visibility"; 
import Grid from "@material-ui/core/Grid";
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 
import { Link} from "react-router-dom";


const mapDispatchToProps=(dispatch)=>(
  
  { removeUser: (user) => dispatch(actions.saveUser(user)),

    saveUser:(user)=>dispatch(actions.saveUser(user)),
        buyingSummaryDisplay: (buying) => dispatch(actions.addBuyingSummary(buying)),
      
      

  })

export default compose(connect( null,mapDispatchToProps)( function Login(props){
  const {saveUser,buyingSummaryDisplay,removeUser}=props;
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(""); 
  let history = useHistory();

const handleTogglePassword = () => setShowPassword(showPassword => !showPassword);
useEffect(() => {
  if(email==="" && password===""&& userName===""){
// firebase.auth().signOut();
localStorage.clear()
removeUser({})
buyingSummaryDisplay([]);
  }
})
 
 
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

 
  const handlerSubmit = async () => {
    // let user=""
    try {
  //  user = await firebase.auth().signInWithEmailAndPassword(email,password)
      // console.log(user.user.uid, "fir", firebase)
          // let tokenId = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlYmMyZmI5N2QyNWE1MmQ5MjJhOGRkNTRiZmQ4MzhhOTk4MjE2MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZHJpbmtzcHJvamVjdC04YmIxMiIsImF1ZCI6ImRyaW5rc3Byb2plY3QtOGJiMTIiLCJhdXRoX3RpbWUiOjE2MTM5NTA1OTQsInVzZXJfaWQiOiJjbzlTZHdoeFBqZDRxWGVmbllMMjYweXk1YVQyIiwic3ViIjoiY285U2R3aHhQamQ0cVhlZm5ZTDI2MHl5NWFUMiIsImlhdCI6MTYxMzk1MDYwMiwiZXhwIjoxNjEzOTU0MjAyLCJlbWFpbCI6Im5lY2hhbWFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5lY2hhbWFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.nvjwKjXHajMjM2aLGcUr3o5FGgyO6tmf7TeLf7oaFOcjchk7zMAPJrZ3b85cGbMvNELcKOkDMw48uEvsalX9dE6hTdq7XqZGcV_4h6kIYpkV5XqBUIcqUqbovU1FKEmJ1bDYQ4SnIWgo-5C5L-HlAv9LSqzJdyJAJEViegFrku7sPt914CFrQFNOmeNFVpyFafuwdLmjROForI8wi8vlEtqElQe632UM8Mqeb3H4o0pD7OSILlb_C18O-tuyxsp-pgKr_k5fDv2odP30BKfDO6Ucaudou8-i2p4gx8rzeKJg7o0EM4eUX-vTcENgCTHwfZl0YXOmBEuSdN7edILO7Q"
          //await firebase.auth().currentUser.getIdToken(true)
          axios.get(`http://localhost:5000/login/${email}/${password}`
              // , {
              //     headers: {
              //         Authorization: tokenId
              //     }
              // }
          )
              .then((respons) => {
                  const myUser = respons.data.user;
                  console.log(myUser)
                  localStorage.setItem("token", respons.data.token)
                  saveUser(myUser);
              })
              .catch((err) => {
                  console.warn('error in login component',err)
                  // firebase.auth().signOut();
                  localStorage.clear()
                  saveUser({})
                  history.push('/sign-in')
                  alert("login failed")
              })
    } catch (err) {
      console.warn('error in login component',err)
      // firebase.auth().signOut();
      localStorage.clear()
      saveUser({})
      history.push('/sign-in')
      alert("login failed")
  };
}
    return (
      <>
        <Formik validationSchema={SignupSchema} initialValues={{
          email: '', password: ''
        }}
          onSubmit={handlerSubmit}
        >
    
          <Form  className="container col-4 mt-5 mb-5">
            <h3 className="mt-5">Login</h3>
            <div className="form-group">
              <label className="mt-5">User name</label>
              <Field type="text" name="text" className="form-control" placeholder="Enter User name" onInput={(e)=>setUserName(e.target.value)}/>
              <ErrorMessage name="text" component="div" className="alert alert-danger"></ErrorMessage>
            </div>
            <div className="form-group">
              <label className="mt-5">Email address</label>
              <Field type="email" name="email" className="form-control" placeholder="Enter email" onInput={(e)=>setEmail(e.target.value)}/>
              <ErrorMessage name="email" component="div" className="alert alert-danger"></ErrorMessage>
            </div>
    
            <div className="form-group">
              <label className="mt-5">Password</label>
              <Grid className="d-flex" >
              <Field  type={showPassword ? "text" : "password"}  name="password" className="form-control" placeholder="Enter password" onInput={(e)=>setPassword(e.target.value)}  />
       
              <IconButton  onClick={handleTogglePassword}   > 
  
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
     
                </Grid>
              <ErrorMessage name="password" component="div" className="alert alert-danger"></ErrorMessage>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block mt-5 mb-5" >Submit</button>
            </div>
            <div>Don't have an account? <Link to={"/sign-in"}>Sign Up</Link></div>
          </Form>
    
        </Formik>
     
     </>
      );
    }
    ))

    
