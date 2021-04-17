const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  //   devltool: "none",
  //   make it more readable
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    // filename: "main.[contentHash].js",
    // by using contenthash, everytime it creates a new main.js with hashed name. the problem is that the previous file is not deleted, so we use plugins to do it
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
};
