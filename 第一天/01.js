//加载htpp（服务）模块
var http = require("http");
// createServer 创建服务器 callback
http.createServer((req,res)=>{
    // reg request 请求  res  response 响应
    console.log("hello word")
    // 设置请求头  状态码  文本类型  text/html  编码  chartset utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // 结束响应
    res.end("结束")
}).listen(3000)
// 监听端口