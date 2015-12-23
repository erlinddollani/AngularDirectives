'use-strict';

angular.module('Commit.controllers')
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
		console.log($scope.users);
	});
