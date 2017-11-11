'use strict';

module.exports = function (ngModule) {

    // Import app template.
    var ngModuleTemplate = require('./text-property-compares.html');

    // Module configuration.
    ngModule.config(function ($stateProvider, urlStates) {
        $stateProvider.state(urlStates.ngTextPropertyCompare.name, {
            url: urlStates.ngTextPropertyCompare.url,
            template: ngModuleTemplate,
            controller: 'TextPropertiesCompareTutorialController'
        });
    });
};