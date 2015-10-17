'use strict';
angular.module('Google.video.routes',[])
	.config(function($stateProvider){
		$stateProvider
			.state('Google.video', {
				url: '/video',
				templateUrl: '../../views/video/index.html',
				pageTitle: 'Video Directive',
				controller: 'videoController'
			});
	});