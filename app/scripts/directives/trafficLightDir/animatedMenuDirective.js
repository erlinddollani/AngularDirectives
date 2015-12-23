'use strict';
angular.module('Commit.trafficLight.directives', [])
	.directive('animatedMenu', function($parse) {
		return {
			restrict: 'EA',
			replace: true,
			controller: '',
			/*scope: {
				test: '&'
			},*/
			template: function(tElem, tAttrs) {
				return '<div class="animated-menu animated-menu-vertical animated-menu-left">' +
					   '{{hello}}' + '</div>';
			},
			link: function(scope, elem, attrs, controller) {
				scope.closed = false;
				scope.showMenu = function() {
					elem.toggleClass('animated-menu-push-toright');
					scope.closed = !scope.closed;
				}
			}
		}
	});
