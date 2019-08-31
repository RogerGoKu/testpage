var path = require('path');
var webpack = require('webpack');
var libraryName = 'Vdom';
var myBanner = `
  my test
`;


module.exports = {
  entry: path.join(__dirname, 'src/enter.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "Vritual.js",
    publicPath: path.join(__dirname, 'dist'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
        new webpack.BannerPlugin(myBanner)
    ]
}