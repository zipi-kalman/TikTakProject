const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    amount: {
        type: Number,
        default:1,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: Number,
        required: true,
    },
 
}

)
module.exports = mongoose.model('product', productSchema)
