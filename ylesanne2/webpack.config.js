const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
              loader: MiniCssExtractPlugin.loader,
            }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" 
      },
      {
        test:  /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
      template: "./src/index.html"
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false,
  }),
],
};