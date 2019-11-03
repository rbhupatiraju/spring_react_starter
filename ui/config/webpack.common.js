const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("../package.json");
const ASSET_PATH = process.env.ASSET_PATH || "./";
const VERSION =packageJson.version;
module.exports = {
    resolveLoader: {
        extensions: [".js", ",jsx"],
        modules: [
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(otf|eot|svg|tff|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=8192&name=fonts/[name].[ext]"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=8192&name=images/[name].[ext]"
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|war)/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|war)/,
                use: ["babel-loader"]
            },
            {
                test: /\.css?$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader",
                    publicPath: "../"
                })
            },
            {
                test: /\.less?$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader",
                    publicPath: "../"
                })
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Spring + React Starter - UI",
            template: path.resolve(__dirname, "../source/index.html"),
            publicPath: ASSET_PATH,
            chunkSortMode: "dependency"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            chunks: ["app"],
            minChunks: module => /node_modules/.test(module.resource)
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: "defer"
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /momemt$/),
        new ExtractTextPlugin(`css/[name]_${VERSION}.css`),
        new webpack.WatchIgnorePlugin([
            path.resolve(__dirname, "../war")
        ])
    ],
    externals: {
        // "Config" :
    }
};

