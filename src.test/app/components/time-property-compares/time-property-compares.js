'use strict';

angular.module('ng-time-property-compares', [
    'ngRoute',
    'ngDataAnnotations'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/time-property-compares', {
            templateUrl: 'components/time-property-compares/time-property-compares.html',
            controller: 'NgTimePropertyComparesController'
        });
    }])

    .controller('NgTimePropertyComparesController', [
        '$scope',
        function ($scope) {

            $scope.first = {
                a: new Date(),
                b: new Date()
            };

            $scope.second = {
                a: new Date(),
                b: new Date()
            };
        }]);