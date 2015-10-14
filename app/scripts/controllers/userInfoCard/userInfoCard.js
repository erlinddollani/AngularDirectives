'use-strict'

angular.module('Google.controllers')
	.controller('userInfoCardController', function($scope){
		$scope.users = {
			user1: {
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
			},
			user2: {
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
		}
		/*
		$scope.user = {
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
		}*/
		/*
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

		$scope.touchButton = function(user) {
			user.rank = "Knight";
		}
	});