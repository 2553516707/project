var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    // watchfile    监听文件的改变  unwatchFile 监听文件的卸载
    if(req.url=="/favicon.ico"){
        return
    }
    fs.watchFile('1.txt',(curr,prev)=>{
        console.log(curr.mtime)
        console.log(prev.mtime)
        res.end("")
    })
    fs.writeFile("1.txt","changed",(err)=>{
        if(err){
            throw err
        }
    })
}).listen(3000)