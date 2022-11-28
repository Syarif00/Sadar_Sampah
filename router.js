const express = require("express");
const route = express.Router();
const accounts = require("./database")

//GET request
route.get('/accounts',(req,res)=>{
    res.json({data : accounts});
})

module.exports = route;