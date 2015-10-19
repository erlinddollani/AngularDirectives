'use strict';
angular.module('Google.directives',[])
	.directive('userTile', function(){
		return {
			restrict: 'E',
			scope: {
				user: '='
			},
			templateUrl: "../../views/userTile/userTileTemplate.html",
			controller: function($scope) {
				$scope.shown = true;
				$scope.close = function() {
					$scope.shown = false;
				}
			},
			transclude: true
		}
	})
	.directive('userClickSelect', function(){
		return {
			link: function(scope, element, attrs) {
					element.on('click', function() {
						scope.user.selected = !scope.user.selected;
						scope.$apply();
				})
			}
		}
	})
	.directive('fontScale', function() { 
		return {
			link: function(scope, element, attrs) {
				scope.$watch(attrs['fontScale'], function(newVal) {
					element.css('font-size', newVal + '%');
				})
			}
		}
	})