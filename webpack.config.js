const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
      ]
    },
    devtool: argv.mode === 'production' ? false : 'inline-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};