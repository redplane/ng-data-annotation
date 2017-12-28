module.exports = function(ngModule){
    // Import constants.
    require('./app-settings')(ngModule);
    require('./url-state.constant')(ngModule);
};