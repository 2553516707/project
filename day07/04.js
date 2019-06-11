var express = require("express")
var art = require("express-art-template")//  集成包 
var app = express()
// 设置模板引擎
// engine  引擎     第一个参数 模板类型   html  ejs   art    
app.engine("art",art)
app.get("/",(req,res)=>{
    res.render("bar.art",{
        name:"232`12`2`12132313"
    })
})
app.listen(3000)
// express-art-template和art-template的区别
//    是否在express包含  art-template
// 如何渲染试图？
//  render


// provide   注入