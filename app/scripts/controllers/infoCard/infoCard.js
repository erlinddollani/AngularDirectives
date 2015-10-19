'use strict';

angular.module('Google.controllers')
	.controller('infoCardController', function($scope) {

		$scope.person1 = {
			name: 'Senior Leone',
			address: {
				street: 'Donika Kastrioti',
				city: 'Tirana',
				planet: 'Earth'
			},
			friends: [
				'Lupi',
				'Ben',
				'Marko'
			],
			level: 0,
			levelColor: 0
		}

		$scope.person2 = {
			name: 'Senior Maestro Leone ',
			address: {
				street: 'Donika Kastrioti',
				city: 'Tirana',
				planet: 'Earth'
			},
			friends: [
				'Lupito',
				'Ben',
				'Marko'
			],
			level: 1,
			levelColor:1
		}

		$scope.droid1 = {
			name: 'AL-GR',
			specifications: {
				manifacturer: 'Metallurgical: Elbasan Automation',
				type: 'Robot',
				productLine: 'AL series'
			},
			level: 0,
			levelColor: 0
		}
	})
	.directive('stateDisplay', function() {
		return {
			link: function(scope, element, attrs) {
				scope.$watch(attrs['stateDisplay'], function(newVal){
					switch(newVal) {
						case 0:
							element.css('background-color', 'white');
							break;
						case 1:
							element.css('background-color', 'yellow');
							break;
						case 2:
							element.css('background-color', 'red');
							break;
					}
				});
			}
		}
	})
	.directive('displayHeader', function() {
		return { 
			link: function(scope, element, attrs) {
				var params = attrs['displayHeader'].split(' ');
				var linkVar = params[0];
				var classes = params.slice(1);

				scope.$watch(linkVar, function(newVal) {
					element.removeClass(classes.join(' '));
					element.addClass(classes[newVal]);
				});
			}
		}
	})
	.directive('personInfoCard', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/infoCard/personInfoCardTemplate.html",
 			scope: {
 				person: '=',
 				initialCollapsed: '@collapsed'
 			},
 			controller: function($scope) {
 				$scope.changeColor = function() {
 					$scope.person.levelColor++;
 					$scope.person.levelColor = $scope.person.levelColor % 4; 
 				}
 				$scope.touchButton = function(person) {
 					person.rank = "Knight";
 				}
				$scope.removeFriend = function(friend) {
					var inx = $scope.person.friends.indexOf(friend);
					if(inx > -1) {
						$scope.person.friends.splice(inx, 1);/*removes one value starting at inx position*/
					}
				}

 			}
		}
	})
	.directive('userPanel', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: '../../views/infoCard/userPanel.html',
			scope: {
				name: '@',
				level: '=',
				initialCollapsed: '@collapsed'
			},
			controller: function($scope) {
					$scope.collapsed = ($scope.initialCollapsed === 'true');
				$scope.nextState = function(evt) {
					/*evt.stopPropagation();
					evt.preventDefault();*/
					$scope.level++;
					$scope.level = $scope.level % 4;
				}
				$scope.changeColor =  function() {
					$scope.levelColor++;
					$scope.levelColor = $scope.levelColor % 4;
				}
				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}
			}
		}
	})
	.directive('droidInfoCard', function() {
		return {
			templateUrl: '../../views/infoCard/droidInfoCardTemplate.html',
			restrict: 'E',
			scope: {
				droid: '=',
				initialCollapsed: '@collapsed'
			},
			controller: function($scope) {
			
			}
		}
	})
	/*.directive('stateDisplay', function() {
		return {
			link: function(scope, el, attrs) {
				var params = attrs['stateDisplay'].split(' ');
				var linkVar = params[0];
				var classes = params.slice(1);
				scope.$watch(linkVar, function(newVal) {
					el.removeClass(classes.join(' '));
					el.addClass(classes[newVal]);
				});
			}
		}
	});*/
	.directive('removeFriend', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/infoCard/removeFriendTemplate.html"
		}
	})
	.directive('confirmRemove', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/infoCard/confirmRemoveTemplate.html",
			controller: function($scope) {
				$scope.removing = false;
				$scope.startRemove = function() {
					$scope.removing = true;
				}
				$scope.cancelRemove = function() {
					$scope.removing = false;
				}
			}
		}
	})
	.directive('address', function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: "../../views/infoCard/addressTemplate.html",
		}
	});