# syman-pc

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
<!-- 注意 -->
第一次拉取会报node-sass的错 需要重新npm一下相应的包就好了命令如下：
npm install node-sass --save

Linux 下 node-sass 安装不上
sudo npm install node-sass --unsafe-perm --save-dev

进程守护启动当前项目
pm2 start npm -- run start

打包文件如下
.nuxt 
static
nuxt.config.js
server.js

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
