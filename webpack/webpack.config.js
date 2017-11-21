/**
 * Webpack setup based on survivejs book and demo repo
 * https://github.com/survivejs-demos/webpack-demo
 * https://survivejs.com/webpack/foreword/
 */

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const parts = require('./webpack.parts');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '..', 'src'),
  publicDist: path.resolve(__dirname, '..', 'public', 'dist'),
  node_modules: path.resolve(__dirname, '..', 'node_modules'),
  webpackCache: path.resolve(__dirname, 'cache'),
};

const commonConfig = webpackMerge([
  {
    target: 'web',
    output: {
      path: PATHS.publicDist,
      filename: '[name].js',
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
  },
  parts.loadFonts({
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),
]);

const productionConfig = webpackMerge([
  {
    // performance: {
    //   hints: 'warning', // 'error' or false are valid too
    //   maxEntrypointSize: 100000, // in bytes
    //   maxAssetSize: 450000, // in bytes
    // },
    output: {
      publicPath: '/dist/',
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js',
    },
    entry: {
      app: [
        'babel-polyfill',
        path.join( PATHS.src, 'app.js' ),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(
        [ PATHS.publicDist, PATHS.webpackCache ],
        { root: PATHS.root },
      ),
      new webpack.HashedModuleIdsPlugin(),
    ],
    recordsPath: path.join(__dirname, 'records.json' ),
  },
  parts.loadJavascript({
    include: PATHS.src,
    cacheDirectory: false,
  }),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
        // Run cssnano in safe mode to avoid
        // potentially unsafe transformations.
        safe: true,
      },
    },
  }),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
  parts.attachRevision(),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.extractSCSS({
    cssModules: true,
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash:8].[ext]',
    },
  }),
  {
    plugins: [
      new webpack.DefinePlugin({
        // Useful to reduce size of React lib in production
        // https://reactjs.org/docs/optimizing-performance.html#webpack
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  },
]);

const developmentConfig = webpackMerge([
  {
    output: {
      publicPath: '/',
    },
    entry: {
      app: [
        'babel-polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr',
        path.join( PATHS.src, 'app.js' ),
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  parts.loadJavascript({
    include: PATHS.src,
    cacheDirectory: PATHS.webpackCache,
  }),
  parts.generateSourceMaps({ type: 'eval' }),
  parts.loadSCSS({
    cssModules: true,
  }),
  parts.loadImages(),
]);


module.exports = ( env ) => {
  if ( env === 'production' ) {
    return webpackMerge( commonConfig, productionConfig );
  }
  return webpackMerge( commonConfig, developmentConfig );
};
