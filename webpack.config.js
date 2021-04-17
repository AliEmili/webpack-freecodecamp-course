const path = require("path");
module.exports = {
  mode: "development",
  //   devltool: "none",
  //   make it more readable
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
