'use strict';
angular.module('Google.userTile.routes', [])
	.config(function($stateProvider) {
		$stateProvider
			.state('Google.userTile', {
				url: '/userTile',
				templateUrl: '../../views/userTile/index.html',
				pageTitle: 'User Tile',
				controller: 'userTileController'
			});
	});