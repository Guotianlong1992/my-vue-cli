module.exports = {
  presets: [
    // 配置规则
    "@babel/preset-env",
    // 支持vue中的jsx语法
    "@vue/babel-preset-jsx"
  ],
  // 配置插件
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
}