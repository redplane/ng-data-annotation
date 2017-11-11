module.exports = function(ngModule){
    // Import module template.
    var ngHtmlTemplate = require('./navigation-bar.directive.html');

    // Module declaration.
    ngModule.directive('navigationBar', function(){
        return {
            restrict: 'EA',
            template: ngHtmlTemplate,
            scope: null,
            link: function (scope, element, attrs, ngModel) {
            },
            controller: function ($scope) {
            }
        };
    });
};