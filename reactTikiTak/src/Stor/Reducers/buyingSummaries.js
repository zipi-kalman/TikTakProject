import produce from 'immer';
import execHandler from './ReducerUtils';

const initialState ={
    buyingSummary:[]
   
}

const buyingSummary={
    
    addBuyingSummary(state,action){
        state.buyingSummary=(action.payload)
},

}

export default produce((state, action) => {
    execHandler(state, action, buyingSummary)
}, initialState)
