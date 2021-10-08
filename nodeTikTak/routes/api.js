const router=require('express').Router();
const products= require('../controller/productsController')
const user=require('../controller/userController')
const shoppingCart=require('../controller/buyingSummary')
const checkAuth=require('../controller/checkAuthController')


// user
router.get('/login/:email/:password',user.login)
router.post('/register',user.register)

// buyingSummary
router.post('/createBuyingSummary',shoppingCart.createBuyingSummary)
router.get('/buyingSummariesDisplay/:userId',checkAuth.checkAuth,shoppingCart.getBuyingSummariesByUserId)

// products
router.post('/createProducts',products.createProducts)
router.get('/getProducts',products.getProducts)



module.exports =router;