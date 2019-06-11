var express = require("express")
var app = express();
app.get(/^\/teacher\/([0-9]{6})$/,(req,res)=>{
    res.send("老师的工号"+req.params[0])
    // var d = req.params.id
    // if(d.length>6){
    //     res.send("没有工号为"+d)
    // }else{
    //     res.send("老师的工号"+req.params.id)
    // }
        
    
})
app.get("/student",(req,res)=>{
    res.send("学生")
})
app.get("/",(req,res)=>{
    res.send("首页")
})
app.listen(3000)