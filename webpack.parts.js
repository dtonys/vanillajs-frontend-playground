const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.loadJavascript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            // Enable caching for improved performance during
            // development.
            // It uses default OS directory by default. If you need
            // something more custom, pass a path to it.
            // I.e., { cacheDirectory: '<path>' }
            cacheDirectory: true,
          },
        },
      },
    ],
  },
});

exports.loadSCSS = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
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
          {
            loader: 'fast-sass-loader',
          },
        ],
      },
    ],
  },
});

const extractCss = new ExtractTextPlugin({
  filename: '[name].css',
  allChunks: false,
});
exports.extractSCSS = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        use: extractCss.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]',
              },
            },
            {
              loader: 'fast-sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    extractCss,
  ],
});

