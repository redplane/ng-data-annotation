module.exports = function(ngModule){
    /*
    * Module constants initialization.
    * */
    ngModule.constant('appSettings', {
        tutorial:{
            ngFunctionValidate: 'ng-function-validate',
            ngNumericPropertyCompare: 'ng-numeric-property-compare',
            ngTextPropertyCompare: 'ng-text-property-compare',
            ngTimePropertyCompare: 'ng-time-property-compare'
        }
    });
};