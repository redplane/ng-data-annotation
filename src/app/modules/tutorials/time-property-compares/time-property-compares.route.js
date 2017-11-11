'use strict';

module.exports = function(ngModule){
    // Import app template.
    var ngModuleTemplate = require('./time-property-compares.html');

    // Module import.
    ngModule.config(function ($stateProvider, urlStates) {
        $stateProvider.state(urlStates.ngTimePropertyCompare.name, {
            url: urlStates.ngTimePropertyCompare.url,
            template: ngModuleTemplate,
            controller: 'TimePropertiesCompareTutorialController'
        });
    });
};