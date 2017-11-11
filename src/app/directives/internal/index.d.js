module.exports = function(ngModule){
    // Import navigation bar directive.
    require('./navigation-bar/navigation-bar.directive')(ngModule);
    require('./side-bar/side-bar.directive')(ngModule);
};