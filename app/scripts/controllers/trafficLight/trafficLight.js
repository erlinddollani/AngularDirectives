'use strict';

angular.module('Commit.trafficLight.controllers', ['Commit.trafficLight.directives'])
	.controller('stopLightController', function($scope, $interval) {
		console.log('stopLightController');
		this.options = $scope.options;

		this.setNextState = function() {
			state = $scope.options.state;
		};
		//$interval(this.setNextState, this.options.interval);

		/* * * for the animated menu * * */
		$scope.hello = 'You are awesome...';

		/* * * Spreadsheet Controller * * */
		$scope.sheet = function($scope, $parse) {
			/*$scope.cell = '';
			$scope.compute = function() {
				return $parse($scope.cell)($scope);
			}*/
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
