const express = require("express");
const route = express.Router();
const accounts = require("./database")
const articles = require("./article")


//GET request
route.get('/accounts',(req,res)=>{
    res.json({data : accounts});
})

route.get('/articles', (req,res)=>{
    res.json({article : articles })
})


module.exports = route;