var newIn = require("./in.js")
var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url=="/"){
        newIn.showIndex(req,res)
    }else if(req.url=="/about"){
        newIn.showAbout(req,res)
    }else if(req.url=="/new"){
        newIn.showNew(req,res)
    }else{
        newIn.show404(req,res)
    }
    res.end("")
    
}).listen(3000)