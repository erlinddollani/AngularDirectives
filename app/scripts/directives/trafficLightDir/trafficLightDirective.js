'use strict';
angular.module('Google.trafficLight.directives', [])
	.directive('stopLightContainer', function() {
		console.log('Inside trafficLight directive');
		return {
			controller: 'stopLightController',
			scope: {
				options: '='
			}
		};	
	})
	.directive('stopLight', function() {
		return {
			require: '^stopLightContainer',
			scope: {

			},
			link: function(scope, element, attrs, stopLightController) {

			}
		}
	});
	