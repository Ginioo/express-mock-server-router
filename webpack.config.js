const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    }
};
