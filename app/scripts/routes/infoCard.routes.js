'use strict';
angular.module('Commit.infoCard.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Commit.infoCard', {
				url: '/infoCard',
				templateUrl: '../../views/infoCard/index.html',
				pageTitle: 'User Info Card',
				controller: 'infoCardController',
			});
	});
