var path = require("path")
var http = require("http");
http.createServer((req,res)=>{
    //path  处理文件的路径
    // var newpath = path.resolve("./a////b/c//")
    //作用：解析成正确的路径    绝对路径    ("./a/b/c")
    // normalize    标准化路径
    /*
        1.如果有多个斜杠则会替换成一个
        2.会保留最后一个斜杠
        3.注意..和.(..返回上一级)
    */
    // var newpath = path.normalize("./a///b/.")
    // join 合并成一个标准化的路径
    /*
        1.合并成一个标准化的路径
        2.注意..和.
        3.参数必须是字符串
    */
    // var newpath = path.join("/a","b","f/g","..")
    //  dirname 返回一个路径的目录
    // var newpath = path.dirname("/a/b/c")
    // basename 返回路径中最低级目录名称
    // var newpath = path.basename("/a/b/c")
    // extname    扩展名
    // var newpath = path.extname("1.txt")
    console.log(newpath)
    res.end("")
}).listen(3000)