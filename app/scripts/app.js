'use strict';

/**
 * Main module of the application.
 */
angular.module('Commit', [
  	'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'Commit.services',
    'Commit.directives',
    'Commit.updateTitle.directives',
    'Commit.grid.directives',
    'Commit.controllers',
    'Commit.routes',
    'Commit.templates',
    'Commit.filters'
  ]);
