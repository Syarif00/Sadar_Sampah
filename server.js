const express = require("express");
const app = express();

const route = require("./router")

const port = 3000;



app.set('view engine', 'ejs');

app.get('/login', (req,res)=>{
    res.render('pages/login')
})

app.get('/', (req,res)=>{
    res.render('pages/home')
})

app.get('/pendaftaran', (req,res)=>{
    res.render('pages/signup')
})

app.get('/perpustakaan', (req,res)=>{
    res.render('pages/library')
})

app.get('/peta', (req,res)=>{
    res.render('pages/maps')
}) 

app.get('/tentang-kami', (req,res)=>{
    res.render('pages/about')
}) 

app.get('/detail', (req,res)=>{
    res.render('pages/detail')
}) 

app.use('/api', route)

app.get('/routing',(req,res)=>{
    res.end("Routing App");
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})