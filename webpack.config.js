const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'microfrontend-common-ui',
        libraryTarget: 'umd',
    },
   externals: {
        classnames: 'classnames',
        react: 'react',
        'prop-types': 'prop-types',
        'css-loader' : {
            commonjs: 'css-loader',
        }
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    /*plugins: [
        new BundleAnalyzerPlugin()
    ]*/
};