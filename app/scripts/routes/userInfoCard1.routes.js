'use strict'
angular.module('Google.userInfoCard1.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Google.userInfoCard1', {
				url: '/userInfoCard1Directive',
				templateUrl: '../../views/userInfoCard/index1.html',
				pageTitle: 'User Info Card',
				controller:'userInfoCard1Controller'
			});
	});