const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'cheap-module-eval-source-map',

  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './app/index',
    './styles/main',
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
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&imagePath=/img&includePaths[]=' +
        path.resolve(__dirname, './css'),
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
