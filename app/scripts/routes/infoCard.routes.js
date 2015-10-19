'use strict';
angular.module('Google.infoCard.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Google.infoCard', {
				url: '/infoCard',
				templateUrl: '../../views/infoCard/index.html',
				pageTitle: 'User Info Card',
				controller: 'infoCardController',
			});
	});