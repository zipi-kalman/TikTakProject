const mongoose = require('mongoose');

const buyingSummarySchema = mongoose.Schema({
    date:{
        type:Date,
    },
    PurchaseAmount:{
        type:Number,
        required: true,
    },
    amountOfProducts: {
        type: Number,
        required: true,
        
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
 
}

)
module.exports = mongoose.model('buyingSummary', buyingSummarySchema)
