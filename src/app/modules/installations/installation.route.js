'use strict';

module.exports = function(ngModule){

    // Import app html template.
    var ngModuleTemplate = require('./installation.html');

    /*
    * Route configuration
    * */
    ngModule.config(function ($stateProvider, urlStates) {
        // State declaration.
        $stateProvider.state(urlStates.installation.name,{
            url: urlStates.installation.url,
            controller: 'installationController',
            template: ngModuleTemplate
        });
    });
};