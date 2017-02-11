let debug = process.env.NODE_ENV !== 'production';
let webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './js/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
    externals: {
        // Use external version of React
        'react': 'React',
        'react-dom': 'ReactDOM',
        'leaflet': 'L'
    }
};
