module.exports = function(ngModule){
    /*
    * Module constants initialization.
    * */
    ngModule.constant('appSettings', {
        tutorial:{
            ngFunctionValidate: 'ng-function-validate',
            textPropertyContain: 'text-property-contain',
            timePropertyCompare: 'time-property-compare'
        }
    });
};