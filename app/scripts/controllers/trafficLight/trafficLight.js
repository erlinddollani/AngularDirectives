'use strict';

angular.module('Google.trafficLight.controllers', ['Google.trafficLight.directives'])
	.controller('stopLightController', function($scope, $interval) {
		this.options = $scope.options;

		this.setNextState = function() {
			state = $scope.options.state;
		};
		//$interval(this.setNextState, this.options.interval);
		
		/* * * for the animated menu * * */
		$scope.hello = 'You are awesome...';
	});
