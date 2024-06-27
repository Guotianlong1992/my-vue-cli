// 开发环境
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('development')
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // 指定应用将被托管的目录，相对路径或据对路径都可
    // contentBase: path.join(__dirname, 'dist'),
    // 自定义端口号
    // prot: 7000,
    // 自动打开浏览器
    hot: true,
    open: true
  }
})