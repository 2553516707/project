var http = require("http")
var art = require("art-template")
var fs = require("fs")
http.createServer((req,res)=>{  
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var newdata = {
        list:["首页","新闻","关于"]
    }
    fs.readFile("./stact/list.art",(err,data)=>{
        if(err){
            throw err
        }
        var result =art.render(data.toString(),newdata)
        res.end(result)
    })
    
}).listen(3000)