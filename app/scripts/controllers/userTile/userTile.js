'use strict';
angular.module('Commit.userTile.controllers',[])
	.controller('userTileController', function($scope){
		$scope.thisUser = {
			name: 'Erlind',
			selected: 'true',
			message: "We are the awesome team ! Click the text to change the color"
		}
		$scope.size = 150;
	});
