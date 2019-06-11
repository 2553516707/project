// 目录
var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    // 创建目录
    // fs.mkdir("./public",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log("创建成功")
    //     res.end("")
    // })
    // 删除目录
    // fs.rmdir("./public",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log("删除成功")
    //     res.end("")
    // })
    // 读取目录
    fs.readdir("../第二天",(err,data)=>{
        if(err){
            throw err
        }
        console.log(data)
        res.end("")
    })
}).listen(3000)