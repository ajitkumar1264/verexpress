const { request } = require('express')
const express=require('express')
const app = express()

app.get("/",(req,res)=>{
    res.json({"message":"successfully deployed server in vercel"})
})

app.get("/ajx",(req,res)=>{
    res.json({"message":"hello vaghela how are you ?"})
})


app.listen(4000,()=>{
    console.log("the server listening on port no 4000")
})