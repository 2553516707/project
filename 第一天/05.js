var http = require("http");
var url  =require("url");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    var newurl = url.parse(req.url,true).query
    console.log(newurl)
    if(newurl.username=="卢"&&newurl.password=="123"){
        res.end("登陆成功")
    }else{
        res.end("登陆失败")
    }
    
}).listen(3000)