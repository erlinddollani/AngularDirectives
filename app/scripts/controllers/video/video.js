'use strict';
angular.module('Google.video.controllers', [])
	.controller('videoController', function($scope) {
		$scope.messages = [];

		$scope.handlePause = function(e) {
			/* kjo eshte evt qe na vin nga direktiva */
			console.log(e);
			$scope.messages.push({text: 'paused!'});
			console.log('paused!');
		}
	});