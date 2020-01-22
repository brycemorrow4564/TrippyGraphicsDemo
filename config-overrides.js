

module.exports = function override(config, env) {

    // Allow for loading of local video assets 
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

    return config;

}; 
