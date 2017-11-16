const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const parts = require('./webpack.parts');

const PATHS = {
  src: path.join(__dirname, 'src'),
  publicDist: path.join(__dirname, 'public', 'dist'),
  node_modules: path.join(__dirname, 'node_modules'),
};

const commonConfig = webpackMerge([
  {
    output: {
      path: PATHS.publicDist,
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.src + '/index.html',
      }),
      new webpack.NamedModulesPlugin(),
    ],
    resolve: {
      modules: [
        PATHS.node_modules,
        PATHS.src,
      ],
    },
    resolveLoader: {},
  },
  parts.loadJavascript({ include: PATHS.src }),
]);

// const CleanWebpackPlugin = require('clean-webpack-plugin');
const productionConfig = webpackMerge([
  {
    output: {
      publicPath: '/dist/',
    },
    entry: {
      app: [
        path.join( PATHS.src, 'app.js' ),
      ],
    },
  },
  parts.extractSCSS({}),
]);

const developmentConfig = webpackMerge([
  {
    output: {
      publicPath: '/',
    },
    entry: {
      app: [
        'webpack-hot-middleware/client?path=/__webpack_hmr',
        path.join( PATHS.src, 'app.js' ),
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  parts.loadSCSS({}),
]);


module.exports = ( env ) => {
  if ( env === 'production' ) {
    return webpackMerge( commonConfig, productionConfig );
  }
  return webpackMerge( commonConfig, developmentConfig );
};
