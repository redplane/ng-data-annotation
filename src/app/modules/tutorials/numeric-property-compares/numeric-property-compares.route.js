module.exports = function (ngModule) {

    // Import component template.
    var ngModuleTemplate = require('./numeric-property-compares.html');

    /*
    * Module initialization.
    * */
    ngModule.config(function ($stateProvider, urlStates) {
        $stateProvider.state(urlStates.ngNumericPropertyCompare.name, {
            url: urlStates.ngNumericPropertyCompare.url,
            template: ngModuleTemplate,
            controller: 'NumericPropertiesCompareTutorialController'
        });
    });
};