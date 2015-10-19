'use strict';
angular.module('Google.video.controllers', ['Google.video.directives'])
	.controller('videoController', function($scope) {
		$scope.messages = [];

		$scope.handlePause = function(e) {
			/* kjo eshte evt qe na vin nga direktiva */
			$scope.messages.push({text: 'paused!'});
			console.log('paused!');
		}
	});