
'use strict';
angular.module('Commit.userInfoCard.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Commit.userInfoCard', {
				url: '/userInfoCardDirective',
				templateUrl: '../../views/userInfoCard/index.html',
				controller: 'userInfoCardController',
				pageTitle: 'Angular Directives'
			});
	});
