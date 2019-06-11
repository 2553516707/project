var http = require("http")
var server = http.createServer((req,res)=>{
    // console.log(req)
    // console.log(res)
    res.end((1+2+3).toString())
})
server.listen(3000,()=>{
    console.log("端口以挂载")
})