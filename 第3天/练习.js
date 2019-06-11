var http = require("http")
var fs = require("fs")
var url = require("url")
var path = require('path')  //处理文件的路径
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    if(req.url=="/favicon.ico"){
        return
    }
    // fs.readFile("1.txt",(err,data)=>{
    //     console.log(data.toString())
    // })
    // fs.writeFile("1.txt","就是，好傻",{"flag":"a"},(err)=>{
    //     console.log("ok")
    // })
    // fs.unlink("1.txt",(err)=>{
    //     console.log("删除")
    // })
    // fs.mkdir("1.txt",(err)=>{
    //     console.log("ok")
    // })
    // fs.rmdir("1.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log("ok")
    // })
    // fs.readdir('../第3天',(err,data)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log(data)
    //     res.end("")
    // })
    // fs.watchFile('1.txt',(curr,prev)=>{
    //     console.log(curr.mtime)
    //     console.log(prev.mtime)
    //     res.end("")
    // })
    // fs.writeFile("1.txt","ch",(err)=>{
    // })
    // var data = url.resolve('http://127.0.0.1:3000',"/first")
    // console.log(data)
    // var data = url.format({
    //     protocol:'http',
    //     host:'127.0.0.1/first',
    //     port:'3000'
    // })
    // console.log(data)
    // res.write("23132")
    // res.write("<h1>wdasd</h1>")
    // path 处理文件的路径
    var newpath = path.extname("1.txt")
    console.log(newpath)
    res.end("")
}).listen(3000)