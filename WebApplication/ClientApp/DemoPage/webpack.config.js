const path = require('path');

module.exports = {
    mode: 'production',
    entry: './output/index.js',
    output: {
        filename: 'js/DemoPage/index.js',
        path: path.resolve(__dirname, '../../wwwroot'),
    },
};