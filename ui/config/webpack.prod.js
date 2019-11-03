const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "./";
const OUTPUT_PATH = process.env.OUTPUT_PATH || "../../src/main/resources/static";
const packageJson = require("../package.json");
const VERSION = packageJson.version;

module.exports = webpackMerge(commonConfig, {
    entry: {
        app: [
            "babel-polyfill",
            "whatwg-fetch",
            path.resolve(__dirname, "../source/index")
        ]
    },
    output: {
        path: path.resolve(__dirname, OUTPUT_PATH),
        publicPath: ASSET_PATH,
        filename: `js/[name]_${VERSION}.bundle.js`,
        chunkFilename: `js/[id]_${VERSION}.chunk.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Spring + React Starter - UI",
            template: path.resolve(__dirname, "../source/index.html"),
            publicPath: ASSET_PATH,
            chunkSortMode: "dependency",
            version: VERSION,
            inject: false
        }),
        new CleanWebpackPlugin(["css", "fonts", "js", "index.html"], {
            root: path.resolve(__dirname, OUTPUT_PATH),
            verbose: true,
            dry: false,
            watch: false,
            exclude: []
        }),
        new webpack.DefinePlugin({
            "ENV": JSON.stringify("production")
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
});