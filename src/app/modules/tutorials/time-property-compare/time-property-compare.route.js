'use strict';

module.exports = function(ngModule){
    // Import app template.
    var ngModuleTemplate = require('./time-property-compare.html');

    // Module import.
    ngModule.config(function ($stateProvider, urlStates) {
        $stateProvider.state(urlStates.ngTimePropertyCompare.name, {
            url: urlStates.ngTimePropertyCompare.url,
            template: ngModuleTemplate,
            controller:'timePropertiesCompareTutorialController',
            resolve:{
                tutorial: function(appSettings, tutorialService){
                    return tutorialService.getTutorial(appSettings.tutorial.timePropertyCompare).then(function(x){
                        return x.data;
                    })
                }
            }
        });
    });
};