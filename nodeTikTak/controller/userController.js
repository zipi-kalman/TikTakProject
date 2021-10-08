const User = require("../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login=async(req,res)=>{
    try{
        let token = jwt.sign({ email: req.params.email}, process.env.SECRET)
        let user = await User.findOne({email:req.params.email})
        console.log(user.password)
        const password = req.params.password;
       
        if (user.password===password) {
            user.password=req.params.password
            console.log(user)
            res.status(200).json({ user:user, token:token }) 
        }
        else{
            console.log("eror password");
            res.status(404)
        } 
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}

const register= async (req, res) => {
    let user = new User(req.body)
    try {
        
        let token = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.SECRET)
        // user.password = await bcrypt.hash(user.password, 10)
        let myUser = await user.save();
        myUser.password = req.body.password
        res.status(200).json({ user: myUser,token: token})
    }
    catch(err) {
        res.status(500).json({ err: err })
    }
}

// const getUserById = (req, res) => {
//     User.findById(req.params.userId).populate('books')
//         .then((user) => {
//             res.status(200).json({ theUser: user })
//         })
//         .catch((error) => {
//             res.status(500).json({ error: error })
//         })

// }

module.exports = { login, register }

