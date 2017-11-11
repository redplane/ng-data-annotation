// Css import.
require('bootstrap/dist/css/bootstrap.min.css');
require('./assets/css/app.css');

// Css - AdminLTE
require('admin-lte/dist/css/AdminLTE.min.css');
require('admin-lte/dist/css/skins/skin-black-light.min.css');

// Jquery libraries import.
require('jquery');
require('bootstrap');
require('admin-lte');
require('font-awesome/css/font-awesome.min.css');

// Angular & libraries import.
var angular = require('angular');
var ngMessage = require('angular-messages');

require('@uirouter/angularjs');
require('./directives/external/ng-data-annotation/ng-data-annotations');


/*
* Angular module initialization.
* */
var ngModule = angular.module('app', ['ui.router', 'ngDataAnnotations', ngMessage]);

// Module configuration.
ngModule.config(function($urlRouterProvider, urlStates){
  $urlRouterProvider.otherwise(urlStates.ngFunctionValidate.url);
});

// Import constants.
require('./constants/index.d')(ngModule);

// Services import.
require('./services/index.d')(ngModule);

// Directives import.
require('./directives/internal/index.d')(ngModule);

// Import modules.
require('./modules/index.d')(ngModule);




