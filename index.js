const express=require('express')
var bodyParser=require("body-parser")
const app=express()
require('./model/config')
app.use(bodyParser.json())
const router=require('./routes/userRoutes')



app.get('/',(req,res)=>{
    res.send("Welcome in Node.js World")
})


app.use('/',router)


app.listen(9000,(req,res)=>{
    console.log("Server is running on port no:9000");
})