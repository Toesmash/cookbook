const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  return {
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.s?css$/, use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'] }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      })
    ],
    devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};
