const path = require('path');

module.exports = {
    mode: 'production',
    entry: './output/index.js',
    output: {
        filename: 'js/DemoPage2/index.js',
        path: path.resolve(__dirname, '../WebApplication/wwwroot'),
    },
    devtool: "source-map",
    module: {
        rules: [

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
