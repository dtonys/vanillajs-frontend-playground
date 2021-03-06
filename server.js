const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

if ( process.env.NODE_ENV !== 'production' ) {
  // Dev and hot middleware for development
  const historyApiFallback = require('connect-history-api-fallback');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack/webpack.config.js')('development');
  const webpackCompiler = webpack(webpackConfig);


  // HACK(@dtonys): Fix for repeated recompiles in dev mode
  // https://github.com/webpack/watchpack/issues/25#issuecomment-319292564
  const timefix = 11000;
  webpackCompiler.plugin('watch-run', (watching, callback) => {
    watching.startTime += timefix;
    callback();
  });
  webpackCompiler.plugin('done', (stats) => {
    stats.startTime -= timefix;
  });


  const devMiddlewareInstance = webpackDevMiddleware( webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
  });
  const hotMiddlewareInstance = webpackHotMiddleware( webpackCompiler, {
    path: '/__webpack_hmr',
  });
  app.use(historyApiFallback({
    verbose: false,
  }));
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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} !\n`);
});
