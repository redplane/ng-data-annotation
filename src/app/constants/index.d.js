module.exports = function(ngModule){
    // Import constants.
    require('./appSettings')(ngModule);
    require('./url-state.constant')(ngModule);
};