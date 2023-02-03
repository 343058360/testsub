const entryList = {
  // 'MyBtn': './components/MyBtn/index.js'
};
const glob = require("glob");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

async function redDir(dir) {
  const files = glob.sync(`${dir}/**/index.js`);
  files.forEach((item) => {
    console.log(item.split(/[/.]/), "---------");
    const component = item.split(/[/.]/)[1];
    entryList[component] = "./" + item;
  });
  console.log(files, "files");
  console.log(entryList, "entryList");
}
redDir("components");
console.log(path.join(__dirname, "./components/index.js"));
module.exports = {
  mode: "development",
  // entry: {
  //   Demo: "./components/Demo/index.js",
  // },
  entry: entryList,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].umd.js",
    library: "mui",
    libraryTarget: "umd",
  },
  resolve: {
    //  第一项空字符串必不可少，否则报模块错误
    // extensions: ["", ".es6"],
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ["vue-loader"] },
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: "style-loader" },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          // [sass-loader](/loaders/sass-loader)
          // { loader: "less-loader" },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
