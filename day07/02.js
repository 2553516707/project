//  静态资源
//服务器端访问静态资源
var express = require("express")
var app = express()
console.log(__dirname)
//中间件
app.use(express.static("./login"))
app.listen(3000)