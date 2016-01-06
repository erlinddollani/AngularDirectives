'use strict';
angular.module('Commit.services')
  .service('loggerService', function() {
    this.logBook = function(bookTitle) {
      console.log('Book title: ' + bookTitle);
    }
  });
