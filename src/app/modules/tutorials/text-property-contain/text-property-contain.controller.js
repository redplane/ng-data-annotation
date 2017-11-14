module.exports = function(ngModule){
    ngModule.controller('textPropertyContainTutorialController', function ($scope, tutorial, exampleCode) {

        //#region Properties

        // Resolvers reflection.
        $scope.tutorial = tutorial;
        $scope.exampleCode = exampleCode;

        //#endregion

        $scope.model = {
            a: {
                name: 'Roach'
            },
            b: {
                name: 'Simon'
            }
        };

        $scope.second = {
            a: {
                name: 'This is roach'
            },
            b: {
                name: 'is Roach'
            }
        }
    });
};