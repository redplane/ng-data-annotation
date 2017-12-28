module.exports = function(ngModule){
    require('./installation.controller')(ngModule);
    require('./installation.route')(ngModule);
}