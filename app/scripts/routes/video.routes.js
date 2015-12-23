'use strict';
angular.module('Commit.video.routes',[])
	.config(function($stateProvider){
		$stateProvider
			.state('Commit.video', {
				url: '/video',
				templateUrl: '../../views/video/index.html',
				pageTitle: 'Video Directive',
				controller: 'videoController'
			});
	});
