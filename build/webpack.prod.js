// 生产环境
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const webpack = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('production')
        }
      }
    }),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), //去重压缩css
      new TerserPlugin({ //压缩js代码
        terserOptions: {
          compress: {
            drop_console: true, //去除console
          }
        }
      })
    ]
  }
})