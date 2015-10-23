'use strict';

angular.module('Google.trafficLight.routes', [])
	.config(function($stateProvider){
		$stateProvider
			.state('Google.trafficLight', {
				url: '/trafficLight',
				templateUrl: '../../views/trafficLight/index.html',
				controller: 'stopLightController',
				pageTitle: 'Traffic Light'
			});
	});