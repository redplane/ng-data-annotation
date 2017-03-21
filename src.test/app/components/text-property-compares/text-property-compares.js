'use strict';

angular.module('ng-text-property-compares', [
    'ngRoute',
    'ngDataAnnotations'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/text-property-compares', {
            templateUrl: 'components/text-property-compares/text-property-compares.html',
            controller: 'TextPropertyComparesController'
        });
    }])

    .controller('TextPropertyComparesController', ['$scope', function ($scope) {

        $scope.first = {
            a:{
                name: 'Roach'
            },
            b:{
                name: 'Roach'
            }
        };

        $scope.second = {
            a:{
                name: 'This is roach'
            },
            b:{
                name: 'is Roach'
            }
        }
    }]);