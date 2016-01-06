'use strict';

angular.module('Commit.services')
  .factory('booksFactory', function($q, $timeout){
    return {
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders()
    };

    function getAllBooks() {
      var booksArray = [
        {
          book_id: 1,
          title: "Harry Potter",
          author: "J.K. Rowling",
          year_published: 2000
        },
        {
          book_id: 2,
          title: "The Future",
          author: "Cuan Cen Cua Cua",
          year_published: 2016
        },
        {
          book_id: 3,
          title: "Beautiful Life",
          author: "Quanci Fuoko",
          year_published: 2012
        }
      ];
      /*A deferred object is simply an object that exposes a promise as well as the associated methods for resolving that promise.
      It is constructed using the $q.deferred() function and exposes three main methods:
      resolve(), reject(), and notify().
      The associated promise object can be accessed via the "promise" property */

      var deferred = $q.defer();// po krijojme nje deferred object i cili ben te mundur perdorimin e promise
      $timeout(function() {     // $timeout simulon procesin asinkron
        var successful = true;
        if(successful) {
          // notify is used for notification
          deferred.notify('Please wait...');
          deferred.notify('You are in the right way...Thankyou !!!');
          deferred.resolve(booksArray);
        } else {
          deferred.reject("Error retrieving books");
        }
      }, 100);
      return deferred.promise;
      //Now that we've obtained a Promise object (defer.promise), let's register a callback function
      //that'll be executed after the async function completes -->
      //Using the then() method, attach a callback function to the returned promise object that prints out the returned string .
    }

    function getAllReaders() {
      return [
        {
          reader_id: 1,
          name: 'Erlind',
          weeklyReadingGoal: 300,
          totalMinutesRead: 1000
        },
        {
          reader_id: 2,
          name: 'Erlind',
          weeklyReadingGoal: 800,
          totalMinutesRead: 1800
        },
        {
          reader_id: 3,
          name: 'Senior Leone',
          weeklyReadingGoal: 1000,
          totalMinutesRead: 2000
        }
      ]
    }
  });
