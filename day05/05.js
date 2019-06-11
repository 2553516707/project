var express = require("express")
var app = express()
app.get("/list/:id",(req,res)=>{
    res.send("id为"+req.params.id)
})
app.listen(3000)
// 模块引擎     express
// 路由
// 中间件