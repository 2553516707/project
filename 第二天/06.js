var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    // stats   查看文件信息
    if(req.url=="/favicon.ico"){
        return
    }
    fs.stat('../第二天',(err,stats)=>{
        if(err){
            throw err
        }
        console.log(stats.isFile()) //是非是文件
        console.log(stats.isDirectory()) // 是否是目录
        res.end()
    })
}).listen(3000)