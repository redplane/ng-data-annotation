module.exports = function(ngModule){
    // Import module template.
    var ngHtmlTemplate = require('./side-bar.directive.html');

    // Module declaration.
    ngModule.directive('sideBar', function(){
        return {
            restrict: 'EA',
            template: ngHtmlTemplate,
            scope: null,
            link: function (scope, element, attrs, ngModel) {
            },
            controller: function ($scope, urlStates) {
                //#region Properties

                // Constants reflection.
                $scope.urlState = urlStates;

                //#endregion
            }
        };
    });
};