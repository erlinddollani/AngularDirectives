'use strict';
angular.module('Commit.controllers')
  .controller('booksController', function($scope, books, booksFactory, loggerService, valueService, $q){
    /* books that is injected is a provider service */
    $scope.appName = books.appName;
    $scope.appDesc = books.appDesc;

    console.log(booksFactory);

    booksFactory.getAllBooks()
      .then(function(result){
        console.log(result);
        $scope.booksArray = result;
      }, null/*function(error){
        console.error(error);
      }*/, function(notification){
        console.warn(notification);
      })
      .catch(function(err){
        console.log("This is an managed error: " + err);
      })
      .finally(function(){
       console.log("Programming is the future ART");
      });
    /*var booksPromise = booksFactory.getAllBooks();
    $q.all([booksPromise])
      .then(function(successes){
        $scope.booksArray = successes[0];
      })
      .catch(function(errors){
        console.log(errors);
      });*/

    $scope.readersArray = booksFactory.getAllReaders;

    console.log(loggerService);
    loggerService.logBook("Rainy Day");
    loggerService.logBook("Sunny Day");

    console.log(valueService.retrievePrice(5000));

  });
