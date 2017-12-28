module.exports = function(ngModule){
    // Import routes.
    require('./ng-function-validate/ng-function-validate.route')(ngModule);
    require('./text-property-contain/text-property-contain.route')(ngModule);
    require('./time-property-compare/time-property-compare.route')(ngModule);

    // Import controllers.
    require('./ng-function-validate/ng-function-validate.controller')(ngModule);
    require('./text-property-contain/text-property-contain.controller')(ngModule);
    require('./time-property-compare/time-property-compare.controller')(ngModule);
};