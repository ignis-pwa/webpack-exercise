const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const package = require('./package.json');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/javascript/index.js"),
  output: {
    path: path.resolve(__dirname, "dev-build"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      title: `DEV: ${package.description}`,
      packageVer: `D-${package.version}`
    })
  ]
}