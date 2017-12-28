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
            controller: function ($scope, urlStates, $state) {

                //#region Properties

                // Constants reflection.
                $scope.urlState = urlStates;

                //#endregion

                //#region Methods

                /*
                * Whether is in directive page.
                * */
                $scope.bIsInDirectivePage = function(){

                    var szStates = [urlStates.ngFunctionValidate.name,
                        urlStates.ngTextPropertyCompare.name,
                        urlStates.ngTimePropertyCompare.name];

                    // Get filtered results.
                    var filteredResults = szStates.filter(function(x){
                        return $state.includes(x);
                    });

                    return (filteredResults && filteredResults.length > 0);
                };

                /*
                * Whether installation page is active or not.
                * */
                $scope.bIsInInstallationPage = function(){
                    var szStates = [urlStates.installation.name];

                    // Get filtered results.
                    var filteredResults = szStates.filter(function(x){
                        return $state.includes(x);
                    });

                    return (filteredResults && filteredResults.length > 0);
                };
                //#endregion
            }
        };
    });
};