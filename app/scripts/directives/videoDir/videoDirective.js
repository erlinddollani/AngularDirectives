'use strict';

angular.module('Google.video.directives', [])
	.directive('spacebarSupport', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				console.log('Inside link function at spacebarSupport Directive');
				$('body').on('keypress', function(event) {
					var videoElement = element[0];
					if(event.keyCode === 32) {
						if(videoElement.paused) {
							videoElement.play();
						} else {
							videoElement.pause();
						}
					}
				})
			}
		}
	})
	.directive('eventPause',function($parse){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var fn = $parse(attrs['eventPause']);
				element.on('pause', function(event) {
					scope.$apply(function() {
						fn(scope, {evt: event})
					})
				});
			}
		}
	});