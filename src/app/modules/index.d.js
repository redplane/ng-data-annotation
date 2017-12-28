module.exports = function(ngModule){
    //#region Imports

    // Import modules routes.
    require('./tutorials')(ngModule);
    require('./installations')(ngModule);
    //#endregion
};