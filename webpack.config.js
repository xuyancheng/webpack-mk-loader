const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/app.js',
  output:{
      path:path.resolve(__dirname,'./dist'),
      filename:'js/bundle.js'
  },
  module:{
     rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname,'src'),
        // exclude: path.resolve(__dirname,'node_modules')s
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { 
            loader: 'url-loader',       
            options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                name: '[name].[ext]',
                limit:5000, // 表示小于50kb的图片转为base64,大于50kb的是路径
                outputPath:'images' //定义输出的图片文件夹
            }
          },
        ],
    
        include: path.resolve(__dirname,'src'),
        // exclude: path.resolve(__dirname,'node_modules')s

      },
      {
        test: /\.html$/,
        use: 'html-loader',
        // include: path.resolve(__dirname,'src'),
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.tpl$/,
        use: 'ejs-loader',
        // include: path.resolve(__dirname,'src'),
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.css$/,
        use: [
         'style-loader',
          {
            loader:'css-loader',
            options: {
                importLoaders: 1
            }
          },
          'postcss-loader',
        ],
        // include: path.resolve(__dirname,'src'),
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.less$/,
        use: [
         'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
        // include: path.resolve(__dirname,'src'),
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.sass$/,
        use: [
         'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        // include: path.resolve(__dirname,'src'),
        exclude: path.resolve(__dirname,'node_modules')

      },
    ],
  },

  plugins:[
    new htmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      inject:'body'
    })
    
  ]
}