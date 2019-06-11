var events = require("events")
//  实例事件
var eventEmitter = new events.EventEmitter()
//  绑定事件
// eventEmitter.on("start",()=>{
//     console.log("event start")
// })
//  触发event事件
// eventEmitter.emit("start")
// 触发一次事件
// eventEmitter.once("start",()=>{
//     console.log("start")
// })
// eventEmitter.emit("start")
// 添加错误事件
// eventEmitter.once("error",()=>{
//     console.log("error")
// })
// eventEmitter.emit("error",new Error("focus error"))
// eventEmitter.emit("error",new Error("错"))
// 添加     addListener     添加到尾部
function six(){
    console.log("666")
}
function two(){ 
    console.log("777")
}
//              aa  自定义事件  six 函数执行体
eventEmitter.on("aa",six)
eventEmitter.on("aa",two)
// removeAllListener    移除所有事件监听器
eventEmitter.removeListener("aa",six)
//      自定义事件触发器
eventEmitter.emit("aa")

