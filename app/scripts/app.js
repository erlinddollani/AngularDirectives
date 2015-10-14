'use strict';

/**
 * Main module of the application.
 */
angular
  .module('Google', [
  	'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'Google.templates',
    'Google.routes',
    'Google.directives',
    'Google.services',
    'Google.controllers',
    'Google.filters'
  ]);
