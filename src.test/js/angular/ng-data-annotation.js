/*
* Initiate data annotation service.
* */
var angularDataAnnotation = angular.module('ngDataAnnotations', []);

/*
 * Compare 2 date time property in the same scope.
 * Properties:
 *   *) time-compares: 'string'
 *       - Specify scope property which is needed to be compared.
 *       - Example: 'account.lastModified'
 *
 *   *) time-compares-operator': 'string
 *      - Specify comparision mode which should be done between 2 properties.
 *      - Values: '<', '<=', '=', '>=', '>', '!='
 * */
angularDataAnnotation.directive('timePropertyCompares', function () {

    // Compare 2 date property base on the operator.
    isDateComparisionValid = function (source, target, operator) {
        switch (operator) {
            case '<':
                return source < target;
            case '<=':
                return source <= target;
            case '=':
                return source == target;
            case '>=':
                return source >= target;
            case '>':
                return source > target;
            case '!=':
                return source != target;
            default:
                throw 'Invalid operator';
        }
    };

    return {
        require: 'ngModel',
        link: function (scope, element, attribute, ngModel) {

            // Find list of properties;
            var properties = attribute.timePropertyCompares.split('.');

            // Find comparision operator.
            var comparisionOperator = attribute.timePropertyComparesOperator;

            // Watch target property for changes.
            scope.$watch(attribute.timePropertyCompares, function () {

                // Properties list.
                var propertiesList = properties;

                // Find the date which need to be compared.
                var date = new Date(ngModel.$viewValue);

                // Find the target property date.
                var targetDate = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    targetDate = targetDate[propertiesList[index]];

                ngModel.$setValidity('timePropertyCompares', isDateComparisionValid(date, targetDate, comparisionOperator));
            });

            //For DOM -> model validation
            ngModel.$parsers.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Initiate date.
                var date = new Date(value);

                // Find the target property date.
                var targetDate = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    targetDate = targetDate[propertiesList[index]];

                ngModel.$setValidity('timePropertyCompares', isDateComparisionValid(date, targetDate, comparisionOperator));
                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var targetDate = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    targetDate = targetDate[propertiesList[index]];

                // Initiate date.
                var date = new Date(value);

                ngModel.$setValidity('timePropertyCompares', isDateComparisionValid(date, targetDate, comparisionOperator));
                return value;
            });
        }
    };
});

/*
 * Compare 2 text input properties in the same scope.
 * Properties:
 *   *) text-compares: 'string'
 *       - Specify scope property which is needed to be compared.
 *       - Example: 'account.name'
 *
 *   *) text-compares-operator': 'string
 *      - Specify comparision mode which should be done between 2 properties.
 *      - Values: '<', '<=', '=', '>=', '>', '!='
 * */
angularDataAnnotation.directive('textPropertyCompares', function () {

    // Compare 2 date property base on the operator.
    isTextComparisionValid = function (source, target, operator) {
        switch (operator) {
            case '<':
                return source < target;
            case '<=':
                return source <= target;
            case '=':
                return source == target;
            case '>=':
                return source >= target;
            case '>':
                return source > target;
            case '==':
                return source === target;
            default:
                throw 'Invalid operator';
        }
    };

    return {
        require: 'ngModel',
        link: function (scope, element, attribute, ngModel) {

            // Find list of properties;
            var properties = attribute.textPropertyCompares.split('.');

            // Find comparision operator.
            var comparisionOperator = attribute.textPropertyComparesOperator;

            // Watch target property for changes.
            scope.$watch(attribute.textPropertyCompares, function () {

                // Properties list.
                var propertiesList = properties;

                // Find the date which need to be compared.
                var txtSource = ngModel.$viewValue;

                // Find the target property date.
                var txtTargetProperty = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    txtTargetProperty = txtTargetProperty[propertiesList[index]];

                ngModel.$setValidity('textPropertyCompares', isTextComparisionValid(txtSource, txtTargetProperty, comparisionOperator));
            });

            //For DOM -> model validation
            ngModel.$parsers.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var txtTarget = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    txtTarget = txtTarget[propertiesList[index]];

                ngModel.$setValidity('textPropertyCompares', isTextComparisionValid(value, txtTarget, comparisionOperator));
                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var txtTarget = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    txtTarget = txtTarget[propertiesList[index]];

                ngModel.$setValidity('textPropertyCompares', isTextComparisionValid(value, txtTarget, comparisionOperator));
                return value;
            });
        }
    };
});

