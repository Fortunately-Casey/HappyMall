const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //入口文件（根文件）
  entry: './src/app.jsx',
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'js/app.js'
  },
  // 加载器
  module: {
    rules: [
      // react 语法的处理
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'] 
            presets: ['env', 'react']
          }
        }
      },
      //css语法的处理
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({ // 它将*.css条目块中的所有必需模块移动到单独的CSS文件中
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      //sass语法的处理
      {
        test: /\.scss$/i,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      // 图片的配置
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name:'resource/[name].[ext]'
          },
        }, ],
      },
      // 字体图标的配置
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8192,
            name:'resource/[name].[ext]'
          },
        }, ],
      },
    ]
  },
  // 自定义html模板
  plugins: [
    // 处理html文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 独立css文件
    new ExtractTextPlugin("css/[name].css"),
    // 提出公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename:'js/base.js'
    })
  ],
  devServer: {
    port:8086
  }
};
