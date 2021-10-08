import produce from 'immer';
import execHandler from './ReducerUtils';
const initialState ={
    shoppingCart:[  
    ],
    sum:0,
    counter:0
}


const shoppingCart = {

    addProduct(state, action) {
        if (state.shoppingCart.find(x => x.name === action.payload.name)) {
            state.shoppingCart.find(x => x.name === action.payload.name).amount++;
            state.counter++
            state.sum+=(action.payload.price);
        }
        else{
            state.shoppingCart.push(action.payload)
            state.counter++;
state.sum+=(action.payload.price)
        }
    },
    updateProduct(state, action) {
        state.shoppingCart.find(x => x.name === action.payload.name).name = action.payload
    },
    plus(state, action) {
        state.shoppingCart.find(x => x.name=== action.payload.name).amount++
        state.counter++
        state.sum+=(action.payload.price)
    },
    minus(state, action) {
        let x=state.shoppingCart.find(x => x.name=== action.payload.name)
        x.amount--
        state.counter--
        if (x.amount<1) {x.amount=1
        
        }
        else{state.sum-=(action.payload.price)}
    },
    removeProduct(state, action) {
        let conterOfProduct=action.payload.amount;
        state.shoppingCart=state.shoppingCart.filter((item) => item.name !== action.payload.name);
        state.sum-=(action.payload.amount*action.payload.price)
        console.log(conterOfProduct);
        state.counter=state.counter-conterOfProduct;
    },
    
   
}

export default produce((state, action) => {
    execHandler(state, action, shoppingCart)
}, initialState)


