const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'cheap-module-eval-source-map',

  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './app/index',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/generated'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    root: [
      path.join(__dirname, 'app/'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};

module.exports = config;
