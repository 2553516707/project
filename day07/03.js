var express = require("express")
var app = express()
// 模板引擎  ejs   aart-template
// engine
/*
1.目录要求  views
2.项目中的配置
*/
// 告诉服务器使用什么引擎
// set  设置
// 设置项目的模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    // reader  渲染 compile  编译
    res.render("index",{
        result:"2131"
    })
})
app.listen(3000)