'use strict';

// Declare app level module which depends on views, and components
angular.module('ng-application', [
    'ngRoute',
    'ngMessages',
    'ngDataAnnotations',

    'ng-text-property-compares',
    'ng-time-property-compares',
    'ng-numeric-property-compares',
    'ng-function-validate'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/text-property-compares'});
    }])
    .controller("NgApplicationController", ['$scope', '$location', function ($scope, $location) {

        // Find the current visiting url.
        $scope.getUrl = function(){
            return $location.path();
        }
    }]);
