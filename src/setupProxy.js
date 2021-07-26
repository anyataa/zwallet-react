const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // ...

  const { createProxyMiddleware } = require("http-proxy-middleware");

  module.exports = function (app) {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:8080/zwallet-api/account/1",
        changeOrigin: true,
      })
    );
  };
};
