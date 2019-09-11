const path = require('path');

module.exports = {
    mode: process.env.ENV === 'production' ? 'production' : 'development',
    target: 'node',
    entry: {
        test: './tests/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    }
};
