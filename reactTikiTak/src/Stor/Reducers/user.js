import produce from 'immer';
import execHandler from './ReducerUtils';

const initialState ={
    user:{
    }
}

const user={
    addUser(state,action){
        state.user=(action.payload)
 
    },
 
saveUser(state,action){
    state.user=action.payload
}

}

export default produce((state, action) => {
    execHandler(state, action, user)
}, initialState)
