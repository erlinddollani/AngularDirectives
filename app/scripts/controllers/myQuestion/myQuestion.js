'use strict';
angular.module('Google.myQuestion.controllers', ['Google.myQuestion.directives'])
	.controller('myQuestionController', function($scope) {
		$scope.answers = {
			baseLocation: "area 51 in Nevada Desert"
		}
		$scope.term = "How to create";
	});