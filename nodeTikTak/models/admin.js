const mongoose=require ('mongoose');

const adminSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    
    },
    password:{
        type: String,
        required: true         
    },
    phone:{
        type: String,
        minLength:10,
    },
    email:{
        type: String,
        
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
    }
    )
    module.exports=mongoose.model('admin',adminSchema)
    