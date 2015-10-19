'use strict';

angular.module('Google.myQuestion.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Google.myQuestion', {
				url: '/Questionnaire',
				templateUrl: '../../views/myQuestion/index.html',
				controller: 'myQuestionController',
				pageTitle: 'Questionnaire'
			});
	});