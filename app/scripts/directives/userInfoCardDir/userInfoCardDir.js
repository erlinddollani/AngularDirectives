/**
 * Created by erlind.dollani on 14/10/2015.
 */
 'use strict';
 angular.module('Google.userInfoCard.directives')
 	.directive('infoCard', function() {
 			return {
 				restrict: 'E',
 				templateUrl: "../../views/userInfoCard/userInfoCardTemplate.html",
 				controller: function($scope) {
 				}	
 			}
 	});