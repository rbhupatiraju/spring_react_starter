const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");
const ASSET_PATH = process.env.ASSET_PATH || "/"+packageJson.scripts.start.split(' ')[2];
const VERSION = packageJson.version;

module.exports = webpackMerge(commonConfig, {
    entry: {
        app: [
            "webpack-hot-middleware/client",
            "babel-polyfill",
            "react-hot-loader/patch",
            "whatwg-fetch",
            path.resolve(__dirname, "../source/index")
        ]
    },
    devtool: "cheap-module-eval-source-map",
    output: {
        path: path.resolve(__dirname, "../war"),
        publicPath: ASSET_PATH,
        filename: `js/[name]_${VERSION}.bundle.js`,
        sourceMapFilename: `js/[name]_${VERSION}.bundle.map`,
        chunkFilename: `js/[id]_${VERSION}.chunk.js`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "ENV": JSON.stringify("development")
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
});