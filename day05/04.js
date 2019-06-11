var express = require("express")
// http.createServer
var app = express()
app.get("/aa",(req,res)=>{
    res.send("这是")
})
app.get("/bB",(req,res)=>{
    res.send({"dasa":"asda"})
})
app.listen(3000)