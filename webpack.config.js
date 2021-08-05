let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  devtool: 'source-map',
  plugins: [new MiniCSSExtractPlugin()],
}
