const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength:8,
        required:true
    },
    
})

module.exports=mongoose.model('user',userSchema)