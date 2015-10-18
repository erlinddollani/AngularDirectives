'use strict';

angular.module('Google.controllers')
	.controller('userInfoCard1Controller', function($scope) {

		$scope.user1 = {
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

		$scope.user2 = {
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
					console.log(element);
					console.log(element.removeClass());
					element.removeClass(classes.join(' '));
					element.addClass(classes[newVal]);
				});
			}
		}
	})
	.directive('userInfo', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/userInfoCard1/userInfoCardTemplate1.html",
 			scope: {
 				user: '=person'
 			},
 			controller: function($scope) {
 				$scope.collapsed = false;

 				$scope.nextState = function() {
 					$scope.user.level++;
 					$scope.user.level = $scope.user.level % 3;
 				}
 				$scope.changeColor = function() {
 					$scope.user.levelColor++;
 					$scope.user.levelColor = $scope.user.levelColor % 4; 
 				}
 				$scope.touchButton = function(user) {
 					user.rank = "Knight";
 				}
				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}
				$scope.removeFriend = function(friend) {
					var inx = $scope.user.friends.indexOf(friend);
					if(inx > -1) {
						$scope.user.friends.splice(inx, 1);/*removes one value starting at inx position*/
					}
				}

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
			templateUrl: "../../views/userInfoCard1/removeFriendTemplate.html"
		}
	})
	.directive('confirmRemove', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/userInfoCard1/confirmRemoveTemplate.html",
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
			templateUrl: "../../views/userInfoCard1/addressTemplate.html",
		}
	});