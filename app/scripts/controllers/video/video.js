'use strict';
angular.module('Google.video.controllers', ['Google.video.directives'])
	.controller('videoController', function($scope) {
		console.log("videoController called from the route");
		$scope.messages = [];

		$scope.handlePause = function(e) {
			/* kjo eshte evt qe na vin nga direktiva */
			console.log('I am at videoController');
			console.log(e);
			$scope.messages.push({text: 'paused!'});
			console.log('paused!');
		}
	});