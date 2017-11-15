const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('./webpack.config.js')();
const webpackCompiler = webpack(webpackConfig);

const devMiddlewareInstance = webpackDevMiddleware( webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
});
const hotMiddlewareInstance = webpackHotMiddleware( webpackCompiler, {
  path: '/__webpack_hmr',
});

// Attach dev middleware
app.use(devMiddlewareInstance);
// Attach hot middleware
app.use(hotMiddlewareInstance);
// Serve static files outside of webpack
app.use( express.static('public') );

app.listen(3000, () => {
  console.log('Server listening on port 3000!\n');
});
