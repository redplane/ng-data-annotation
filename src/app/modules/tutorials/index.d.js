module.exports = function(ngModule){
    // Import routes.
    require('./ng-function-validate/ng-function-validate.route')(ngModule);
    require('./numeric-property-compares/numeric-property-compares.route')(ngModule);
    require('./text-property-compares/text-property-compares.route')(ngModule);
    require('./time-property-compares/time-property-compares.route')(ngModule);

    // Import controllers.
    require('./ng-function-validate/ng-function-validate.controller')(ngModule);
    require('./numeric-property-compares/numeric-property-compares.controller')(ngModule);
    require('./text-property-compares/text-property-compares.controller')(ngModule);
    require('./time-property-compares/time-property-compares.controller')(ngModule);

    console.log('module');
};