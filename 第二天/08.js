// module.exports   exports     暴露    抛出
var bar = require("./bar.js")
console.log(bar)
/*
module.exports和exports的区别：
    1.exports=module.exports    exports引用了module.exports的值
    2.module.exports 指向的是一个当前模块
    3.module.exports 的默认值是一个实际对象，而exports的默认值为空对象
*/