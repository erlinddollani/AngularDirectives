'use strict';

angular.module('Commit.trafficLight.routes', [])
	.config(function($stateProvider){
		$stateProvider
			.state('Commit.trafficLight', {
				url: '/trafficLight',
				templateUrl: '../../views/trafficLight/index.html',
				controller: 'stopLightController',
				pageTitle: 'Traffic Light'
			});
	});
