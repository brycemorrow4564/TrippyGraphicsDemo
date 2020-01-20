
// const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function override(config, env) {

    if (!config.module) {
        config.module = {}; 
    }; 
    if (!config.module.rules) {
        config.module.rules = []; 
    }

    config.module.rules.push({
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
    });
    config.module.rules.push({
        test: /\.mp4$/,
        loader: 'url-loader?limit=10000&mimetype=video/mp4'
    }); 
    
    console.log(config); 

    return config;

}; 