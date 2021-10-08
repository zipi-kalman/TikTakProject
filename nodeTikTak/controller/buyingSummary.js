const User = require("../models/user")
const BuyingSummary = require("../models/buyingSummary")



const createBuyingSummary =async  (req, res) => {
    console.log(req.body);
    const currentUser=await User.findById(req.body.userId.user)
    console.log(currentUser);
   
    let buyingSummary = new BuyingSummary(req.body)
       
    try {
        console.log(buyingSummary);
        await buyingSummary.save();
        console.log(buyingSummary._id);
        // await currentUser.buyingSummaries.push(buyingSummary._id);
        // await currentUser.save();
        console.log("yes");
        res.status(200).json({ massage: 'buyingSummary created', buyingSummary: buyingSummary })
    }
    catch(error) {
        console.log("no");
        res.status(400).json({"error":error.message})
    }

}

const getBuyingSummariesByUserId =async  (req, res) => {
    const currentBuyingSummary=await BuyingSummary.find({userId:req.params.userId})
    try {
        console.log("yes");
        res.status(200).send( currentBuyingSummary )
    }
    catch(error) {
        console.log("no");
        res.status(400).json({"error":error.message})
    }

}

module.exports = { createBuyingSummary,
    getBuyingSummariesByUserId}
