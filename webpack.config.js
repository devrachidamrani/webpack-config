let mode = 'development'
let target = 'web'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
}

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: mode,
  target: target,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
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
