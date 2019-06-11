var http = require("http")
var ejs = require("ejs")
http.createServer((req,res)=>{  
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // ejs  渲染的方式   compile  编译    render   渲染
    // <%=%>    
    var data = [num=23]
    var str = "我今年<%=num%>"
    var result = ejs.render(str,data)
    res.end(result)
}).listen(3000)