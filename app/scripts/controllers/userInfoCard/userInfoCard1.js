'use-strict'

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
			]
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
			]
		}

	});

angular.module('Google.controllers')
	.directive('userInfo', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/userInfoCard/userInfoCardTemplate1.html",
 			scope: {
 				user: '=person'
 			},
 			controller: function($scope) {
 				$scope.collapsed = false; 
 				$scope.touchButton = function(user) {
 					user.rank = "Knight";
 				}
				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}
				$scope.removeFriend = function(friend) {
					var inx = $scope.user.friends.indexOf(friend);
					if(inx > -1) {
						$scope.user.friends.splice(inx, 1);
					}
				}

 			}
		}
	});

angular.module('Google.controllers')
	.directive('removeFriend', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/userInfoCard/removeFriendTemplate.html",
		}
	});

angular.module('Google.controllers')
	.directive('confirmRemove', function() {
		return {
			restrict: 'E',
			templateUrl: "../../views/userInfoCard/confirmRemoveTemplate.html",
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
	});

angular.module('Google.controllers')
	.directive('address', function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: "../../views/userInfoCard/addressTemplate.html",
			controller: function($scope) {

			}
		}
	});