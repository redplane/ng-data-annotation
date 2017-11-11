'use strict';

module.exports = function(ngModule){
    /*
    * Controller initialization.
    * */
    ngModule.controller('NumericPropertiesCompareTutorialController', function ($scope) {

        $scope.first = {
            a: 1,
            b: 2,
            range: 4
        };
    });
};
