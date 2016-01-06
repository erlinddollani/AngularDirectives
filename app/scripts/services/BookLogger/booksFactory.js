'use strict';

angular.module('Commit.services')
  .factory('booksFactory', function(){
    return {
      getAllBooks: getAllBooks(),
      getAllReaders: getAllReaders()
    };

    function getAllBooks() {
      return [
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
