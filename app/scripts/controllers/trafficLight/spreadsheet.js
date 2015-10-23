'use strict';
angular.module('Google.trafficLight.controllers')
	.controller('spreadsheetController', function($scope){
		/* * * Spreadsheet Controller * * */
		$scope.sheet = function($scope, $parse) {
			$scope.columns = ['A', 'B', 'C', 'D', 'E', 'F'];
			$scope.rows = [1,2,3,4,5,6];
			$scope.cells = {};

			$scope.process = function(exp) {
				if(exp!==null && exp!==undefined) {
					return exp.replace(/[A-Z]\d+/g, function(ref) {
						return 'compute("' + ref + '")';
					})
				}
			}	
			$scope.compute = function(cell) {
				try {
					return $parse($scope.process($scope.cells[cell]))($scope);
				} catch(err){}
			}
		}
	});