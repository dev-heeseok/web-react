const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("setProxy : proxy component")
  app.use(
    createProxyMiddleware('/app', {
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};