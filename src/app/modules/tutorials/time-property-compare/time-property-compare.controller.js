module.exports = function(ngModule){
    ngModule.controller('timePropertiesCompareTutorialController', function($scope, tutorial){

        //#region Properties

        // Resolvers reflection.
        $scope.tutorial = tutorial;

        //#endregion

        $scope.first = {
            a: new Date(),
            b: new Date()
        };

        $scope.second = {
            a: new Date(),
            b: new Date()
        };
    });
};