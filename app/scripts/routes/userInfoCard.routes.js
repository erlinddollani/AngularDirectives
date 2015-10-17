
'use strict';
angular.module('Google.userInfoCard.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Google.userInfoCard', {
				url: '/userInfoCardDirective',
				templateUrl: '../../views/userInfoCard/index.html',
				controller: 'userInfoCardController',
				pageTitle: 'Angular Directives'
			});
	});