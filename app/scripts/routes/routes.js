'use strict';

angular.module('Google.routes', [
	'Google.userInfoCard.routes',
	'Google.userInfoCard1.routes',
	'Google.video.routes',
	'Google.userTile.routes'
	]);

/*kjo gjendje abstract:true nuk aktivizohet direkt dhe parametrat e ksaj trashgohen te children states*/
angular.module('Google.routes')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('Google', {
				abstract: true, 
				template: '<div ui-view></div>',
				pageTitle: '-',
				reloadOnSearch: false,
				resolve: {

				}
			})
			.state('Google.home', {
				url: '/home',
				templateUrl: '../../views/home/home.html',
				controller: 'homeController',
				pageTitle: 'Home'
			});
		$urlRouterProvider.otherwise('/home');
	}]);