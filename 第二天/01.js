//require.js    common.js   sea.js
var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{

    //  readFile   读文件   异步    readFileSync    同步
    // fs.readFile("./1.txt",(err,data)=>{
    //     console.log(data.toString())
    //     res.end(data.toString())
    // })
    //  writeFile   写入
    //  r   read    读
    //  w   write   写
    //  a   append  追加
    //  flag
    // fs.writeFile("./2.txt","写入的内容",(err)=>{
    //     console.log("写入成功")
    //     res.end("")
    // })

    // if(req.url=="/favicon.ico"){
    //     return
    // }
    // fs.readFile("./1.txt",(err,data)=>{
    //     fs.writeFile("./2.txt","lllll",{"flag":"a"},(err)=>{
    //         if(err){
    //             return
    //         }
    //         console.log("写入成功")
    //         res.end("")
    //     })
    // })

}).listen(3000)