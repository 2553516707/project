var http = require("http");
http.createServer((req,res)=>{
   
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write("<h1>wwww</h1>")
    res.end("结束")
}).listen(3000)