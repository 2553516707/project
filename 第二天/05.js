var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    // rename   修改文件名称
    if(req.url=="/favicon.ico"){
        return
    }
        //     oldpath  newpath  callback
    fs.rename('3.txt',"1.txt",(err)=>{
        if(err){
            throw err
        }
        console.log("改名成功")
        res.end("")
    })
}).listen(3000)