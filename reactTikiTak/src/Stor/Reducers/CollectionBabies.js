import produce from 'immer';
import execHandler from './ReducerUtils';

const initialState ={
    babies:[
    ]
}
       
const babies = {
    setProducts(state, action) {
        state.babies=action.payload

    },
    addNewProdut(state, action) {
        state.babies.push(action.payload)
    },
    updateProduct(state, action) {
        state.babies.find(x => x.id === action.payload.id).name = action.payload
    }
}

export default produce((state, action) => {
    execHandler(state, action, babies)
}, initialState)
