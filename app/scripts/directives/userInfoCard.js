/**
 * Created by erlind.dollani on 14/10/2015.
 */
 'use strict';
 angular.module('Google.directives')
 	.directive('userInfoCard', function() {
 		return {
 			controller: 'userInfoCardController', /* controllers/userInfoCard/userInfoCard.js */
 			templateUrl: "../../views/userInfoCard/userInfoCardTemplate.html",
 			restrict: 'EA'
 		}
 	});