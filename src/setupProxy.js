const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware(
    '/api', {
      target: 'http://www.angelive.fun/api',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    }
  ));
  app.use(createProxyMiddleware(
    '/imgPath', {
      target: 'http://cdn.angelive.fun',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/imgPath": "/"
      }
    }
  ));
};