module.exports = function (ngModule) {
    ngModule.constant('urlStates', {

        /*
        * Ng function validate routing configuration.
        * */
        ngFunctionValidate: {
            name: 'ng-function-validate',
            url: '/ng-function-validate'
        },

        /*
        * Ng numeric validate routing configuration.
        * */
        ngNumericPropertyCompare:{
            name: 'ng-numeric-property-compare',
            url: '/ng-numeric-property-compare'
        },

        /*
        * Ng text property compare routing configuration.
        * */
        ngTextPropertyCompare: {
            name: 'ng-text-property-compare',
            url: '/ng-text-property-compare'
        },

        /*
        * Ng time property compare routing configuration.
        * */
        ngTimePropertyCompare: {
            name: 'ng-time-property-compare',
            url: '/ng-time-property-compare'
        }
    });
};