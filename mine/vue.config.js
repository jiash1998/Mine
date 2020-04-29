module.exports = {
  devServer: {
    port: 8081,
    open: false,
    proxy: {
      "/apis": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true, //创建一个虚拟服务器，
        pathRewrite: {
          "^/apis": "" //通配符
        }
      },
    },
  },
};