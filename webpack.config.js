const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // output: {
    //     filename: 'app.bundle.js',
    //     path: path.resolve(__dirname, 'result'),
    // },
    module: {
        rules: [
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
plugins: 
[
    new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }
    ),
    new MiniCSSExtractPlugin()
]
}