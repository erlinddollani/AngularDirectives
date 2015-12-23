'use strict';

angular.module('Commit.routes', [
	'Commit.userInfoCard.routes',
	'Commit.infoCard.routes',
	'Commit.video.routes',
	'Commit.userTile.routes',
	'Commit.myQuestion.routes',
	'Commit.trafficLight.routes',
	'Commit.grid.routes'
	]);

/*kjo gjendje abstract:true nuk aktivizohet direkt dhe parametrat e ksaj trashgohen te children states*/
angular.module('Commit.routes')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('Commit', {
				abstract: true,
				template: '<div ui-view></div>',
				pageTitle: '-',
				reloadOnSearch: false,
				resolve: {

				}
			})
			.state('Commit.home', {
				url: '/home',
				templateUrl: '../../views/home/home.html',
				controller: 'homeController',
				pageTitle: 'Home'
			});
		$urlRouterProvider.otherwise('/home');
	}]);
