'use strict';
angular.module('Commit.controllers')
  .controller('booksController', function($scope, books, booksFactory, loggerService, valueService){
    /* books that is injected is a provider service */
    $scope.appName = books.appName;
    $scope.appDesc = books.appDesc;

    console.log(booksFactory);

    $scope.booksArray = booksFactory.getAllBooks;
    $scope.readersArray = booksFactory.getAllReaders;

    console.log(loggerService);
    loggerService.logBook("Rainy Day");
    loggerService.logBook("Sunny Day");

    console.log(valueService.retrievePrice(5000))

  });
