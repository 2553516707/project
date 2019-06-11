var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    fs.readdir("./wen",(err,data)=>{
        if(err){
            throw err
        }
        for(let i = 0;i<data.length;i++){
            fs.stat('./wen/'+data[i],(err,stats)=>{
                if(stats.isDirectory()){
                    console.log(data[i])
                }
            })
            
        }
    })
    
    // function test(num){
       
    //     fs.readdir("./wen",(err,data)=>{
    //         // if(num==data.length-1){
    //         //     res.end("")
    //         // }
    //         if(err){
    //             throw err
    //         }
    //         fs.stat("./wen/"+data[num],(err,stats)=>{
    //             if(stats.isDirectory()){
    //                 console.log(data[num])
    //             }
    //         })
    //         // test(++num)
           
    //     })
        
    // }
    // test(1)
    

}).listen(3000)