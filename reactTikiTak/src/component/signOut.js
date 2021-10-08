import React from "react";
import { connect } from "react-redux";
import actions from '../Stor/action'


const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: (user) => dispatch(actions.saveUser(user)),
        buyingSummaryDisplay: (buying) => dispatch(actions.addBuyingSummary(buying)),
    }
}
export default connect(null,mapDispatchToProps)(function SignOut(props) {

        const {  removeUser,buyingSummaryDisplay } = props

        function signOut() {
          localStorage.clear()
          removeUser({})
          buyingSummaryDisplay([]);
            }
        
        return (
            <>
                <h3 className="mt-5 mb-5">Want to log out?</h3>
                <button  className="btn btn-primary btn-block mt-5 mb-5" onClick={(e)=>signOut()}>Sign Out</button>
                
            </>
        );
    }
    )

