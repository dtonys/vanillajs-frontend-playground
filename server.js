const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();

if ( process.env.NODE_ENV !== 'production' ) {
  // Dev and hot middleware for development
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.config.js')('development');
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
}

// Serve static files outside of webpack
app.use( express.static('public') );

// Serve prebuilt index.html
if ( process.env.NODE_ENV === 'production' ) {
  const indexHtml = fs.readFileSync( path.join(__dirname, 'public/dist/index.html'), 'utf8' );
  app.get('*', (req, res) => {
    res.send( indexHtml );
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000!\n');
});
