module.exports = function(ngModule){
    ngModule.controller('TimePropertiesCompareTutorialController', function(){
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