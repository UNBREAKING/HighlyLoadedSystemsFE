const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/sign-in": "http://localhost:8001",
      "/sign-out": "http://localhost:8001",
      "/sign-up": "http://localhost:8001",
      "/place/*": "http://localhost:8001",
      "/profile": "http://localhost:8001",
      "/profile/*": "http://localhost:8001",
      "/event/*": "http://localhost:8001",
      "/comment/*": "http://localhost:8001"
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};