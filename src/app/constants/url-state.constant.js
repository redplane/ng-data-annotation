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
        * Text contain check.
        * */
        textPropertyContain:{
            name: 'text-property-contain',
            url: '/text-property-contain'
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