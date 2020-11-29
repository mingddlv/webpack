const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: { // 出口配置
  	filename: 'js/[name].[contenthash:4].js',
  	path: path.resolve(__dirname, '../dist'),
  },
  mode: "development",
  plugins:[
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    })
  ]
}
