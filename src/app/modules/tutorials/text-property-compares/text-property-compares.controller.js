module.exports = function(ngModule){
    ngModule.controller('TextPropertiesCompareTutorialController', function ($scope) {

        $scope.first = {
            a: {
                name: 'Roach'
            },
            b: {
                name: 'Roach'
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