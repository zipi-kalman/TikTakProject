const User = require('../models/user');
const Products = require('../models/product');



const createProducts = async (req, res) => {
    console.log("f");
    let newproduct = new Products({
        name: req.body.name,
        price: req.body.price,
        amount:1,
        image: req.body.image,
        category:req.body.category,
    })
    try {
        let product = await newproduct.save();
        console.log("save");
        res.status(200).json({ massage: 'product created', newproduct: newproduct })
    }
    catch (error) {

        res.status(200).send("product error"+error)
    }
}
const getProducts = async (req, res) => {
    try {
        let allproducts = await Products.find()
        
        res.status(200).send( allproducts)
    } catch (err) {
        res.status(400).send(err.message+"ggg")
    }
};



module.exports ={
    
    getProducts,
    createProducts
}