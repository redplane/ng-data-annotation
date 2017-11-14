module.exports = function (ngModule) {
    ngModule.service('tutorialService', function ($http, appSettings) {

        //#region Methods
        /*
        * Get tutorial data base on tutorial name.
        * */
        this.getTutorial = function (tutorialName) {
            return $http.get('assets/data/tutorials/' + tutorialName + '.json');
        };

        /*
        * Get source code of tutorial.
        * */
        this.getExampleCode = function(tutorialName){
            return $http.get('assets/data/tutorials/' + tutorialName + '.code.txt');
        };
        //#endregion
    });
};