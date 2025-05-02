const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            ['module-resolver', {
                                extensions: ['.js', '.jsx', '.ts', '.tsx']
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    mode: 'development'
};
