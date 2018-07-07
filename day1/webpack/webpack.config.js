const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/app.js",//File that transform will happen from by Webpack
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}
