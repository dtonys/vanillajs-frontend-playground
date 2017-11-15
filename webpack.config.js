const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public'),
  node_modules: path.join(__dirname, 'node_modules'),
};

const commonConfig = {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      path.join( PATHS.src, 'app.js' ),
    ],
  },
  output: {
    path: PATHS.public,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [ 'babel-loader' ],
        use: {
          loader: 'babel-loader',
          query: {
            babelrc: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.src + '/index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: [
      PATHS.node_modules,
      PATHS.src,
    ],
  },
  resolveLoader: {},
};
const productionConfig = () => commonConfig;
const developmentConfig = () => commonConfig;


module.exports = ( env ) => {
  if ( env === 'production' ) {
    return productionConfig();
  }
  return developmentConfig();
};
