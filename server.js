const express = require("express");
const app = express();
const route = require("./router")
const mongoose = require("mongoose")
const cors = require("cors")

route.use(cors())
route.use(express.json())
route.use(express.urlencoded())

const port = 3000;



app.set('view engine', 'ejs');

app.get('/login', (req,res) =>{
    res.render('pages/login')
})
app.get('/pendaftaran', (req,res) =>{
    res.render('pages/signup')
})


app.get('/', (req,res)=>{
    res.render('pages/home')
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




mongoose.connect("mongodb+srv://dbUser:SIB2022@cluster0.ozm6jrq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)


app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/pendaftaran", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})