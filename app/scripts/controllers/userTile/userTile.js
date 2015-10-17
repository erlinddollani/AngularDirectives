'use strict';
angular.module('Google.userTile.controllers',[])
	.controller('userTileController', function($scope){
		$scope.thisUser = {
			name: 'Erlind',
			selected: 'true'
		}
		$scope.size = 150;
	});