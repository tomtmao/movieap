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
};