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
	})
	.directive('bbString', function(){
		return {
			scope: {
				term: '@',
			},
			template: '<input ng-model="term" size="50">'
		}
	})
	.directive('bbExpression', function() {
		return {
			scope: {
				term: '&',
			},
			template: '<input ng-model="term" size="50">',
			link: function(scope, element, attrs) {
				scope.term = scope.term();
			}
		}
	})
	.directive('bbTwoWay', function(){
		return {
			scope: {
				term: '='
			},
			template: '<input ng-model="term" size="50">'
		}
	});