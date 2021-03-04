const {
  Nuxt,
  Builder
} = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000

let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)


app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "http://www.oneretail.cn");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  next()
})

app.use(nuxt.render)
// 在开发模式下进行编译
// if (config.dev) {
//   new Builder(nuxt).build()
// }

// 监听指定端口
app.listen(port, '0.0.0.0')
console.log('服务器运行于 localhost:' + port)
