const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'static'),
};

module.exports = {
  entry: path.join( PATHS.src, 'app.js' ),
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.src + '/index.html',
    })
  ],
};