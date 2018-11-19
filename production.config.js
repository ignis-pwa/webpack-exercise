const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const package = require('./package.json');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/javascript/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      title: package.description,
      packageVer: package.version
    })
  ]
}