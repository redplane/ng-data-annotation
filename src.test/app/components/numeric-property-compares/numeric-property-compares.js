'use strict';

angular.module('ng-numeric-property-compares', [
    'ngRoute',
    'ngDataAnnotations'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/numeric-property-compares', {
            templateUrl: 'components/numeric-property-compares/numeric-property-compares.html',
            controller: 'NgNumericPropertyComparesController'
        });
    }])

    .controller('NgNumericPropertyComparesController', [
        '$scope',
        function ($scope) {

            $scope.first = {
                a: 1,
                b: 2,
                range: 4
            };
        }]);