const express = require("express");
const app = express();

const route = require("./router")

const port = 3000;

app.use(express.static('public'))

app.use('/api', route)

app.get('/routing',(req,res)=>{
    res.end("Routing App");
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})