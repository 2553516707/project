// npm
var bar = require("bar")
var int = require("int")
var http = require("http")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    console.log(bar)
    console.log(int)
    res.end("")
}).listen(3000)
