const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: "http://m.maoyan.com",
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    })
  );
app.use(proxy('/aaa', { 
  target: "http://106.13.168.95:8888/777", // 热映服务器代理
  secure: false,
  changeOrigin: true,
  pathRewrite: {
   "^/aaa": "/"
  },})
 
  );
};