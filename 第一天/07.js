var http = require("http");
http.createServer((req,res)=>{
    res.write("231223");
    res.write("<h1>wwww</h1>")
    res.end("")
}).listen(3000)