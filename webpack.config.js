var path = require('path');

module.exports = { 
    
    entry: [ path.resolve(__dirname, 'src', 'index.js') ],

    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },

    devtool: 'source-map',

    module: { 
        loaders: [ 
            { 
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    }
};
