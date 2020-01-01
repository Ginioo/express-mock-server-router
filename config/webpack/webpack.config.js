const path = require('path');
const projectRootPath = path.resolve(__dirname, '..', '..');

module.exports = {
    mode: process.env.ENV === 'production' ? 'production' : 'development',
    target: 'node',
    entry: {
        index: process.env.ENV === 'production'
            ? path.resolve(projectRootPath, 'src', 'index.js')
            : path.resolve(projectRootPath, 'sample', 'index.js'),
    },
    output: {
        path: process.env.ENV === 'production'
            ? path.resolve(projectRootPath, 'build')
            : path.resolve(projectRootPath, 'dev') ,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            src: path.resolve(projectRootPath, 'src')
        }
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
