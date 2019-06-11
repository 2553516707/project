var http = require("http");
var fs = require("fs")
var ejs = require("ejs")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charest:utf-8"})
    fs.readFile("./stact/list.ejs",(err,data)=>{
        if(err){
            throw err
        }
        var tem = data.toString();
        var result={
            list:["首页","新闻","关于"]
        }
        var newdata = ejs.render(tem,result)
        res.end(newdata)
    })
}).listen(3000)