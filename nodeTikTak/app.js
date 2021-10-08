const express=require('express');
const app=express();
const dotenv=require('dotenv');
const routes=require('./routes/api')

const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const request = require('request');

dotenv.config();

app.use(bodyParser.json());

app.use(routes);
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, authorization, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


const connectionParams={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.DB_CONNECT,connectionParams)
    .then(() => {
        console.log('Connected')
    })
    .catch((err) => {
        console.log(`error connecting${err}`)
    })
    
  
     
    
      



  app.listen(5000,function(req,res){
    console.log('listening')
});
