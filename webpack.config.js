const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: './dist/styles.css',
    disable: process.env.NODE_ENV === 'development',
});

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: 'css-loader',
                    }, {
                        loader: 'postcss-loader',
                        options: { config: { path: './postcss.config.js' } },
                    }, {
                        loader: 'less-loader',
                    }],
                    fallback: 'style-loader',
                }),
            }],
    },
    plugins: [
        extractLess,
    ],
};
