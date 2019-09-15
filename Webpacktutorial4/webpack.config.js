const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js',
        libs: ['lodash']
    },

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'libs'
        })
    ]
}