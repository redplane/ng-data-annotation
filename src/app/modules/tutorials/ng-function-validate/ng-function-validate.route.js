'use strict';

module.exports = function(ngModule){

    // Import app html template.
    var ngModuleTemplate = require('./ng-function-validate.html');

    /*
    * Route configuration
    * */
    ngModule.config(function ($stateProvider, urlStates) {
        // State declaration.
        $stateProvider.state(urlStates.ngFunctionValidate.name,{
            url: urlStates.ngFunctionValidate.url,
            controller: 'FunctionValidateTutorialController',
            template: ngModuleTemplate,
            resolve:{
                tutorial: function(tutorialService, appSettings){
                    return tutorialService.getTutorial(appSettings.tutorial.ngFunctionValidate).then(function(x){
                        return x.data;
                    });
                }
            }
        });
        console.log('ng-function-validate');
    });
};