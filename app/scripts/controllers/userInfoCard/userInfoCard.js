'use-strict'

angular.module('Google.controllers')
	.controller('userInfoCardController', function($scope) {
		$scope.users = [
			{
				name: 'Senior Leone',
				collapsed: false,
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
			},
			{
				name: 'Senior Maestro Leone ',
				collapsed: false,
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
		]
		/*$scope.user1 = {
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
		}*/

		$scope.collapse = function(relativeUser) {
			angular.forEach($scope.users, function(user, key) {
				if(user===relativeUser){
					$scope.users[key].collapsed = !$scope.users[key].collapsed;
				}
			});
		}

		$scope.touchButton = function(user) {
			user.rank = "Knight";
		}
	});