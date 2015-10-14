
'use strict'
angular.module('Google.angularDirectives.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Google.angularDirectives', {
				url: '/userInfoCardDirective',
				templateUrl: '../../views/userInfoCard/index.html',
				controller: '',
				pageTitle: 'Angular Directives'
			});
	});