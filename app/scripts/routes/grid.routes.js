'use strict';

angular.module('Commit.grid.routes', [])
  .config(function($stateProvider){
    $stateProvider
			.state('Commit.grid', {
				url: '/grid',
				templateUrl: '../../views/grid/index.html',
				pageTitle: 'Grid Directive',
				controller: 'gridController'
			});
  });
