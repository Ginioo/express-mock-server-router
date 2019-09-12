const path = require('path');
const projectRootPath = path.resolve(__dirname, '..', '..');

module.exports = {
    mode: process.env.ENV === 'production' ? 'production' : 'development',
    target: 'node',
    entry: {
        test: path.resolve(projectRootPath, 'tests', 'index.js'),
    },
    output: {
        path: path.resolve(projectRootPath, 'build'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            src: path.resolve(projectRootPath, 'src')
        }
    }
};
