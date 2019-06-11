var http = require('http')
var url = require("url")
var fs = require("fs")
var path = require("path")
var sd = require("silly-datetime")
// 处理form表单
var fd = require("formidable");
http.createServer((req,res)=>{
    
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url=="/dopost" && req.method.toLowerCase()=="post"){
        var form = new fd()
        form.uploadDir = "./tu"
        form.parse(req,(err,fields,files)=>{
            // console.log(fields)     //{}    文本域
            // console.log(files)      //{}    文件域
            // console.log(fields.pic)
            // 获取后缀名
            var extname = path.extname(files.pic.name)
            // 获取路径
            var oldpath = files.pic.path
            var tt = sd.format(new Date(),"YYYYMMDDhhmmss")
            var newpath = "./tu/"+tt+extname;
            fs.rename(oldpath,newpath,(err)=>{
                if(err){
                    throw err
                }
                console.log("改名成功")
                res.end("")
            })
            res.writeHead(200, {'content-type': 'text/plain'});
        })
    }
}).listen(3000)
