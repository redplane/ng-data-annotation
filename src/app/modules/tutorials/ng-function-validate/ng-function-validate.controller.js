'use strict';

module.exports = function(ngModule){
    /*
    * Controller declaration.
    * */
    ngModule.controller('FunctionValidateTutorialController', function ($scope, tutorial) {

        //#region Properties

        // Resolvers reflection.
        $scope.tutorial = tutorial;

        //#endregion

        $scope.person = {
            firstName: 'Linh',
            lastName: 'Nguyen',
            age: 11
        };

        $scope.isEven = function(number){
            return number % 2 == 0;
        }

    });
};