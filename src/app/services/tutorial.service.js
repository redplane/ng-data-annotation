module.exports = function (ngModule) {
    ngModule.service('tutorialService', function ($http, appSettings) {

        //#region Methods
        /*
        * Get tutorial data base on tutorial name.
        * */
        this.getTutorial = function (tutorialName) {
            switch (tutorialName) {
                case appSettings.tutorial.ngFunctionValidate:
                    return $http.get('assets/data/tutorials/ng-function-validate.json');

                case appSettings.tutorial.ngNumericPropertyCompare:
                    return $http.get('assets/data/tutorials/ng-numeric-property-compare.json');

                case appSettings.tutorial.ngTextPropertyCompare:
                    return $http.get('assets/data/tutorials/ng-text-property-compare.json');

                case appSettings.tutorial.ngTimePropertyCompare:
                    return $http.get('assets/data/tutorials/ng-time-property-compare.json');

                default:
                    return Promise.resolve(null);
            }
        };

        //#endregion
    });
};