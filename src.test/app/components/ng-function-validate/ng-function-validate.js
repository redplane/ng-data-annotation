'use strict';

angular.module('ng-function-validate', [
    'ngRoute',
    'ngDataAnnotations'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/ng-function-validate', {
            templateUrl: 'components/ng-function-validate/ng-function-validate.html',
            controller: 'NgFunctionValidateController'
        });
    }])

    .controller('NgFunctionValidateController', [
        '$scope',
        function ($scope) {

            $scope.person = {
                firstName: 'Linh',
                lastName: 'Nguyen',
                age: 11
            };

            $scope.isEven = function(number){
                return number % 2 == 0;
            }

        }]);