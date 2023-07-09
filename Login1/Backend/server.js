const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")

var cors = require('cors');

const app = express()

app.use(bodyParser.json())

app.use(cors());


//connect to mongoDB database userDB
mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser:true, 
    useUnifiedTopology: true,
})

//creating schema for the collection
const userSchema = new mongoose.Schema({
    name : String,
    pass : String,
})

//creating a collection with given schema
const formEntry = mongoose.model('userDetail',  userSchema)

const newFormEntry = new formEntry({name : "anand", pass : "321"})

//newFormEntry.save()


app.get("/", (req , res) => {
    res.send("<h1>Welcome to server Home Page</h1>")
})

app.post("/form", (req , res) => {
    const {name, pass} = req.body
    console.log(name + "and" + pass)
    

    const newUser = new formEntry({name : name, pass : pass})

    newUser.save()

    
})

app.listen("3500", () => {
    console.log("server started at port 3500")
})