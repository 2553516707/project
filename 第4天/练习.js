var events = require("events")
// 实例事件
var eventEmitter = new events.EventEmitter;
// 绑定事件
// eventEmitter.on("ll",()=>{
//     console.log("ll")
// })
// 触发event事件
// eventEmitter.emit("ll")
// eventEmitter.emit("ll")
// 触发 一次事件
// eventEmitter.once("ll",()=>{
//     console.log("ll")
// })
// eventEmitter.once("error",()=>{
//     console.log("error")
// })
// eventEmitter.emit("error",new Error("错误"))
// eventEmitter.emit("error",new Error("错"))
// 添加     addListener     添加到尾部
// function a(){
//     console.log(1111)
// }
// function b(){
//     console.log(2222)
// }
// eventEmitter.on("aa",a)
// eventEmitter.on("aa",b)
// eventEmitter.removeListener("aa",b)
// eventEmitter.removeAllListeners("aa")    移除所有事件监听
// eventEmitter.emit('aa')      自定义事件触发器


