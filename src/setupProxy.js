const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v2/shorten', {
      target: "https://api.shrtco.de",
      changeOrigin: true,
    }),
  );
};