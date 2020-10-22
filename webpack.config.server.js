const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
    mode: 'development',
    name: 'server',
    entry: path.join(__dirname, './index.js'),
    target: 'node',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'server.generated.js',
        publicPath: '/dist',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()]
}

module.exports = config