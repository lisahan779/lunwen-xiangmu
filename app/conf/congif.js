const mongoose = require('mongoose')
// 链接数据库
mongoose.connect('mongodb://localhost:27019/user', {
    useCreateIndex: true,
    useNewUrlParser: true
}, function (erro, success) {
    if (erro) {
        console.log("数据库连接失败")
    } else {
        console.log("数据库连接成功")
    }
})
module.exports=mongoose