/*
 * Compare 2 numeric input properties in the same scope.
 * Properties:
 *   *) 'numeric-property-compares': 'string'
 *       - Specify property which should be watched for comparision.
 *       - Example: 'account.age'
 *
 *   *) 'numeric-property-compares-operator': 'string'
 *       - Comparision operator. Supported : '<', '<=', '=', '>=', '>', '!='
 *       - Example: '<='
 *
 *   *) 'numeric-property-compares-mathematic-operator': 'string'
 *       - Which mathematical calculation target property should do before comparision. Supported: '+', '-', '*', '/'
 *       - Example: '+'
 *
 *   *) 'numeric-property-compares-mathematic-range': 'number'
 *       - Number which target property should interact with before comparision.
 *       - Whether target property subtract / add / multiply / divide with the range.
 *       - Example: '20'
 * */
angularDataAnnotation.directive('numericPropertyCompares', function () {

    // Compare 2 date property base on the operator.
    isNumericPropertyCompareValid = function (source, target, operator, range, mathematicOperator) {

        var flTarget = target;

        // Range is defined.
        if (range != null){
            switch (mathematicOperator){
                case '+':
                    flTarget += range;
                    break;
                case '-':
                    flTarget -= range;
                    break;
                case '*':
                    flTarget *= range;
                    break;
                case '/':
                    flTarget /= range;
                    break;
            }
        }

        switch (operator) {
            case '<':
                return source < flTarget;
            case '<=':
                return source <= flTarget;
            case '=':
                return source == flTarget;
            case '>=':
                return source >= flTarget;
            case '>':
                return source > flTarget;
            case '==':
                return source === flTarget;
            case '!=':
                return source != flTarget;
            default:
                throw 'Invalid operator';
        }
    };

    return {
        require: 'ngModel',
        link: function (scope, element, attribute, ngModel) {

            // Find list of properties;
            var properties = attribute.numericPropertyCompares.split('.');

            // Find comparision operator.
            var comparisionOperator = attribute.numericPropertyComparesOperator;

            // Find the range of comparision.
            var flRange = attribute.numericPropertyComparesMathematicRange;

            // Find the mathematic operator which is used for calculation target property final value before comparision is done.
            var mathematicOperator = attribute.numericPropertyComparesMathematicOperator;

            // Watch target property for changes.
            scope.$watch(attribute.numericPropertyCompares, function () {

                // Properties list.
                var propertiesList = properties;

                // Find the date which need to be compared.
                var flSource = ngModel.$viewValue;

                // Find the target property date.
                var flTargetProperty = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    flTargetProperty = flTargetProperty[propertiesList[index]];

                ngModel.$setValidity('numericPropertyCompares', isNumericPropertyCompareValid(flSource, flTargetProperty, comparisionOperator, flRange, mathematicOperator));
            });

            //For DOM -> model validation
            ngModel.$parsers.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var flTargetProperty = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    flTargetProperty = flTargetProperty[propertiesList[index]];

                ngModel.$setValidity('numericPropertyCompares', isNumericPropertyCompareValid(value, flTargetProperty, comparisionOperator, flRange, mathematicOperator));
                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var flTargetProperty = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    flTargetProperty = flTargetProperty[propertiesList[index]];

                ngModel.$setValidity('numericPropertyCompare', isNumericPropertyCompareValid(value, flTargetProperty, comparisionOperator, flRange, mathematicOperator));
                return value;
            });
        }
    };
});

/*
 * Check whether the source text input property contains another one.
 * Properties:
 *   *) text-contains: 'string'
 *       - Specify scope property which is needed to be compared.
 *       - Example: 'account.name'
 *
 *   *) text-contains-case-insensitive': 'bool'
 *      - Whether text is case sensitive or not.
 *
 *   *) text-contains-expected-result: '<int>'
 *      - Similar to a.indexOf(b) == <int>
 * */
