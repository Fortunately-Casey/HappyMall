const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件（根文件）
  entry: './src/app.js',
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'] 简写
            presets: ['env']
          }
        }
      }
    ]
  },
  // 自定义html模板
  plugins: [new HtmlWebpackPlugin({
    template:'./src/index.html'
  })],
};
