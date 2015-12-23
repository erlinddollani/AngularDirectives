'use strict';
angular.module('Commit.userTile.routes', [])
	.config(function($stateProvider) {
		$stateProvider
			.state('Commit.userTile', {
				url: '/userTile',
				templateUrl: '../../views/userTile/index.html',
				pageTitle: 'User Tile',
				controller: 'userTileController'
			});
	});
