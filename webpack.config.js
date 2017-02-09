const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'stylus-loader',
      },

      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  devServer: { historyApiFallback: true },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ],
}