angularDataAnnotation.directive('textPropertyContains', function () {

    // Compare 2 date property base on the operator.
    isTextContainValid = function (source, target, caseInsensitive, operator, result) {

        var txtSource = source;
        var txtTarget = target;

        // Convert source and target to case insensitive.
        if (caseInsensitive == 'true'){
            txtSource = source.toLowerCase();
            txtTarget = target.toLowerCase();
        }

        // Result hasn't been specified.
        if (result == null)
            result = -1;

        // Operator hasn't been specified.
        if (operator == null)
            operator = '!=';

        switch (operator){
            case '<':
                return txtSource.indexOf(txtTarget) < result;
            case '<=':
                return txtSource.indexOf(txtTarget) <= result;
            case '=':
                return txtSource.indexOf(txtTarget) == result;
            case '>=':
                return txtSource.indexOf(txtTarget) >= result;
            case '>':
                return txtSource.indexOf(txtTarget) > result;
            case '!=':
                return txtSource.indexOf(txtTarget) != result;
            default:
                throw 'Operator ' + operator + ' is invalid. Please check';
        }
    };

    return {
        require: 'ngModel',
        link: function (scope, element, attribute, ngModel) {

            // Find list of properties;
            var properties = attribute.textPropertyContains.split('.');

            // Find comparision operator.
            var isCaseInsensitive = attribute.textPropertyContainsCaseInsensitive;
            if (isCaseInsensitive == null)
                isCaseInsensitive = false;

            // Find expected result.
            var result = attribute.textPropertyContainsResult;

            // Find compare operator.
            var comparisionOperator = attribute.textPropertyContainsComparisionOperator;

            // Watch target property for changes.
            scope.$watch(attribute.textPropertyContains, function () {

                // Properties list.
                var propertiesList = properties;

                // Find the date which need to be compared.
                var txtSource = ngModel.$viewValue;

                // Find the target property date.
                var txtTargetProperty = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    txtTargetProperty = txtTargetProperty[propertiesList[index]];

                ngModel.$setValidity('textPropertyContains', isTextContainValid(txtSource, txtTargetProperty, isCaseInsensitive, comparisionOperator, result));
            });

            //For DOM -> model validation
            ngModel.$parsers.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var txtTarget = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    txtTarget = txtTarget[propertiesList[index]];

                ngModel.$setValidity('textPropertyContains', isTextContainValid(value, txtTarget, isCaseInsensitive, comparisionOperator, result));
                return value;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function (value) {

                // Properties list.
                var propertiesList = properties;

                // Find the target property date.
                var txtTarget = ngModel.$$scope;
                for (var index = 0; index < propertiesList.length; index++)
                    txtTarget = txtTarget[propertiesList[index]];

                ngModel.$setValidity('textPropertyContains', isTextContainValid(value, txtTarget, isCaseInsensitive, comparisionOperator, result));
                return value;
            });
        }
    };
});


/*
* Custom validate function.
* Desc : This annotation exploit the function inside a scope to do validation without writing too many custom validators for specific tasks.
* Paramaters:
*   *) ng-function-validate: 'string'
*       - Specify list of functions which can be used for validating data. Functions are separated by character ';'
*       - Example: 'is-even;is-odd;is-not-odd'
*
*   *) ng-function-validate-monitors: 'string'
*       - List of model which should be watched for changes. Each time model is updates, validation is done again.
*       - Models are separated from each other by character ';'
*       - Example: 'account.name;account.fullName'
*
*   *) ng-function-valid-<validation function> : 'string'
*       - Logic which should be done to validate property.
*       - <validation function> is the one which has been registered in the ng-function-validate.
*       - Example: 'ng-function-validate-is-even' = 'account.age % 2 == 0'
* */
angularDataAnnotation.directive('ngFunctionValidate', function(){

    return {
        require: 'ngModel',
        link: function (scope, element, attribute, ngModel) {

            // Find list of validate functions that should be done with the model.
            var txtFunctionsList = attribute.ngFunctionValidate;

            // List of functions is empty.
            if (txtFunctionsList == null || txtFunctionsList.length < 1)
                throw 'Validate functions should be specified.';

            // Parse function list text to list of functions.
            var functionsList = txtFunctionsList.split(';');

            // List of functions is empty.
            if (functionsList == null || functionsList.length < 1)
                throw 'Validate functions should be specified';

            // Find a list of properties which are watched for changes.
            var txtMonitoredModels = attribute.ngFunctionValidateMonitors;

            // List of properties which should be monitored their changes.
            var monitoredModels = [];

            // By default, watch the current model.
            monitoredModels.push(ngModel.$$attr.ngModel);

            // As the monitored properties attribute is defined, find 'em all.
            if (txtMonitoredModels != null){
                // Properties should be separated from each other by ';'
                monitoredModels = monitoredModels.concat(txtMonitoredModels.split(';'));
            }

            // Go through every model which has been registered for being watched for changes.
            for (var propertyIndex = 0; propertyIndex < monitoredModels.length; propertyIndex++) {

                // Find model name.
                var modelName = monitoredModels[propertyIndex];

                // Watch target property for changes.
                scope.$watch(modelName, function () {
                    // Each time model is changed. Call all validate functions and set the validity of model base on the validation result.
                    for (var index = 0; index < functionsList.length; index++){

                        // Find the validator property name.
                        var validatorPropertyName = 'ng-function-validate-' + functionsList[index];

                        // Find property information.
                        var validatePropertyInfo = element.attr(validatorPropertyName);

                        if (validatePropertyInfo == null || validatePropertyInfo.length < 1)
                            throw validatorPropertyName + ' doesn\'t exist in tag. Please check !';

                        // Construct angular validity property.
                        var calculationResult = scope.$eval(element.attr(validatorPropertyName));
                        ngModel.$setValidity(validatorPropertyName, calculationResult);
                    }
                });
            }
        }
    };
});

