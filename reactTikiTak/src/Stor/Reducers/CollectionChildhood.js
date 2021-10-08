import produce from 'immer';
import execHandler from './ReducerUtils';
import JeansDress from '../../image/Jeans dress.jpg'
import StripedDress from '../../image/Striped dress.jpg'
import BlueDress from '../../image/Blue dress.jpg'
import BrownSandal from '../../image/Brown sandal.jpg'
import JeansSandal  from '../../image/Jeans sandal.jpg'
import PinkSandal from '../../image/Pink sandal.jpg'
import PinkGirlsShirt from '../../image/Pink girls shirt.jpg'
import YelloGirlsShirt from '../../image/Yello girls shirt.jpg'
import JeansGirlsShirt from '../../image/Jeans girls shirt.jpg'
import BrownDress from '../../image/Brown dress.jpg'
import GraySandal from '../../image/Gray sandal.jpg'
import RedShirt2 from '../../image/Red shirt2.jpg'

const initialState ={
    childhood:[
        {name:"Jeans dress",id:"4551PRB",price:41,amount:1,image:JeansDress},
        {name:"Blue dress",id:"4651PRB",price:35,amount:1,image:BlueDress },
        {name:"Striped dress",id:"4851PRB",price:28,amount:1,image:StripedDress},
        {name:"Brown dress",id:"4557PRB",price:25,amount:1,image:BrownDress},
        {name:"Brown sandal",id:"4781PRB3",price:29,amount:1,image:BrownSandal },
        {name:"Jeans sandal",id:"4573PRB",price:31,amount:1,image:JeansSandal},
        {name:"Pink sandal",id:"4598PRB",price:44,amount:1,image:PinkSandal},
        {name:"Gray sandal",id:"4559PRB",price:35,amount:1,image:GraySandal},
        {name:"Pink girls shirt",id:"4524PRB",price:18,amount:1,image:PinkGirlsShirt},
        {name:"Jeans girls shirt",id:"4522PRB",price:17,amount:1,image:JeansGirlsShirt},
        {name:"Yello girls shirt",id:"4555PRB",price:12,amount:1,image:YelloGirlsShirt},
        {name:"Red shirt",id:"4554PRB",price:19,amount:1,image:RedShirt2}

    ]
}

const childhood = {
    addNewProdut(state, action) {
        state.babies.push(action.payload)
    },
    updateProduct(state, action) {
        state.babies.find(x => x.id === action.payload.id).name = action.payload
    }
}

export default produce((state, action) => {
    execHandler(state, action, childhood)
}, initialState)

