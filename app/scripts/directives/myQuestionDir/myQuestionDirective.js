'use strict';
angular.module('Google.myQuestion.directives', [])
	.directive('myQuestion', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: '../../views/myQuestion/myQuestionTemplate.html',
			scope: {
				questionText: '@q'
			},
			controller: function($scope) {
			}
		}
	});