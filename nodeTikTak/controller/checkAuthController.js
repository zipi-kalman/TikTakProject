const jwt=require('jsonwebtoken')
const User = require("../models/user")

const checkAuth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
       const verifyToken= jwt.verify(token,process.env.SECRET)
       const mail=verifyToken.email
       console.log(mail);
        let userToken = await User.findOne({email:mail}) 
        console.log(userToken);
        
        if (userToken!=={}) {
            console.log("do");
            next()
        } else {
            res.status(401).send("dont user")
            console.log("not");
        }

       
    }
    catch(err){
        res.status(401).json({err: "authorization failed"})
    }
}
module.exports={checkAuth}