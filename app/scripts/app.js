'use strict';

/**
 * Main module of the application.
 */
angular.module('Google', [
  	'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'Google.services',
    'Google.directives',
    'Google.updateTitle.directives',
    'Google.controllers',
    'Google.routes',
    'Google.templates',
    'Google.filters'
  ]);
