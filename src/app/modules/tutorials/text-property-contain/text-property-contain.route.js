'use strict';

module.exports = function (ngModule) {

    // Import app template.
    var ngModuleTemplate = require('./text-property-contain.html');

    // Module configuration.
    ngModule.config(function ($stateProvider, urlStates) {
        $stateProvider.state(urlStates.textPropertyContain.name, {
            url: urlStates.textPropertyContain.url,
            template: ngModuleTemplate,
            controller: 'textPropertyContainTutorialController',
            resolve: {
                tutorial: function (tutorialService, appSettings) {
                    return tutorialService.getTutorial(appSettings.tutorial.textPropertyContain).then(function (x) {
                        return x.data;
                    });
                },

                exampleCode: function(tutorialService, appSettings){
                    return tutorialService.getExampleCode(appSettings.tutorial.textPropertyContain).then(function (x) {
                        return x.data;
                    });
                }
            }
        });
    });
};