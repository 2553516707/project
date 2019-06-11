var express = require("express")
var app = express();
// var router = require("express-router")()
var router = express.Router()
// 使用路由中间件
app.use(router)
router.get("/vericode",(req,res)=>{
    var randomNum = function(min,max){
        return Math.ceil(Math.random()*(max-min)-min)
    }
    var str = "1234567890zxcvbnmlkjhgfdsaqwrtyuiop"
    var newStr = "";
    for(var i  = 0;i < 4;i++){
        newStr+=str[randomNum(0,str.length-1)]
    }
    res.send({"success":"ok","data":newStr})
})
app.listen(3000)