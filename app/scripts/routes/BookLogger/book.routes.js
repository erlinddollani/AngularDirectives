'use strict';

angular.module('Commit.books.routes', [])
  .config(function($stateProvider){
    $stateProvider
      .state('Commit.books', {
        url: '/books',
        templateUrl: '../../views/BookLogger/index.html',
        pageTitle: 'Books',
        controller: 'booksController'
      });
  });
