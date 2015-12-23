'use strict';

angular.module('Commit.myQuestion.routes',[])
	.config(function($stateProvider) {
		$stateProvider
			.state('Commit.myQuestion', {
				url: '/Questionnaire',
				templateUrl: '../../views/myQuestion/index.html',
				controller: 'myQuestionController',
				pageTitle: 'Questionnaire'
			});
	});
